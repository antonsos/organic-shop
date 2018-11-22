import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  createProduct(product) {
    return this.db.list('/products').push(product);
  }

  getProducts() {
    return this.db.list('/products').snapshotChanges();
  }

  getProduct(prodId) {
    return this.db.object(`/products/${prodId}`).valueChanges();
  }

  updateProduct(prodId, product) {
    return this.db.object(`/products/${prodId}`).update(product);
  }

  deleteProduct(prodId) {
    return this.db.object(`/products/${prodId}`).remove();
  }
}
