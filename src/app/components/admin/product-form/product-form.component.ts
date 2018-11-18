import {Component} from '@angular/core';
import {CategoriesService} from '../../../categories.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  categories$;

  constructor(
    private categoriesService: CategoriesService
  ) {
    this.categories$ = categoriesService.getCategories();
  }

}
