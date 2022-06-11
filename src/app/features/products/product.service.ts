import {Injectable} from '@angular/core';
import { Firestore, collectionData, collection, doc, setDoc, deleteDoc } from '@angular/fire/firestore';
import { firstValueFrom, Observable } from 'rxjs';
import { Product } from 'src/app/core/interfaces/product.interface';

@Injectable()
export class ProductService {
    private collectionName: string = 'products';

    constructor(private store: Firestore) {}

    getProducts() {
      return collectionData(collection(this.store, this.collectionName));
    }

    save(product: Product) {
      return setDoc(doc(this.store, this.collectionName, product.name), product);
    }

    delete(productName: string) {
      return deleteDoc(doc(this.store, this.collectionName, productName));
    }
}
