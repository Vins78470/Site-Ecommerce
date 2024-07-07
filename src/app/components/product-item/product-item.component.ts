import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductComponent } from '../product/product.component';
import { OutletContext } from '@angular/router';
import { ModalProductViewComponent } from '../modal-product-view/modal-product-view.component';

@Component({
  selector: 'app-product-item',

  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit{

  @Input() product: Product | undefined;
  @Output() deleteProductItem: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() displayProductViewModal: EventEmitter<Product> = new EventEmitter<Product>();
 
  constructor(){}
  ngOnInit(): void {
   
}

  handleClickProduct(product:Product| undefined){
      this.displayProductViewModal.emit(product);
  } 




}
