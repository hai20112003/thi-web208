import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  valueInput: number = 1;
  product: any = {};
  productsNew: IProduct[] = [];
  first10Products: IProduct[] = [];

  constructor(
    private router: Router,
    private ProductService: ProductService,
    private route: ActivatedRoute
  ) {
    this.ProductService.getProducts().subscribe(
      (data: any) => {
        this.productsNew = data.docs;
        this.productsNew.sort((a:any, b:any):any => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return dateB.getTime() - dateA.getTime();
        });
        this.first10Products = this.productsNew.slice(0, 8);
      },
      (error) => console.log(error)
    );
    this.route.paramMap.subscribe((param) => {
      const id = String(param.get('id'));
      this.ProductService.getProductsById(id).subscribe(
        (product: any) => {
          this.product = product.data;
        },
        (error) => console.log(error.message)
      );
    });

  }

  setValue(e: any) {
    this.valueInput = parseInt(e.target.value);
    if (e.target.value < 1) {
      this.valueInput = 1;
    }
  }

  plus(event: Event) {
    event.preventDefault();
    if (this.valueInput < this.product.quantity) {
      this.valueInput += 1;
    }
  }

  minus(event: Event) {
    event.preventDefault();
    if (this.valueInput > 1) {
      this.valueInput -= 1;
    }
  }
}
