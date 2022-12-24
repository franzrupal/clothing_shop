import { Product } from "../../models";

export type ShopState = {
    products: Product[],
    total: number,
    addToCart: any,
    removeItem: any,
    totalitems: number,
    updateCart: any,
}

export const initialState = {
    products: [],
    total: 0,
    addToCart: null,
    removeItem: null,
    totalitems: 0,
    updateCart: null,
}