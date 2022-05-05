const getRandomInt = (min: number, max: number):number => {
  if (min > max) {
    [min, max] = [max, min];
  }
  min = Math.ceil(min);
  max = Math.trunc(max);
  const randomFloat = Math.random();
  return Math.trunc(randomFloat * (max - min + 1)) + min;
};

const getRandomFloat = (min: number, max: number, numOfDecimalPlace: number = 1) => {
  if (min >= max) {
    [min, max] = [max, min];
  }
  const randomFloat = Math.random();
  const randomNumber = (randomFloat * (max - min)) + min;
  return +randomNumber.toFixed(numOfDecimalPlace);
};

const getRandomValueFromArr = <T>(arr: T[]): T => {
  const randomValue = arr[getRandomInt(0, arr.length - 1)];
  if (typeof randomValue === 'object') {
    return { ...randomValue };
  }
  return randomValue;
};

const getTrueOrFalse = (): boolean => Boolean(getRandomInt(0, 1));

const capitalize = (str: string) : string => `${str[0].toUpperCase()}${(str.slice(1).toLowerCase())}`;

export {
  getRandomInt, getRandomFloat, getRandomValueFromArr, getTrueOrFalse, capitalize,
};
