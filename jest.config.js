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
  collectCoverage: true,
  collectCoverageFrom: ["**/*.{vue}", "!**/node_modules/**"],
  coverageReporters: ["json", "text"],
  snapshotSerializers: ["jest-serializer-vue"],
};
