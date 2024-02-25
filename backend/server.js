const dotenv = require('dotenv').config();
const http = require('http');
const multer = require('multer');
const cors = require('cors');

const { uploadToCloudinary } = require('./utils/cloudinaryUpload');

// Use cors middleware
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'POST',
};

const SERVER_PORT = process.env.SERVER_PORT || 5000;

const server = http.createServer(async (req, res) => {
  console.log(req.url);
  try {
    if (req.method === 'GET' && req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Hello from backend!' }));
    } else if (req.method === 'POST' && req.url === '/api/upload/meal/image') {
      const storage = multer.memoryStorage();
      const upload = multer({ storage });
      
      upload.single('image')(req, res, async (err) => {
        if (err) {
          console.error(err);
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Could not upload image!' }));
          return;
        }

        try {
          const imageUrl = await uploadToCloudinary(req.file);
          
          res.writeHead(200, { 
            'Content-Type': 'application/json',
            // Set CORS headers
            'Access-Control-Allow-Origin': corsOptions.origin,
            'Access-Control-Allow-Methods': corsOptions.methods,
          });
          res.end(JSON.stringify({ imageUrl }));
        } catch (error) {
          console.error(error);
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error }));
        }
      });
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found!');
    }
  } catch (error) {
    console.error(error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error!');
  }
});

server.listen(SERVER_PORT, () => {
  console.log(`Server running at http://localhost:${SERVER_PORT}`);
});