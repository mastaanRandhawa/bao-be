import { copyFileSync, cpSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

const dist = resolve('dist');
const root = resolve('.');

rmSync(resolve(root, 'docs'), { recursive: true, force: true });
cpSync(dist, resolve(root, 'docs'), { recursive: true });

for (const dir of ['assets', 'images']) {
  rmSync(resolve(root, dir), { recursive: true, force: true });
  cpSync(resolve(dist, dir), resolve(root, dir), { recursive: true });
}

for (const file of ['index.html', '404.html']) {
  copyFileSync(resolve(dist, file), resolve(root, file));
}

copyFileSync(resolve(root, 'public', '.nojekyll'), resolve(root, '.nojekyll'));
copyFileSync(resolve(root, 'public', '.nojekyll'), resolve(root, 'docs', '.nojekyll'));

console.log('Synced dist → docs/, assets/, images/, index.html, 404.html');
