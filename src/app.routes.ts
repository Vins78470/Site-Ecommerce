import { Routes } from '@angular/router';
import { ContainerComponent } from './app/components/container/container.component';
import { SignInComponent } from './app/components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './app/components/auth/sign-up/sign-up.component';
import { ProductItemComponent } from './app/components/product-item/product-item.component';
import { ModalProductViewComponent } from './app/components/modal-product-view/modal-product-view.component';
import { ProductComponent } from './app/components/product/product.component';
import { ProductViewDetailsComponent } from './app/components/product-view-details/product-view-details.component';

export const ROUTES: Routes = [{

    path:'',
    component: ContainerComponent,
    pathMatch:'full'
},
{
    path:'signin',
    component:SignInComponent,
    pathMatch:'full'
},

{
    path: 'products/:id',  // chemin pour afficher la liste des produits
    component: ProductComponent,
    pathMatch: 'full'
},
{
    path: 'product-details/:id',  // chemin pour afficher les détails d'un produit spécifique
    component: ProductViewDetailsComponent,
    pathMatch: 'full'
},



{
    path:'signup',
    component:SignUpComponent,
    pathMatch:'full'
}


];
