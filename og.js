const fs = require('fs').promises;
 
const loadLocalImage = async () => {
  const imageData = await fs.readFile('/images/weddingEvents/lulu.png');
  // Process image data
};
