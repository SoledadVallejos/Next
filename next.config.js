/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com'
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com'
      }

    ]
  }

}

module.exports = nextConfig


/* Agrego el path de la img --> seg */
