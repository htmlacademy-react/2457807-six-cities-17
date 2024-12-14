const getRandomArrayElement = <T>(items : T[]) : T => items[Math.floor(Math.random() * items.length)];

const getRandomInteger = (startNumber : number, endNumber : number) : number=> {
  const lower = Math.ceil(Math.min(startNumber, endNumber));
  const upper = Math.floor(Math.max(startNumber, endNumber));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
const getRandomDate = (startDate : Date, endDate : Date) : Date => new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));


export {getRandomArrayElement, getRandomInteger, getRandomDate};
