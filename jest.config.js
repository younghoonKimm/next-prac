// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    "^@/(.*)$": "<rootDir>/src/$1",

    "^@/public/(.*)$": "<rootDir>/public/$1",
  },
  // ignore patterns
  // transformIgnorePatterns:[]
  setupFilesAfterEnv: ["./jest.setup.js"],
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "!./src/**/_*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
  ],
  coverageThreshold: {
    // set coverage
    // global: {
    //   branches: 80,
    //   functions: 80,
    //   lines: 80,
    //   statements: 80,
    // },
  },
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
