/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com'],
    },
    basePath: "",
    async rewrites() {
      return [
        {
          source: '/api/upload/image',
          destination: 'http://backend-culinarycompass:5000/api/upload/image'
        }
      ]
    }
};

export default nextConfig;