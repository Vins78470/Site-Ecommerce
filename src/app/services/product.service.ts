import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = []
  public urlApi : string = "assets/serveur.json";
  
  constructor(private http: HttpClient) { }

  /*getProducts(): Promise<Product[]> {
    return new Promise((resolve, reject) => {
      if (this.products.length > 0) {
        resolve(this.products); // Résout la promesse avec la liste de produits
      } else {
        reject('No products available'); // Rejette la promesse si la liste est vide
      }
    });
  }*/


    getProducts(): Observable<Product[]>{
      return this.http.get<Product[]>(this.urlApi)

    }

  
}
