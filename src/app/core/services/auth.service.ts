import {
  Auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  UserCredential
} from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { LoginData } from '../interfaces/login-data.interface';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { firstValueFrom } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth, private store: Firestore) {}

  async isAllowed(credential: UserCredential) {
    const users$ = collectionData(collection(this.store, 'users'));
    const users = await firstValueFrom(users$);
    return users.some(user => user['email'] === credential.user.email);
  }

  login({ email, password }: LoginData) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  register({ email, password }: LoginData) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }
}
