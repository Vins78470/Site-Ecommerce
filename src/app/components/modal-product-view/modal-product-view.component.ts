import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-modal-product-view',

  templateUrl: './modal-product-view.component.html',
  styleUrl: './modal-product-view.component.css'
})
export class ModalProductViewComponent {
  @Input() product: Product | null = null;
  @Output() buttonToClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  canClose: boolean = false;

  unDisplayModalView(){
    this.buttonToClose.emit(this.canClose);
  }

}
