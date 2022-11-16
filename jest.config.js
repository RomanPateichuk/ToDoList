module.exports = {
  globals: {
    "vue-jest": {
      experimentalCSSCompile: false,
    },
  },
  moduleFileExtensions: ["js", "json", "vue"],
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest",
  },
};
