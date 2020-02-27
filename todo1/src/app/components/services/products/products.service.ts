import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Product } from '../../../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
public url : String = "http://localhost:8080/products/";

  constructor(protected http: HttpClient) { }

  getProducts():Observable<Product[]>{
  	return this.http.get<Product[]>(this.url+'products');
  }

  addProduct(product : Product):Observable<Product>{
  	 let json = JSON.stringify(product);
  	 let headers = new HttpHeaders().set('Content-Type','application/json');
  	 console.log(json);
  	 return this.http.post<Product>(this.url+'create',json,{headers:headers});
  }

}
