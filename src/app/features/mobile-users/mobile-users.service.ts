import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';

@Injectable()
export class MobileUsersService {
    private collectionName: string = 'mobileUsers';

    constructor(private store: Firestore) {}

    getMobileUsers() {
      return collectionData(collection(this.store, this.collectionName));
    }
}
