import {Component, inject, input, output} from '@angular/core';
import { Product } from '../../../../../data/Product';
import { CommonModule } from '@angular/common';
import {CartService} from "../../../../service/cart.service";
import {CartItem} from "../../../../../data/CartItem";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule,CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {



  product = input.required<Product>();
  productOut = output<CartItem>();

  addToCart(product:Product){
    const cartItem:CartItem ={
      id : product.id,
      name: product.name,
      price: product.price,
      quantity : 1,
      imageUrl: product.thumbUrl
    }
    this.productOut.emit(cartItem)
  }

}
