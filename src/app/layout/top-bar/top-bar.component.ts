import {Component, inject, signal} from '@angular/core';
import {Cart} from "../../../data/Cart";
import {CartService} from "../../service/cart.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
   cartService = inject(CartService);

   cart = this.cartService.cart;

}
