import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../../models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-view-details',
  templateUrl: './product-view-details.component.html',
  styleUrls: ['./product-view-details.component.css']
})
export class ProductViewDetailsComponent implements OnInit {
  product: Product | undefined;
  id: string | null = null;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Récupération de l'ID du produit à partir des paramètres de la route
    this.id = this.route.snapshot.params['id'];
   

    if (this.id) {
      // Appel du service pour récupérer les produits
      this.productService.getProducts().subscribe({
        next: (products: Product[]) => {
          console.log('Fetched products:', products);

  
          // Convertir les IDs en string pour la comparaison
          this.product = products.find(p => p._id.toString() === this.id);

          // Vérifier et afficher le produit trouvé
          if (this.product) {
            console.log('Product found:', this.product);
          } else {
            console.error(`Product with ID ${this.id} not found.`);
          }
        },
        error: (error) => {
          console.error('Error fetching products:', error);
        },
        complete: () => {
          console.log('Product fetching completed.');
        }
      });
    } else {
      console.error('Product ID is null or undefined.');
    }
  }
}
