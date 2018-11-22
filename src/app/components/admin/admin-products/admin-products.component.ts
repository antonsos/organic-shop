import { Component } from '@angular/core';
import {ProductService} from '../../../product.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent {
  productAll$;
  constructor(
    private productService: ProductService,
  ) {
    productService.getProducts().pipe(take(1)).subscribe(res => {
      this.productAll$ = res;
    });
  }

}
