/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'easydrawingguides.com'
      },

    ]
  }

}

module.exports = nextConfig


