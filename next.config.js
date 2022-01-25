module.exports = {
  serverRuntimeConfig: { secret: process.env.SECRET },
  publicRuntimeConfig: { api: process.env.API },
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
