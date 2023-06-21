import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from './../../../../services/category.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/interfaces/Category';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent {
  [x: string]: any;
  data: ICategory[] = [];
  valueInput: string = '';
  setValue(e: any) {
    this.valueInput = e.target.value;
    console.log(this.valueInput);
  }
  constructor(
    private fb: FormBuilder,
    private ProductService: ProductService,
    private router: Router,
    private CategoryService: CategoryService
  ) {
    this.CategoryService.getCategory().subscribe(
      (data: any) => {
        this.data = data.data;
      },
      (error) => console.log(error)
    );
  }

  formProduct = this.fb.group({
    name: ['', [Validators.required]],
    image: ['', [Validators.required]],
    priceNew: [ , [Validators.required]],
    priceOld: [],
    quantity: [, [Validators.required]],
    description: [''],
    categoryId: ['', [Validators.required]],
  });

  onHandleSubmit() {
    if (this.formProduct.valid) {
      const product: IProduct = {
        name: this.formProduct.get('name')?.value || '',
        image: this.formProduct.get('image')?.value || '',
        priceNew: this.formProduct.get('priceNew')?.value || 0,
        priceOld: this.formProduct.get('priceOld')?.value || undefined,
        quantity: this.formProduct.get('quantity')?.value || 0,
        description: this.formProduct.get('description')?.value || undefined,
        categoryId: this.formProduct.get('categoryId')?.value || '',
      };
      this.ProductService.addProduct(product).subscribe((data) => {
        alert('Thêm sản phẩm thành công');
        this.router.navigate(['/admin/products']);
      });
    }
    
  }
}
