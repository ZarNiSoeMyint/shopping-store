import { Injectable } from '@angular/core';
import { Product } from '../../data/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  PRODUCT_BACKEND_URI = 'http://localhost:8080/store'

  constructor() { }

  async loadAllProducts():Promise<Product[]>{
    const response=await fetch(`${this.PRODUCT_BACKEND_URI}/products`);
    return  await response.json();
  }

}
