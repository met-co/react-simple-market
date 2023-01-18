export const gDelay = (time, value) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(value), time);
  });
