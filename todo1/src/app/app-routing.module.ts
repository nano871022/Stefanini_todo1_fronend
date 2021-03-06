import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialComponent } from './components/initial/initial.component';
import { ProductComponent } from './components/product/product.component';
import { ListProductsComponent } from './components/listProducts/listproducts.component';


const routes: Routes = [
	 {path:'',component:InitialComponent}
	,{path: '', redirectTo:'Initial',pathMatch:'full'}
	,{path: 'Product',component:ProductComponent}
	,{path: 'Initial', component:InitialComponent}
	,{path: 'ListProducts', component:ListProductsComponent}
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
