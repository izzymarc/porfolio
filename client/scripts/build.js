import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function build() {
  try {
    // Run the TypeScript compilation and Vite build
    execSync('tsc && vite build', { stdio: 'inherit' });

    // Ensure the directories exist
    await fs.ensureDir(path.join(__dirname, '../dist'));
    await fs.ensureDir(path.join(__dirname, '../dist/public'));

    // Copy files for Cloudflare Pages
    await fs.copy(
      path.join(__dirname, '../public/public'),
      path.join(__dirname, '../dist/public'),
      { overwrite: true }
    );

    console.log('Build completed successfully!');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

build(); 