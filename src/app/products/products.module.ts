import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { GigabytePipe } from './pipes/gigabyte.pipe';
import { Inch2cmPipe } from './pipes/inch2cm.pipe';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    GigabytePipe,
    Inch2cmPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
