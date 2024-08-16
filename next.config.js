const withImages = require('next-images');
module.exports = {
    ...withImages(),
    output: "export",
    images: {
        disableStaticImages: true,
        unoptimized: true,
    },
    compiler: {
      styledComponents: true,
    },
};