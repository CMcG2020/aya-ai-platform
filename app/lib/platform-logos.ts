 // Helper function to get platform logo based on platform name
export function getPlatformLogo(platform: string): string {
  const p = (platform || '').toLowerCase();

  // Use local copies from /public/logos to avoid network-induced flashing
  if (p.includes('google cloud')) {
    return '/logos/google-cloud.png';
  }
  if (p.includes('google')) {
    return '/logos/google.png';
  }
  if (p.includes('amazon web services') || p.includes('aws')) {
    return '/logos/aws.png';
  }
  if (p.includes('microsoft')) {
    return '/logos/microsoft.png';
  }
  if (p.includes('ibm')) {
    return '/logos/ibm.png';
  }
  if (p.includes('deeplearning.ai')) {
    return '/logos/deeplearning-ai.png';
  }
  if (p.includes('stanford')) {
    return '/logos/stanford.png';
  }
  if (p.includes('university of pennsylvania') || p.includes('wharton') || p.includes('upenn')) {
    return '/logos/upenn.png';
  }
  if (p.includes('coursera')) {
    return '/logos/coursera.png';
  }
  if (p.includes('datacamp')) {
    return '/logos/datacamp.png';
  }
  if (p.includes('coding black females')) {
    return '/logos/coding-black-females.png';
  }
  if (p.includes('careerfoundry')) {
    return '/logos/careerfoundry.png';
  }
  if (p.includes('ux academy')) {
    return '/logos/ux-academy.png';
  }
  if (p.includes('ec-council') || p.includes('eccouncil')) {
    return '/logos/ec-council.png';
  }
  if (p.includes('products that count')) {
    return '/logos/products-that-count.png';
  }
  if (p.includes('allwomen')) {
    return '/logos/allwomen.png';
  }
  if (p.includes('hackbright')) {
    return '/logos/hackbright.png';
  }
  if (p.includes('women in tech')) {
    return '/logos/women-in-tech.png';
  }
  if (p.includes('various')) {
    return '/logos/various.png';
  }

  // Default fallback to a local, small asset
  return '/logos/coursera.png';
}