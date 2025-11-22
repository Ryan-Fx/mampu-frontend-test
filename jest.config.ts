// Gunakan path eksplisit "next/jest.js"
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  testEnvironment: "jest-environment-jsdom",
  moduleDirectories: ["node_modules", "<rootDir>/src"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  moduleNameMapper: { "^@/(.*)$": "<rootDir>/src/$1" },
  coverageProvider: "v8",
};

export default createJestConfig(customJestConfig);
