export interface IProduct {
  _id?: string;
  name: string;
  priceNew: number;
  priceOld?: number;
  image?: string;
  quantity: number;
  description?: string;
  categoryId: string
}
