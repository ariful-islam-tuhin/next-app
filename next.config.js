/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images:{
    domains:['yocket.com',"d15gkqt2d16c1n.cloudfront.net",  "ui-avatars.com"]
  }
};
// module.exports = {
//   images: {
//      domains: ["cdn.pixabay.com"]
//   }
//   };
// module.exports = {
//   images: {
//     domains: ['assets.example.com'],
//   },
// }
