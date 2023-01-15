module.exports = {
  ...require('./jest.config.js'),
  roots: ['<rootDir>/e2e'],
  testMatch: ['**/*.(e2e-test|e2e-spec).ts'],
};
