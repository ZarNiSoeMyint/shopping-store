import { Component } from '@angular/core';
import { ProductComponent } from "./product/product.component";
import { DealsComponent } from "./deals/deals.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [ProductComponent, DealsComponent]
})
export class HomeComponent {

}
