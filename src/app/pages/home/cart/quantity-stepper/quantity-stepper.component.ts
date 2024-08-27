import {Component, input, OnInit, output, signal} from '@angular/core';

@Component({
  selector: 'app-quantity-stepper',
  standalone: true,
  imports: [],
  templateUrl: './quantity-stepper.component.html',
  styleUrl: './quantity-stepper.component.scss'
})
export class QuantityStepperComponent implements OnInit{
      quantityInput = input<number>(1)
      quantityChange = output<number>()
      quantity = signal(1)

      ngOnInit() {
        this.quantity.set(this.quantityInput())
      }

  onIncreaseQuantity(){
         this.quantity.set(this.quantity() + 1)
         console.log('Increment:',this.quantity());
         this.quantityChange.emit(this.quantity());
      }

      onDecreaseQuantity(){
        if(this.quantity() > 1){
          this.quantity.set(this.quantity() - 1);
          console.log('Decreasement:',this.quantity())
          this.quantityChange.emit(this.quantity())
        }
      }
}
