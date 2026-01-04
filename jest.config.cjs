const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: __dirname,
})

const customJestConfig = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/e2e/"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/", "<rootDir>/e2e/"],
}

module.exports = createJestConfig(customJestConfig)
