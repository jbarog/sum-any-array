/* eslint-disable no-undef */
const {
  DEFAULT_PLAIN_DISTRIBUTION,
  DEFAULT_OBJECT_DISTRIBUTION,
  EXPECTED_SUM,
  defaultObjectParser,
} = require('./test-objects');

const sumArray = require('../src/sum-array');

describe('test sumArray', () => {
  test('should return sum plain array', async () => {
    const result = sumArray(DEFAULT_PLAIN_DISTRIBUTION);
    expect(result).toBeCloseTo(EXPECTED_SUM);
  });
  test('should return sum object array', async () => {
    const result = sumArray(DEFAULT_OBJECT_DISTRIBUTION, defaultObjectParser);
    expect(result).toBeCloseTo(EXPECTED_SUM);
  });
});
