import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { DataViewModule } from 'primeng/dataview';
import { ProductsComponent } from './products.component';
import { ProductService } from './product.service';
import { BaseModule } from 'src/app/core/components/base/base.module';
import { MatIconModule } from '@angular/material/icon';
import { CreateProductComponent } from './components/create-product.component';
import { MatButtonModule } from '@angular/material/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductsComponent,
    CreateProductComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    BaseModule,
    FormsModule,
    DataViewModule,
    MatIconModule,
    MatButtonModule,
    InputTextModule,
  ],
  providers: [
    ProductService,
  ]
})
export class ProductsModule { }
