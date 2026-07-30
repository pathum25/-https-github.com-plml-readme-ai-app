const fs = require('fs');
const path = require('path');

const CODE_PATH = path.join(__dirname, '..', 'data', 'CODEOWNERS.txt');
if (!fs.existsSync(CODE_PATH)) {
  console.error('No CODEOWNERS.txt found in data/');
  process.exit(1);
}
const text = fs.readFileSync(CODE_PATH, 'utf8');
console.log('CODEOWNERS content length:', text.length);
console.log('Preview:\n', text.slice(0, 500));
console.log('\nIn this simple scaffold we do not persist embeddings by default. To enable embeddings, modify this script to call your embeddings provider and save vectors to disk or a DB.');
