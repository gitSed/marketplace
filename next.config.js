const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
        protocol: "https",
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/*")],
  },
};

module.exports = nextConfig;
