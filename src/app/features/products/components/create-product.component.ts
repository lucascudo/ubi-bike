
import { Component, Input } from '@angular/core';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent {
  @Input() name: string;
  @Input() quantity?: number;
  @Input() stores: string;
  @Input() editing: string;

  constructor(private productsService: ProductService) {}

  save() {
    this.productsService.save({
      name: this.name,
      quantity: this.quantity,
      stores: this.stores.split(',')
    }, this.editing).then(() => {
      this.name = '';
      this.stores = '';
      this.editing = '';
      this.quantity = undefined;
    }).catch(e => alert(e.message));
  }

}
