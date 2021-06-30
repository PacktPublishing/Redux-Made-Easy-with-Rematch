const nF = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const number = (n: number) => nF.format(n);
