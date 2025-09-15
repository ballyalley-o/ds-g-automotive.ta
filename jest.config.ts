import type {Config} from 'jest'

const config: Config = {
  testEnvironment : 'node',
  roots           : ['<rootDir>/test'],
  moduleNameMapper: {
    '^lib/(.*)$'      : '<rootDir>/lib/$1',
    '^component/(.*)$': '<rootDir>/component/$1',
  },
  moduleDirectories: ['node_modules', '<rootDir>'],
  preset           : 'ts-jest',
  setupFiles       : ['<rootDir>/jest.setup.ts'],
}

export default config
