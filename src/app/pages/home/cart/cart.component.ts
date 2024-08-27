import {Component, computed, inject} from '@angular/core';
import {CartService} from "../../../service/cart.service";
import {CartViewComponent} from "./cart-view/cart-view.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CartViewComponent,CommonModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cartService = inject(CartService);

  count = computed(() => this.cartService
    .cart().count);
  total = computed(() => this.cartService
    .cart().total);
  cartItems = computed(() => this.cartService
    .cart().items);

}
