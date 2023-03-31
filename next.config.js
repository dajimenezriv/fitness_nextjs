/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/foods',
        basePath: false,
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
