
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/interfaces/product.interface';
import { ProductService } from './product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(private productsService: ProductService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products) => this.products = <Product[]> products);
  }

  getStores(product: Product): string {
    return product.stores.join(', ');
  }
}
