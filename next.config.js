/** @type {import('next').NextConfig} */


module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.imgbox.com',
        port: '',

      },
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com',
        port: ''

      },
      {
        protocol: 'https',
        hostname: 'iili.io/**',
        port: ''

      },
    ],
  },
}
