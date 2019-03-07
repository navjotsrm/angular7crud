import { UpdateComponentComponent } from './update-component/update-component.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'product',component:ProductComponent},
  {path:'updateProduct/:id',component:UpdateComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
