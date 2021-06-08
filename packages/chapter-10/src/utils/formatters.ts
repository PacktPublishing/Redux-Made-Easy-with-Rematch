const nF = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const number = (n) => nF.format(n);
