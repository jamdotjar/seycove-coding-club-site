const fs = require('fs');
const path = require('path');

const slidesDirectory = path.join(__dirname, '..', 'slides');
const slidesHtmlTemplatePath = path.join(__dirname, '..', 'slides.html.template');
const slidesHtmlOutputPath = path.join(__dirname, '..', 'slides.html');
const slideNamesPath = path.join(__dirname, '..', 'slides', 'md', 'slideNames.md'); // Path to the Markdown file

// Read and parse the Markdown file to get slide names
fs.readFile(slideNamesPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading slide names:', err);
    return;
  }


  // Split the file content by new lines to get an array of names
  const slideNames = data.split('\n').filter(name => name.trim() !== '');

  // Proceed with reading the slides directory
  fs.readdir(slidesDirectory, (err, files) => {
    if (err) {
      console.error('Error reading slides directory:', err);
      return;
    }

    // Filter for HTML files
    const slideFiles = files.filter(file => file.endsWith('.html'));

    // Generate HTML blocks for each slide using names from the Markdown file
    const slidesHtml = slideFiles.map((file, index) => {
      const slideTitle = slideNames[index] || 'Untitled Slide'; // Use the name from the Markdown file or a default
      return `<div class="game">
          <span class="gameTitle">${slideTitle}</span><a class="gameLink"
            href="slides/${file}" link>slideshow</a>
        </div>`;
    }).join('\n');

    
  // Read the template HTML
    fs.readFile(slidesHtmlTemplatePath, 'utf8', (err, templateHtml) => {
        if (err) {
        console.error('Error reading slides HTML template:', err);
        return;
        }

    // Replace placeholder in template with generated slides HTML
    const outputHtml = templateHtml.replace('<!-- SLIDES_PLACEHOLDER -->', slidesHtml);

    // Write the output HTML to slides.html
    fs.writeFile(slidesHtmlOutputPath, outputHtml, err => {
      if (err) {
        console.error('Error writing to slides.html:', err);
        return;
      }
      console.log('slides.html has been updated with the latest slides.');
    });
  });
});
});