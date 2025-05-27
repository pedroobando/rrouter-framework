// sleep.ts
// TODO: This function creates a delay for a specified number of milliseconds.
export const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
