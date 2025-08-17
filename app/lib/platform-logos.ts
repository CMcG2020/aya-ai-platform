// Helper function to get platform logo based on platform name
export function getPlatformLogo(platform: string): string {
  const p = (platform || '').toLowerCase();

  // For GitHub Pages deployment, we need to handle basePath correctly
  const basePath = process.env.NODE_ENV === 'production' ? '/aya-ai-platform' : '';
  
  if (p.includes('google cloud')) {
    return `${basePath}/logos/google-cloud.png`;
  }
  if (p.includes('google')) {
    return `${basePath}/logos/google.png`;
  }
  if (p.includes('amazon web services') || p.includes('aws')) {
    return `${basePath}/logos/aws.png`;
  }
  if (p.includes('microsoft')) {
    return `${basePath}/logos/microsoft.png`;
  }
  if (p.includes('ibm')) {
    return `${basePath}/logos/ibm.png`;
  }
  if (p.includes('deeplearning.ai')) {
    return `${basePath}/logos/deeplearning-ai.png`;
  }
  if (p.includes('stanford')) {
    return `${basePath}/logos/stanford.png`;
  }
  if (p.includes('university of pennsylvania') || p.includes('wharton') || p.includes('upenn')) {
    return `${basePath}/logos/upenn.png`;
  }
  if (p.includes('coursera')) {
    return `${basePath}/logos/coursera.png`;
  }
  if (p.includes('datacamp')) {
    return `${basePath}/logos/datacamp.png`;
  }
  if (p.includes('coding black females')) {
    return `${basePath}/logos/coding-black-females.png`;
  }
  if (p.includes('careerfoundry')) {
    return `${basePath}/logos/careerfoundry.png`;
  }
  if (p.includes('ux academy')) {
    return `${basePath}/logos/ux-academy.png`;
  }
  if (p.includes('ec-council') || p.includes('eccouncil')) {
    return `${basePath}/logos/ec-council.png`;
  }
  if (p.includes('products that count')) {
    return `${basePath}/logos/products-that-count.png`;
  }
  if (p.includes('allwomen')) {
    return `${basePath}/logos/allwomen.png`;
  }
  if (p.includes('hackbright')) {
    return `${basePath}/logos/hackbright.png`;
  }
  if (p.includes('women in tech')) {
    return `${basePath}/logos/women-in-tech.png`;
  }
  if (p.includes('various')) {
    return `${basePath}/logos/various.png`;
  }

  // Default fallback
  return `${basePath}/logos/coursera.png`;
}