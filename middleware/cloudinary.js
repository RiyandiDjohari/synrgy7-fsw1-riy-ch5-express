const { v2: cloudinary } = require('cloudinary');

cloudinary.config({ 
    cloud_name: 'df25q8a0m', 
    api_key: '112986234451288', 
    api_secret: "J13wYjJMTBX6az8EPaZ0Nif0J38" 
  });

module.exports = cloudinary;