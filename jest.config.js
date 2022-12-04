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
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  verbose: true,
  coverageReporters: ["json", "text"],
  snapshotSerializers: ["jest-serializer-vue"],
  collectCoverageFrom: [
    "src/**/*.{js,vue}",
    "!src/main.js",
    "!src/App.vue",
    "!**/node_modules/**",
  ],
};
