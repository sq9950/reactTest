module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    globals: {
      sessionStorage: false,
      document: false,
      window: false,
      Headers: false,
      rootPath: false,
      document: false,
      Swiper: false,
      DDMap: false,
      Raven: false,
    },
    rules: {
      'camelcase': 0,
      'react/prop-types': 0,
      'import/extensions': 0,
      'import/no-unresolved': 0,
      'react/no-array-index-key': 0,
      'import/no-extraneous-dependencies': 0
    }
};
