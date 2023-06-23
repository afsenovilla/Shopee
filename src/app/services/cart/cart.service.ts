import { CartItem } from './../../shared/models/CartItem';
import { Injectable } from '@angular/core';
import { Apparel } from 'src/app/shared/models/Apparel';
import { Cart } from 'src/app/shared/models/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();

  addToCart(clothes:Apparel):void{
    let cartItem = this.cart.items.find(item => item.clothes.id === clothes.id);
    if(cartItem){
      this.changeQuantity(clothes.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(clothes));
  }

  removeFromCart(clothesId:number): void{
    this.cart.items =
    this.cart.items.filter(item => item.clothes.id != clothesId);
  }

  changeQuantity(clothesId:number, quantity:number){
    let cartItem = this.cart.items.find(item => item.clothes.id === clothesId);
    if (!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart():Cart{
    return this.cart;
  }
}
