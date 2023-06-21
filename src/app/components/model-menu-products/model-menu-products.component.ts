import { Component } from '@angular/core';
import { ICategory } from 'src/app/interfaces/Category';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-model-menu-products',
  templateUrl: './model-menu-products.component.html',
  styleUrls: ['./model-menu-products.component.scss'],
})
export class ModelMenuProductsComponent {
  categories: ICategory[] = [];
  constructor(private categoryService: CategoryService) {
    this.categoryService.getCategory().subscribe((data: any) => {
      this.categories = data.data;
    });
  }
}
