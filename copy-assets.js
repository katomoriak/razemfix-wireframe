const fs = require('fs');
const path = require('path');

const sourceDir = 'C:/Users/Marco/.gemini/antigravity-ide/brain/301412c4-22a7-43bf-9bc7-2a93dbea24c6';
const destDir = path.join(__dirname, 'public');

const files = [
  { src: 'stock_warehouse_1780926400422.png', dest: 'stock_warehouse.png' },
  { src: 'industrial_fasteners_1780926414283.png', dest: 'industrial_fasteners.png' },
  { src: 'technical_drawing_fasteners_1780926430504.png', dest: 'technical_drawing_fasteners.png' }
];

console.log('Iniciando cópia de imagens...');
try {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
    console.log('Pasta public criada.');
  }

  files.forEach(file => {
    const srcPath = path.join(sourceDir, file.src);
    const destPath = path.join(destDir, file.dest);
    
    console.log(`Copiando de: ${srcPath}`);
    console.log(`Para: ${destPath}`);
    
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`Sucesso: ${file.dest} copiado.`);
    } else {
      console.error(`Erro: Arquivo de origem não encontrado: ${srcPath}`);
    }
  });
  console.log('Processo de cópia concluído.');
} catch (error) {
  console.error('Ocorreu um erro durante a cópia:', error);
}
process.exit(0);
