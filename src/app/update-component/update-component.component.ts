
import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.scss']
})
export class UpdateComponentComponent implements OnInit {

  productData:any=[];
  id:number;
  product:any;
  exist=false;
  imageSrc:any;
  imagePath:any;

  constructor(private service:ServiceService,private router:Router,private route:ActivatedRoute) { }

  updateProduct(){
    console.log(this.productData);
    
    this.service.update(this.productData,this.imagePath,this.id).subscribe((res)=>{
      this.router.navigate(['/'])
      // console.log(res);
    })
  }

  ngOnInit() {

    this.route.params.subscribe(params=>{
      this.id=+params['id'];
      
    });
    this.service.fetchData().subscribe((res:any)=>{
      this.product= res;
      for(let i=0;i<this.product.length;i++){
        if(parseInt(this.product[i].id) === this.id) {
          this.exist = true;
          this.productData = this.product[i];
          break;
        } else {
          this.exist = false;
        }
      }
    })

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

}
