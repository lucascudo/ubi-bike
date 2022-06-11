
import { Component, Input } from '@angular/core';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent {
  @Input() name: string;
  @Input() quantity?: number;
  @Input() stores: string;
  @Input() editing: string;

  constructor(private productsService: ProductsService) {}

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
