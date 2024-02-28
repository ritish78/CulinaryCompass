const cloudinary = require('cloudinary').v2;
const sharp = require('sharp');
const dotenv = require('dotenv');

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const isImage = (file) => {
  const acceptedImageTypes = ["image/png", "image/jpg", "image/jpeg", "image/webp", "image/gif"];
  return acceptedImageTypes.includes(file.mimetype);
}

const uploadToCloudinary = async (file) => {
  if (!file) {
    throw new Error('Image was not selected!');
  }

  if (!isImage(file)) {
    throw new Error('Only images are allowed to be uploaded!');
  }

  const transformedBuffer = await sharp(file.buffer)
    .webp()
    .toBuffer();

  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream({
      folder: 'CulinaryCompass',
      public_id: `${file.fieldname}_${Date.now()}`,
      format: 'webp',
      transformation: [
        { width: 1000, height: 1250, crop: 'fit' }
      ]
    }, (error, result) => {
      if (error) {
        console.error(error);
        reject('Only images are allowed!');
      } else {
        resolve(result.secure_url);
      }
    }).end(transformedBuffer);
  });
}

module.exports = { uploadToCloudinary };