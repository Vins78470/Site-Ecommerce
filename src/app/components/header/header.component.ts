import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';

@Component({

  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy{
 
  data: Number = 0;
  num : Subscription | undefined;
  constructor(private productService: ProductService)
  {

  }

  ngOnInit(): void{
    
  }

  ngOnDestroy(): void {
    this.num?.unsubscribe();
  }
}
