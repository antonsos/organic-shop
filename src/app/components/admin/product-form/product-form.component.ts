import {Component} from '@angular/core';
import {CategoriesService} from '../../../categories.service';
import {ProductService} from '../../../product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  categories$;
  editProd = {};
  id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoriesService: CategoriesService,
    private productService: ProductService,
  ) {
    this.categories$ = categoriesService.getCategories();

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) { this.productService.getProduct(this.id).subscribe(res => this.editProd = res); }
  }

  saveProduct(form) {
    if (form.valid) {
      if (this.id) {
        this.productService.updateProduct(this.id, form.value);
      } else {
        this.productService.createProduct(form.value);
      }

      this.router.navigate(['/admin/products']);
    }
  }

  deleteProd() {
    this.productService.deleteProduct(this.id);
    this.router.navigate(['/admin/products']);
  }

}
