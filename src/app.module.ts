import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './app/components/header/header.component';
import { ContainerComponent } from './app/components/container/container.component';
import { ModalProductViewComponent } from './app/components/modal-product-view/modal-product-view.component';
import { ProductItemComponent } from './app/components/product-item/product-item.component';
import { ProductComponent } from './app/components/product/product.component';
import { FooterComponent } from './app/components/footer/footer.component';
import { SignInComponent } from './app/components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './app/components/auth/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { ProductViewDetailsComponent } from './app/components/product-view-details/product-view-details.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    ModalProductViewComponent,
    ProductItemComponent,
    ProductComponent,
    SignInComponent,
    SignUpComponent,
    ProductViewDetailsComponent
   
    // Assurez-vous d'ajouter tous les autres composants ici
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
     FormsModule,
     ReactiveFormsModule,
     RouterModule.forRoot(ROUTES)

    // Ajoutez d'autres modules nécessaires ici
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    ModalProductViewComponent,
    ProductItemComponent,
    ProductComponent,
    SignInComponent,
    SignUpComponent,
    ProductViewDetailsComponent
    // Ajoutez tous les autres composants ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
