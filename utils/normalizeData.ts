export const isString = (string: unknown): string is string => {
  return typeof string === 'string' || string instanceof String;
};

export const isNumber = (number: unknown): number is number => {
  return typeof number === 'number' || number instanceof Number;
};

export const isBool = (bool: unknown): bool is boolean => {
  return typeof bool === 'boolean' || bool instanceof Boolean;
};

export const isNode = (node: unknown): node is Node => {
  return node instanceof Node;
};

export const parseToString = (param: unknown): string => {
  if (!isString(param)) throw new Error('Invalid string input');

  return param;
};

export const parseToBool = (param: unknown): boolean => {
  if (!isBool(param)) throw new Error('Invalid boolean input');

  return param;
};

export const parseToNumber = (param: unknown): number => {
  if (!isNumber(param)) throw new Error('Invalid number input');

  return param;
};

export const parseError = (error: unknown) => {
  let errorMessage = 'There was an error.';

  if (error instanceof Error) {
    errorMessage = `${error.name}: ${error.message}`;
  }

  return errorMessage;
};