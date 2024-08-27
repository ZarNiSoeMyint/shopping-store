import {Component, inject, input} from '@angular/core';
import {CartItem} from "../../../../../data/CartItem";
import {QuantityStepperComponent} from "../quantity-stepper/quantity-stepper.component";
import {CartService} from "../../../../service/cart.service";

@Component({
  selector: 'app-cart-view',
  standalone: true,
  imports: [
    QuantityStepperComponent
  ],
  templateUrl: './cart-view.component.html',
  styleUrl: './cart-view.component.scss'
})
export class CartViewComponent {
    cartItem = input.required<CartItem>({})
    cartService = inject(CartService);

    changeCartItemQuantity(quantity:number){
      const increase = this.cartItem().quantity < quantity;
      const decrease = this.cartItem().quantity > quantity;
      if(increase){
        this.cartService._increaseCartItem(this.cartItem());
      }
      if(decrease){
        this.cartService.decreaseCartItem(this.cartItem());
      }



    }
}
