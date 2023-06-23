import { Apparel } from "./Apparel";

export class CartItem{
    constructor(clothes:Apparel){
        this.clothes = clothes;
    }
    clothes:Apparel;
    quantity:number = 1;

    get price():number{
        return this.clothes.price * this.quantity;
    }
}