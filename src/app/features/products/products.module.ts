import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { DataViewModule } from 'primeng/dataview';
import { ProductsComponent } from './products.component';
import { ProductService } from './product.service';
import { BaseModule } from 'src/app/core/components/base/base.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    BaseModule,
    DataViewModule,
    MatIconModule,
  ],
  providers: [
    ProductService,
  ]
})
export class ProductsModule { }
