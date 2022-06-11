
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/interfaces/product.interface';
import { ProductsService } from './products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[];
  editingProduct: Product = {
    name: '',
    stores: [],
  };

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products) => this.products = <Product[]> products);
  }

  getStores(product: Product): string {
    return product.stores.join(', ');
  }

  deleteProduct(productName: string) {
    if (confirm(`Do you really want to delete ${productName}?`)) {
      this.productsService.delete(productName).catch(e => alert(e.message));
    }
  }
}
