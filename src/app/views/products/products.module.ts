import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProductsRoutingModule,
    SharedModule
  ],
  exports: [
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
