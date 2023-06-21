/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: 'https://hongmingu.github.io/hongmingu/',
  basePath: '/public'
};

export default nextConfig;