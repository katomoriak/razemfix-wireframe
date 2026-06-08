const fs = require('fs');
const path = require('path');
const https = require('https');

const destDir = path.join(__dirname, 'public');

const files = [
  { url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80', dest: 'stock_warehouse.png' },
  { url: 'https://images.unsplash.com/photo-1530124566582-a618bc2615ad?auto=format&fit=crop&w=800&q=80', dest: 'industrial_fasteners.png' },
  { url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80', dest: 'technical_drawing_fasteners.png' }
];

console.log('Iniciando download de imagens industriais...');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Falha no download: Status ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Sucesso: ${path.basename(dest)} baixado.`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  for (const item of files) {
    try {
      console.log(`Baixando: ${item.dest}...`);
      await download(item.url, path.join(destDir, item.dest));
    } catch (error) {
      console.error(`Erro ao baixar ${item.dest}:`, error);
    }
  }
  console.log('Download concluído.');
  process.exit(0);
}

run();
