import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialComponent } from './components/initial/initial.component';
import { ProductComponent } from './components/product/product.component';
import { ListProductsComponent } from './components/listProducts/listproducts.component';
import { ProductsService } from './components/services/products/products.service';

@NgModule({
  declarations: [
     AppComponent
    ,InitialComponent
    ,ProductComponent
    ,ListProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ,FormsModule
    ,HttpClientModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
