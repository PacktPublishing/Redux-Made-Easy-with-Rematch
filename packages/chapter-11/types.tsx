/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  Shop: undefined;
  Cart: undefined;
  ProductDetail: { item: ProductType };
  NotFound: undefined;
};

export type BottomTabParamList = {
  Shop: undefined;
  Cart: undefined;
};

export type TabOneParamList = {
  Shop: undefined;
};

export type TabTwoParamList = {
  Cart: undefined;
};

export type ProductType = {
  id: string;
  image_url: string;
  stock: number;
  price: number;
  productName: string;
  productDescription: string;
  favorite: boolean;
};
