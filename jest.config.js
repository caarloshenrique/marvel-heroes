module.exports = {
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist"],
  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.ts"
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
  },
  testEnvironment: 'jsdom'
};
