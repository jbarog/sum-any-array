const DEFAULT_PLAIN_DISTRIBUTION = [1.1, 4.1, 2.1, 3.1];
const DEFAULT_OBJECT_DISTRIBUTION = [
  { value: 1.1 },
  { value: 4.1 },
  { value: 2.1 },
  { value: 3.1 },
];

const EXPECTED_SUM = 10.4;

const defaultObjectParser = (x) => x.value;

module.exports = {
  DEFAULT_PLAIN_DISTRIBUTION,
  DEFAULT_OBJECT_DISTRIBUTION,
  EXPECTED_SUM,
  defaultObjectParser,
};
