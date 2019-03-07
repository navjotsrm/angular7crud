import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  id:number;

  product:any;
  productObj: object = {};

  constructor(private http: HttpClient) { }
  fetchData() {
    return this.http.get('http://localhost:5556/products').pipe(map(res => res));
  }

  newProducts(product, src) {

    this.productObj = {
      name: product.name,
      color: product.color,
      image: src
    }
    return this.http.post('http://localhost:5556/products', this.productObj);
  }

  delete(id){
    if(confirm("Are you sure?")){
      const url=`${"http://localhost:5556/products"}/${id}`;
      return this.http.delete(url)
    }
  }

  update(product,src,id){ 
    this.productObj={
      name:product.name,
      color:product.color,
      image:src
    };
    
    let headers= new HttpHeaders();
    headers.set('Content-type','application/json');
    const url=`${"http://localhost:5556/products/"}`;  
    return this.http.put(url + id,this.productObj)
  }
}
