module.exports = {
  serverRuntimeConfig: { secret: process.env.SECRET },
  publicRuntimeConfig: { api: process.env.API },
  images: {
    domains: [
      'https://cdn.pixabay.com',
      'https://nfttunz-cdn.fra1.digitaloceanspaces.com',
      'https://app.nfttunz.io',
    ],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/old-blog/:slug',
  //       destination: '/news/:slug', // Matched parameters can be used in the destination
  //       permanent: true,
  //       basePath: false,
  //     },
  //   ];
  // },
};
