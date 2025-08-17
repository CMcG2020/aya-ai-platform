const fs = require('fs');
const https = require('https');
const path = require('path');

// Create logos directory if it doesn't exist
const logosDir = path.join(__dirname, 'public', 'logos');
if (!fs.existsSync(logosDir)) {
  fs.mkdirSync(logosDir, { recursive: true });
}

// Platform logos to download with their URLs and filenames
const platformLogos = [
  // Technology companies and platforms
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/DeepLearningAI_logo.svg/1200px-DeepLearningAI_logo.svg.png', filename: 'deeplearning-ai.png' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png', filename: 'google.png' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png', filename: 'ibm.png' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Stanford_University_seal_2003.svg/1200px-Stanford_University_seal_2003.svg.png', filename: 'stanford.png' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/DataCamp_logo.png/1200px-DataCamp_logo.png', filename: 'datacamp.png' },
  { url: 'https://codingblackfemales.com/wp-content/uploads/2021/03/cropped-CBFLogo1-1-192x192.png', filename: 'coding-black-females.png' },
  { url: 'https://careerfoundry.com/uploads/careerfoundry-logo.svg', filename: 'careerfoundry.png' },
  { url: 'https://uxacademy.com/wp-content/uploads/2021/03/UX-Academy-Logo-1-300x138.png', filename: 'ux-academy.png' },
  { url: 'https://www.eccouncil.org/wp-content/uploads/2020/09/EC-Council-Logo-1.png', filename: 'ec-council.png' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png', filename: 'aws.png' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/1200px-Google_Cloud_logo.svg.png', filename: 'google-cloud.png' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png', filename: 'microsoft.png' },
  { url: 'https://www.productsthatcount.com/wp-content/uploads/2020/05/ProductsThatCount-Logo-300x138.png', filename: 'products-that-count.png' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/UPenn_shield_with_banner.svg/1200px-UPenn_shield_with_banner.svg.png', filename: 'upenn.png' },
  { url: 'https://allwomen.tech/wp-content/uploads/2021/03/allWomen-Logo-300x138.png', filename: 'allwomen.png' },
  { url: 'https://hackbrightacademy.com/wp-content/uploads/2021/03/Hackbright-Academy-Logo-300x138.png', filename: 'hackbright.png' },
  { url: 'https://www.womenintechnetwork.com/wp-content/uploads/2021/03/Women-in-Tech-Network-Logo-300x138.png', filename: 'women-in-tech.png' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Coursera_logo_%282020%29.svg/512px-Coursera_logo_%282020%29.svg.png', filename: 'coursera.png' },
  // Add a generic "various" logo for platforms that don't have specific logos
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Coursera_logo_%282020%29.svg/512px-Coursera_logo_%282020%29.svg.png', filename: 'various.png' }
];

// Function to download a file
function downloadFile(url, filename, directory) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(directory, filename);
    const file = fs.createWriteStream(filePath);
    
    console.log(`Downloading ${filename}...`);
    
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${filename}: ${response.statusCode} ${response.statusMessage}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${filename}`);
        resolve();
      });
      
      file.on('error', (err) => {
        fs.unlink(filePath, () => {}); // Delete the file if there's an error
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Download all platform logos
async function downloadPlatformLogos() {
  console.log('Starting platform logo downloads...');
  
  for (const logo of platformLogos) {
    try {
      await downloadFile(logo.url, logo.filename, logosDir);
    } catch (error) {
      console.error(`Error downloading ${logo.filename}:`, error.message);
    }
  }
  
  console.log('Platform logo downloads completed!');
}

// Run the download
downloadPlatformLogos().catch(console.error);