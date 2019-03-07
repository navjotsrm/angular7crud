import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: any = [];

  constructor(private service: ServiceService) { }

  getData() {
    this.service.fetchData().subscribe((res) => {

      this.products = res;
      console.log(res);
    })
  }
  deleteProduct(id){
    this.service.delete(id).toPromise().then(()=>{
      this.getData();
  })
}

  ngOnInit() {
    this.getData();


  }

}
