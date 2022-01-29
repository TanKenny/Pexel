export const debounce = (fn: any) => {
  let timer: any;

  return (...args: any[]) => {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, 500);
  };
};
