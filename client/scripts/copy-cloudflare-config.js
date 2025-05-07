import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function copyCloudflareConfig() {
  try {
    const sourceDir = path.join(__dirname, '../public/public');
    const targetDir = path.join(__dirname, '../dist/public');

    // Ensure target directory exists
    await fs.ensureDir(targetDir);

    // Copy _redirects and _headers files
    await fs.copy(
      path.join(sourceDir, '_redirects'),
      path.join(targetDir, '_redirects')
    );
    await fs.copy(
      path.join(sourceDir, '_headers'),
      path.join(targetDir, '_headers')
    );

    console.log('Cloudflare configuration files copied successfully!');
  } catch (error) {
    console.error('Failed to copy Cloudflare configuration files:', error);
    process.exit(1);
  }
}

copyCloudflareConfig(); 