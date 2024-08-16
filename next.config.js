module.exports = {
    output: 'export',
    webpack(config) {
        return config;
    },
    images: {
      unoptimized: true,
    },
    compiler: {
      styledComponents: true,
    },
};