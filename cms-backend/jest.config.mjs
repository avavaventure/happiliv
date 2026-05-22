export default {
  testEnvironment: "node",
  collectCoverageFrom: [
    "src/**/*.js",
    "!src/index.js"
  ],
  coverageReporters: ["text", "lcov"]
};
