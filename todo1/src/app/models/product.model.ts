import { Deserializable } from './deserializable.model';

export class Product implements Deserializable{
	public name : String ;
	public description : String ;
	public references : String ;
	public status : String;

	deserialize(input : any){
	  Object.assign(this,input);
	  return this
	}
	
}