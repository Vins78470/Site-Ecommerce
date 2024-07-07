import { Component } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Product } from '../../../models/product';
import { CommonModule } from '@angular/common';
import { ModalProductViewComponent } from '../modal-product-view/modal-product-view.component';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';

// Helper function to generate unique IDs
const generateUniqueId = () => Date.now().toString() + Math.random().toString(36).substr(2, 9);

@Component({
  selector: 'app-product',
  
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: Product[] = [];
  isDisplayModal: boolean = false;
  selectedProduct: Product | null = null;

  productSub: Subscription | undefined;

  constructor(private productService: ProductService) {
    // Exemples de création d'objets Product avec identifiants uniques
   
  }

  ngOnInit(): void {
    this.productSub = this.productService.getProducts()
      .subscribe({
        next: (products: Product[]) => {
          this.products = products;
        },
        error: (error: any) => {
          console.error('Failed to load products:', error);
          
        },
        complete: () => {
          console.log('Product subscription completed');
        }
      });
  }

  ngOnDestroy(): void {
    if (this.productSub) {
      this.productSub.unsubscribe();
    }
  }
  
  

  handleDeleteProduct(product: Product) {
    this.products = this.products.filter(p => p._id !== product._id);
   
    console.log("pas ")
    console.log("handleDeleteProduct : ", product);
    
  }

  handleDisplayProductViewModal(product: Product){
    console.log("LE PRODDD")
    console.log(product.name);
    this.selectedProduct = product;
    if(product){
        this.isDisplayModal= true;
    }
  }

  handleCloseModal(){
    this.isDisplayModal= false;
  }

  // Autres méthodes ou logique de composant peuvent être ajoutées ici
}
