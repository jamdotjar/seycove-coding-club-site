const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const mdDirectory = path.join(__dirname, '..', 'slides', 'md');
const outputDirectory = path.join(__dirname, '..', 'slides');

// Path to the locally installed MARP CLI
const marpCliPath = path.join('node_modules', '.bin', 'marp');

// Read the md directory
fs.readdir(mdDirectory, (err, files) => {
  if (err) {
    console.error('Error reading md directory:', err);
    return;
  }

  // Filter out slideNames.md and non-MD files
  const mdFiles = files.filter(file => file.endsWith('.md') && file !== 'slideNames.md');

  mdFiles.forEach(file => {
    const inputPath = path.join(mdDirectory, file);
    const outputFileName = file.replace('.md', '.html');
    const outputPath = path.join(outputDirectory, outputFileName);

    // Use the locally installed MARP CLI to convert MD to HTML
    try {
      execSync(`${marpCliPath} ${inputPath} -o ${outputPath}`);
      console.log(`Converted ${file} to HTML.`);
    } catch (error) {
      console.error(`Error converting ${file}:`, error);
    }
  });
});