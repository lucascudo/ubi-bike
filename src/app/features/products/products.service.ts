import {Injectable} from '@angular/core';
import { Firestore, collectionData, collection, doc, setDoc, getDocs, deleteDoc, query } from '@angular/fire/firestore';
import { Product } from 'src/app/core/interfaces/product.interface';

@Injectable()
export class ProductsService {
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
