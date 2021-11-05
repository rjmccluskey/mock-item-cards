import { get } from "./api";

export interface Item extends CommonItem {
  variants: Variant[];
  imageUrls: Image[];
}

export interface CommonItem {
  id: string;
  name: string;
  description: string;
}

export interface Variant extends CommonItem {
  price: number;
}

export interface Image {
  url: string;
}

export async function getItems(): Promise<Item[]> {
  return get('items');
}

export async function getItem(id: string): Promise<Item> {
  return get(`items/${id}`);
}
