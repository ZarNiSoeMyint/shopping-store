import {Injectable, signal} from '@angular/core';
import {Cart} from "../../data/Cart";
import {CartItem} from "../../data/CartItem";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Cart>({
    items:[],
    count:0,
    total:0
  })

  addItem(item:CartItem){
    const itemObject = this.cart()
      .items?.find( t => t.id === item.id);

    if(itemObject){
      this._increaseCartItem(itemObject);
    }
    else{
      this.cart.update((prevCart) =>({
          ...prevCart,
          items: [...prevCart.items , item],
          count: prevCart.count + 1,
          total: prevCart.total + item.price
      }))
    }
  }

  constructor() { }

  _increaseCartItem(item:CartItem){
    this.cart.update((prevCart)=>{
        const newCart={
          ...prevCart,
          items: [...prevCart.items ]
        };
        const itemObject = newCart.
        items.find(i =>i.id === item.id);
        itemObject!.quantity = itemObject!.quantity + 1;
        newCart!.count  = newCart!.count  + 1;
        newCart!.total  = newCart!.total  + item.price;
        return newCart;
    });
  }
  decreaseCartItem(item:CartItem){
    this.cart.update((prevCart) =>{
      const newCart ={
        ...prevCart,
        items:[...prevCart.items]
      }
      const itemObj = newCart.items
        .find(i => i.id === item.id) as CartItem;
      itemObj!.quantity = itemObj!.quantity - 1;
      newCart.count = newCart.count - 1
      newCart.total -= itemObj?.price
      return newCart;
    })
  }

}
