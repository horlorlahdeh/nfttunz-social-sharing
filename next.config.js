module.exports = {
  serverRuntimeConfig: { secret: process.env.SECRET },
  publicRuntimeConfig: { api: process.env.API },
  images: {
    domains: [
      'cdn.pixabay.com',
      'nfttunz-cdn.fra1.digitaloceanspaces.com',
      'app.nfttunz.io',
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
