const fs = require('fs');
const path = require('path');

const worksDir = path.join(__dirname, '../public/works');
const outputDir = path.join(__dirname, '../src/data');
const outputFile = path.join(outputDir, 'works.json');

if (!fs.existsSync(worksDir)) {
  console.error(`Error: works directory does not exist at ${worksDir}`);
  process.exit(1);
}

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(worksDir);

function formatSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

function getTitle(filename) {
  const base = path.parse(filename).name;
  
  // Custom manual overrides for clear titles
  const mapping = {
    '29011239_644_company_profile-01': 'Company Profile Design - Front Cover',
    '29011239_644_company_profile-02': 'Company Profile Design - Back Cover',
    'ALMASKARI': 'Al Maskari Identity Card',
    'FAMILY-VISA-UK1': 'UK Family Visa Document Layout',
    'FRNDS-MOB-1': 'Friends Mobile Brand Poster',
    'Fero': 'Fero Pet Brand Banner',
    'NNN': 'N-Brand Logo Graphic',
    'RAMANIL-qr-side': 'Ramanil Tap Card - QR Side',
    'RAMANIL-tap-side': 'Ramanil Tap Card - Front Side',
    'SURENDRAN': 'Surendran Resume & Profile',
    'Surendranath Menon ': 'Surendranath Menon Branding',
    'TNS': 'TNS Design Resource Pack',
    'UHL-QR': 'UHL Card - QR Side',
    'UHL-TAP': 'UHL Card - Tap Side',
    'arabiansalad': 'Arabian Salad Menu Layout',
    'chilli-anchachavidi': 'Chilli Anchachavidi Pack - Front',
    'chilli-anchachavidi1': 'Chilli Anchachavidi Pack - Back',
    'chilli-frnt': 'Chilli Brand Front Cover',
    'chilli-pulikkalody': 'Chilli Pulikkalody Pack - Front',
    'chilli-pulikkalody1': 'Chilli Pulikkalody Pack - Back',
    'chilli-vandoor': 'Chilli Vandoor Pack - Front',
    'chilli-vandoor1': 'Chilli Vandoor Pack - Back',
    'creamofchickensoup': 'Cream of Chicken Soup Recipe Card',
    'credo-qr': 'Credo Tap Card - QR Side',
    'credo-tap1': 'Credo Tap Card - Tap Side',
    'dynamite-chicken-burger': 'Dynamite Chicken Burger Menu Design',
    'dynamite-shrimps': 'Dynamite Shrimps Menu Design',
    'envolopefront': 'Corporate Envelope Design',
    'flyer': 'Marketing & Promo Flyer',
    'ma': 'MA Logo Showcase - Dark',
    'ma2': 'MA Logo Showcase - Light',
    'medugare': 'Medugare Restaurant Menu',
    'mfc-new-menu': 'MFC Restaurant Food Menu',
    'neu': 'NEU Branding Graphic',
    'new': 'New Arrival Poster',
    'pharmacy-p': 'Pharmacy Product Catalog',
    'rollup': 'Marketing Rollup Banner',
    'sajad-thoni-back': 'Sajad Thoni Branding - Back',
    'sr-1': 'SR Identity Design - Alternative 1',
    'sr-2': 'SR Identity Design - Alternative 2',
    'vcfrnt': 'Visiting Card Mockup - Front',
    'visiting card teamferopet': 'Team FeroPet Business Card',
    'wydex-media-card-frnt': 'Wydex Media Card - Front',
    'wydex-media-card': 'Wydex Media Card - Layout',
    'wydex-media-cardBACK': 'Wydex Media Card - Back Layout',
    'wydex-media-cardBACKYES': 'Wydex Media Card - Back Final',
  };

  if (mapping[base]) {
    return mapping[base];
  }

  // Fallback prettification
  return base
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function getCategory(filename, title) {
  const name = filename.toLowerCase();
  const titleLower = title.toLowerCase();
  
  if (name.includes('menu') || name.includes('salad') || name.includes('soup') || name.includes('burger') || name.includes('shrimp') || titleLower.includes('menu') || titleLower.includes('recipe')) {
    return 'Culinary & Menus';
  }
  if (name.includes('card') || name.includes('visiting') || name.includes('qr') || name.includes('tap') || name.includes('logo') || name.includes('ma.jpg') || name.includes('ma2.jpg') || name.includes('nnn') || name.includes('sr-') || name.includes('maskari')) {
    return 'Branding & Identity';
  }
  if (name.includes('chilli') || name.includes('pack') || name.includes('label')) {
    return 'Product & Packaging';
  }
  if (name.includes('flyer') || name.includes('rollup') || name.includes('profile') || name.includes('envelope') || name.includes('envolope') || name.includes('resume') || name.includes('pdf')) {
    return 'Print & Marketing';
  }
  
  return 'Miscellaneous';
}

function getDescription(filename, category) {
  const ext = path.extname(filename).toUpperCase().substring(1);
  return `Professional ${category.toLowerCase().replace(' & ', ' and ')} showcase asset in ${ext} format. Clean layout and vector asset alignments.`;
}

const portfolioItems = files
  .filter(file => {
    // Only include actual files (exclude system files like .DS_Store) and ignore zip files
    const isActualFile = fs.statSync(path.join(worksDir, file)).isFile() && !file.startsWith('.');
    const isZip = path.extname(file).toLowerCase() === '.zip';
    return isActualFile && !isZip;
  })
  .map((file, index) => {
    const filePath = path.join(worksDir, file);
    const stats = fs.statSync(filePath);
    const title = getTitle(file);
    const category = getCategory(file, title);
    const ext = path.extname(file).toLowerCase();
    
    let type = 'image';
    if (ext === '.pdf') {
      type = 'pdf';
    } else if (ext === '.zip') {
      type = 'archive';
    }

    return {
      id: `work-${index + 1}`,
      filename: file,
      title: title,
      category: category,
      type: type,
      size: formatSize(stats.size),
      sizeBytes: stats.size,
      path: `/works/${file}`,
      description: getDescription(file, category),
      tags: [category.split(' ')[0], ext.substring(1).toUpperCase(), stats.size > 1024 * 1024 ? 'High-Res' : 'Vector']
    };
  })
  .sort((a, b) => a.title.localeCompare(b.title)); // Sort by title alphabetically

fs.writeFileSync(outputFile, JSON.stringify(portfolioItems, null, 2), 'utf-8');
console.log(`Successfully generated metadata for ${portfolioItems.length} files in ${outputFile}`);
