import { Component,OnInit ,NgModule, Input ,Output, EventEmitter } from '@angular/core';

@Component({
	 selector:'product'
	,templateUrl:'product.component.html'
	,styleUrls:['product.component.scss']
})
export class ProductComponent implements OnInit{
	title = "Producto";
	 public reference : String = "";
	 public name : String = "";
	 public description : String = "";
	ngOnInit(){}
	save(){

	};
	clean(){
	this.reference = "";
	this.name = "";
	this.description = "";
	};
}
