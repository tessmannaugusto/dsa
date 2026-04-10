import { execFile } from 'child_process';
import ffmpegPath from 'ffmpeg-static';
import fs from 'fs';
import path from 'path';

function mergeAudios() {
  return new Promise((resolve, reject) => {
    const audiosInputDir = path.join(process.cwd(), 'audios', 'input');
    const audiosOutputDir = path.join(process.cwd(), 'audios', 'output');
    const outputFile = path.join(audiosOutputDir, 'audio_book.mp3');
    
    if (!fs.existsSync(audiosInputDir)) {
      return reject(new Error(`Directory not found: ${audiosInputDir}`));
    }

    if (!fs.existsSync(audiosOutputDir)) {
      fs.mkdirSync(audiosOutputDir, { recursive: true });
    }

    const inputFiles = fs.readdirSync(audiosInputDir)
      .filter(file => file.endsWith('.mp3'))
      .sort()
      .map(file => path.join(audiosInputDir, file));

    if (inputFiles.length === 0) {
      return reject(new Error(`No .mp3 files found in: ${audiosInputDir}`));
    }

    console.log(`Merging ${inputFiles.length} files from ${audiosInputDir} into ${outputFile}...`);

    const listPath = 'concat-list.txt';
    const listContent = inputFiles.map(file => `file '${file}'`).join('\n');
    fs.writeFileSync(listPath, listContent);

    const args = [
      '-f', 'concat',
      '-safe', '0',
      '-i', listPath,
      '-c', 'copy',
      '-y', // Overwrite output file if it exists
      outputFile
    ];

    execFile(ffmpegPath, args, (error, stdout, stderr) => {
      if (fs.existsSync(listPath)) {
        fs.unlinkSync(listPath);
      }

      if (error) {
        console.error('FFmpeg Error:', stderr);
        return reject(error);
      }
      resolve(outputFile);
    });
  });
}

mergeAudios()
  .then((output) => console.log(`✅ Success! Merged audio saved to: ${output}`))
  .catch(err => console.error('❌ Error merging audios:', err.message));
