import sharp from 'sharp';
import toIco from 'to-ico';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const publicDir = join(__dirname, '../public');

// 读取 SVG
const svgBuffer = readFileSync(join(publicDir, 'favicon.svg'));

// 生成真正的 ICO 文件
async function generateFavicon() {
  try {
    // 生成多种尺寸的 PNG
    const png16 = await sharp(svgBuffer)
      .resize(16, 16)
      .png()
      .toBuffer();
    
    const png32 = await sharp(svgBuffer)
      .resize(32, 32)
      .png()
      .toBuffer();
    
    const png48 = await sharp(svgBuffer)
      .resize(48, 48)
      .png()
      .toBuffer();
    
    // 将多个 PNG 组合成 ICO
    const icoBuffer = await toIco([png16, png32, png48]);
    
    // 保存文件
    writeFileSync(join(publicDir, 'favicon.ico'), icoBuffer);
    writeFileSync(join(publicDir, 'favicon-16x16.png'), png16);
    writeFileSync(join(publicDir, 'favicon-32x32.png'), png32);
    
    console.log('✅ Favicon files generated successfully!');
    console.log('   - favicon.ico (真正的 ICO 格式)');
    console.log('   - favicon-16x16.png');
    console.log('   - favicon-32x32.png');
  } catch (error) {
    console.error('❌ Error generating favicon:', error);
    process.exit(1);
  }
}

generateFavicon();

