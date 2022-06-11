import {Injectable} from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { firstValueFrom, Observable } from 'rxjs';
import { Product } from 'src/app/core/interfaces/product.interface';

@Injectable()
export class ProductService {

    constructor(private store: Firestore) {}

    getProducts() {
      return collectionData(collection(this.store, 'products'));
    }
}
