const withImages = require('next-images');
module.exports = {
    ...withImages(),
    images: {
        disableStaticImages: true,
        unoptimized: true,
    },
    compiler: {
      styledComponents: true,
    },
};