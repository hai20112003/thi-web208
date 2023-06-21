import { Component } from '@angular/core';
import { ICategory } from 'src/app/interfaces/Category';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent {
  categories: ICategory[] = [];
  categoriesList: ICategory[] = [];
  totalLength:any;
  p: number = 1;
  constructor(private CategoryService: CategoryService) {
    this.CategoryService.getCategory().subscribe(
      (data: any) => {
        this.categories = data.data;
        this.categoriesList = data.data;
        this.totalLength = data.data.length;
      },
      (error) => console.log(error)
    );
  }
  confirmAndRemoveItem(categoryId: any) {
    if (confirm('Bạn có chắc chắn muốn xóa danh mục này?')) {
      this.removeItem(categoryId);
    }
  }
  removeItem(id: any) {
    this.CategoryService.deleteCategory(id).subscribe(() => {
      alert('Bạn đã xóa thành công');
      this.categories = this.categories.filter((item) => item._id != id);
    });
  }
  onSearchChange(event: Event) {
    const searchValue = (event.target as HTMLInputElement).value;
    if(searchValue){
      this.categories = this.categories.filter((categories) => {
        return categories.name.toLowerCase().includes(searchValue.toLowerCase());
      });
    } else{
      this.categories = this.categoriesList
    }
  }
}
