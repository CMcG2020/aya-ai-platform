const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function optimizeImage() {
  try {
    // Optimize the main background image
    const inputPath = path.join(__dirname, '../public/ai-imagery.png');
    const outputPath = path.join(__dirname, '../public/ai-imagery-optimized.webp');
    
    // Check if input file exists
    try {
      await fs.access(inputPath);
    } catch (error) {
      console.log('Input image not found, skipping optimization');
      return;
    }
    
    // Optimize and convert to WebP
    await sharp(inputPath)
      .webp({ quality: 80 })
      .resize(1920, 1080, { fit: 'cover' }) // Resize to a reasonable size
      .toFile(outputPath);
    
    console.log('Image optimized successfully!');
    console.log('Original size: 1.8MB');
    
    // Get new file size
    const stats = await fs.stat(outputPath);
    const newSize = (stats.size / 1024 / 1024).toFixed(2);
    console.log(`Optimized size: ${newSize}MB`);
    console.log(`Reduction: ${((1 - newSize/1.8) * 100).toFixed(1)}%`);
    
  } catch (error) {
    console.error('Error optimizing image:', error);
  }
}

optimizeImage();