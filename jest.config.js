module.exports = {
  roots: ['<rootDir>/src', '<rootDir>/e2e'],
  testMatch: ['**/*.(test|spec|e2e-test|e2e-spec).ts'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '\\.ts$': 'ts-jest',
  },
  moduleNameMapper: {
    '@/(.+)': '<rootDir>/src/$1',
    '@/e2e/(.+)': '<rootDir>/e2e/$1',
  },
};
