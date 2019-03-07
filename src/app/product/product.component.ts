import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
 imagePath:any;
  productData:any=[];
  files:any;
  filestring:any;
  private imageSrc: string = '<input type="text" name="name">';
  constructor(private service:ServiceService,private router:Router) { }
  addNewProduct(){
   this.service.newProducts(this.productData,this.imagePath).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/'])
   });
  
  }

  getFiles(e) {
//     this.files = event.target.files;
//     var reader = new FileReader();
//     reader.onload = this._handleReaderLoaded.bind(this);
//     reader.readAsBinaryString(this.files[0]);
// }
// _handleReaderLoaded(readerEvt) {
//     var binaryString = readerEvt.target.result;
//     this.filestring = btoa(binaryString);  // Converting binary string data.
//     console.log(this.filestring);

var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
var pattern = /image-*/;
var reader = new FileReader();
if (!file.type.match(pattern)) {
  alert('invalid format');
  return;
}
reader.onload = this._handleReaderLoaded.bind(this);
reader.readAsDataURL(file);
}
_handleReaderLoaded(e) {
let reader = e.target;
this.imageSrc =(reader.result);
this.imagePath=this.imageSrc;
//this.imagePath = this.domSanitizer.bypassSecurityTrustResourceUrl(this.imageSrc)

// console.log(this.imagePath);

}

  ngOnInit() {
  }

}
