import { Component,OnInit ,NgModule, Input ,Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductsService } from '../services/products/products.service';

@Component({
	 selector:'product'
	,templateUrl:'product.component.html'
	,styleUrls:['product.component.scss']
})
export class ProductComponent implements OnInit{
	 public product : Product = new Product(); 
	 public tittle : String  = "Nuevo Producto";

	 constructor(protected productSvc:ProductsService){}

	ngOnInit(){}
	save(){
	console.log("Iniciando el llamado al servicio");
		this.productSvc.addProduct(this.product).subscribe((product:Product)=>{this.product=product;console.log("Servicio respondido");},error=>this.product.status=<String>error.error);

	};
	clean(){
	this.product.references = "";
	this.product.name = "";
	this.product.description = "";
	};
}
