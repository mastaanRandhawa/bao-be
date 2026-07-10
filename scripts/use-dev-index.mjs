import { copyFileSync } from 'node:fs';

copyFileSync('index.dev.html', 'index.html');
console.log('Using index.dev.html for Vite');
