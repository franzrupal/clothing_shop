import { Product } from "../../models/Product";

export enum ShopActionType {
    ADD = 'add',
    REMOVE = 'remove',
    UPDATE = 'update',
    UPDATEITEMS = 'totalItems'
  }
  
  export type ShopAction = {
    type: ShopActionType;
    payload: any;
  };
  
  export const add = (product: Product): ShopAction => ({
    type: ShopActionType.ADD,
    payload: product,
  });
  
  export const remove = (product: Product): ShopAction => ({
    type: ShopActionType.REMOVE,
    payload: product,
  });

  export const update = (total: number): ShopAction => ({
    type: ShopActionType.UPDATE,
    payload: total,
  });

  export const totalItems = (totalitems: number): ShopAction => ({
    type: ShopActionType.UPDATEITEMS,
    payload: totalitems,
  });