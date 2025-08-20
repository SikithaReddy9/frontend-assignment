import '@testing-library/jest-dom';

if (!(new TextEncoder().encode('') instanceof Uint8Array)) {
  const { TextEncoder } = require('util');
  global.TextEncoder = TextEncoder;
}