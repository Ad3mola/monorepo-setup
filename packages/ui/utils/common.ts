export const getArraySum = (arr: number[]): number => arr.reduce((a, b) => a + b, 0);

export const getCheapest = (arr: number[]): number => {
  const priceArray = arr.map((e) => e);
  const lowest = Math.min(...priceArray);
  return lowest;
};
