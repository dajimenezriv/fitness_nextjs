/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/nutrition',
        basePath: false,
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
