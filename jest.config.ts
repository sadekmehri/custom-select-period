/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  clearMocks: true,
  collectCoverage: true,
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['src/**/*.(ts|tsx)'],
  coverageDirectory: 'coverage',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  rootDir: './',
  modulePaths: ['<rootDir>'],
  moduleDirectories: ['node_modules', 'src'],
  coveragePathIgnorePatterns: [
    '\\\\node_modules\\\\',
    './src/main.tsx',
    '\\.d\\.ts$',
    '<rootDir>/src/theme',
    '<rootDir>/src/constants',
  ],
  coverageProvider: 'babel',
  coverageReporters: ['json', 'text', 'html'],
  showSeed: true,
  // coverageThreshold: {
  //   global: {
  //     lines: 90,
  //   },
  // },
  errorOnDeprecated: true,
  maxWorkers: '50%',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts', '<rootDir>/__mocks__/console.ts'],
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: [
    '\\\\node_modules\\\\',
    '\\.d\\.ts$',
    '<rootDir>/src/theme',
    '<rootDir>/src/constants',
  ],
  moduleNameMapper: {},
  transformIgnorePatterns: [],
  watchman: true,
  cache: false,
  passWithNoTests: true,
  runTestsByPath: true,
  testTimeout: 30_000,
  verbose: true,
  detectOpenHandles: true,
  forceExit: true,
}

export default config
