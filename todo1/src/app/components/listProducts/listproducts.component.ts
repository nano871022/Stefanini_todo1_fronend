import { Component , OnInit , NgModule  } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductsService } from '../services/products/products.service';

@Component({
	 selector:'list-products'
	,templateUrl:'listproducts.component.html'
	,styleUrls:['listproducts.component.scss']
})
export class ListProductsComponent implements OnInit{
	public products : Product[] ; 

	constructor(protected productSvc:ProductsService){}

	ngOnInit(){
		this.productSvc.getProducts().subscribe(
		response=>{
			console.log("obteniendo");
			this.products = response;
			console.log("almacenados "+response);
			console.log("get "+response[0].references);
		}
		,error=>{console.log(error.error);});
		console.log(this.products);
	}
}