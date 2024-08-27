import { Component, OnInit, inject, signal } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { Product } from '../../../../data/Product';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from "./product-card/product-card.component";
import {CartItem} from "../../../../data/CartItem";
import {CartService} from "../../../service/cart.service";

@Component({
    selector: 'app-product',
    standalone: true,
    templateUrl: './product.component.html',
    styleUrl: './product.component.scss',
    imports: [CommonModule, ProductCardComponent]
})
export class ProductComponent implements OnInit{

  productService= inject(ProductService);
  cartService = inject(CartService);

  products = signal<Product[]>([]);

  public addToCart(item:CartItem){
     this.cartService.addItem(item);
  }


  ngOnInit(): void {
     this.productService.loadAllProducts().then(resp => {
       this.products.set(resp)
     })
     .catch(err => console.log(err))
  }

}
