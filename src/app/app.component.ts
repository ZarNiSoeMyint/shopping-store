import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './service/product.service';
import { single } from 'rxjs';
import { Product } from '../data/Product';
import { CommonModule } from '@angular/common';
import {TopBarComponent} from "./layout/top-bar/top-bar.component";
import {FooterComponent} from "./layout/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TopBarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shopping-store';


}
