import { ICategory } from 'src/app/interfaces/Category';
import { IProduct } from 'src/app/interfaces/Product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent {
  [x: string]: any;
  data: ICategory[] = [];
  valueInput: string = '';
  setValue(e: any) {
    this.valueInput = e.target.value;
  }
  formProduct = this.fb.group({
    _id: ['', [Validators.required]],
    name: ['', [Validators.required]],
    image: [""],
    priceNew: [[Validators.required]],
    priceOld: [],
    quantity: [[Validators.required]],
    description: [''],
    categoryId: ['', [Validators.required]],
  });
  constructor(
    private fb: FormBuilder,
    private ProductService: ProductService,
    private router: Router,
    private CategoryService: CategoryService,
    private route: ActivatedRoute
  ) {
    this.CategoryService.getCategory().subscribe(
      (data: any) => {
        this.data = data.data;
      },
      (error) => console.log(error)
    );
    this.route.paramMap.subscribe((param) => {
      const id = String(param.get('id'));
      this.ProductService.getProductsById(id).subscribe(
        (product: any) => {
          this.formProduct.patchValue({
            _id: product.data._id,
          });
          this.formProduct.patchValue({
            name: product.data.name,
          });
          this.formProduct.patchValue({
            priceNew: product.data.priceNew,
          });
          this.formProduct.patchValue({
            priceOld: product.data.priceOld,
          });
          this.formProduct.patchValue({
            quantity: product.data.quantity,
          });
          this.formProduct.patchValue({
            description: product.data.description,
          });
          this.formProduct.patchValue({
            categoryId: product.data.categoryId._id,
          });
          this.formProduct.patchValue({
            image: product.data.image,
          });
        },
        (error) => console.log(error.message)
      );
    });
  }

  onHandleSubmit() {
    if (this.formProduct.valid) {
      const product: IProduct = {
        _id: this.formProduct.get('_id')?.value || '',
        name: this.formProduct.get('name')?.value || '',
        image: this.formProduct.get('image')?.value || '',
        priceNew: this.formProduct.get('priceNew')?.value || 0,
        priceOld: this.formProduct.get('priceOld')?.value || 0,
        quantity: this.formProduct.get('quantity')?.value || 0,
        description: this.formProduct.get('description')?.value || undefined,
        categoryId: this.formProduct.get('categoryId')?.value || '',
      };
      this.ProductService.updateProducts(product).subscribe((data) => {
        alert('Sửa sản phẩm thành công');
        this.router.navigate(['/admin/products']);
      });
    }
  }
}
