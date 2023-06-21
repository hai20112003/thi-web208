import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  counter: number = 1;
  slide = setInterval(() => {
    const element = document.getElementById(
      'radio' + this.counter
    ) as HTMLInputElement;
    element.checked = true;
    this.counter++;
    if (this.counter > 3) {
      this.counter = 1;
    }
  }, 5000);

  product: number = 1;
  expression: any;
  public right() {
    this.product++;
    if (this.product > 3) {
      this.product = 1;
    }
    const element = document.getElementById(
      'product' + this.product
    ) as HTMLInputElement;
    element.checked = true;
  }

  public left() {
    this.product--;
    if (this.product < 1) {
      this.product = 3;
    }
    const element = document.getElementById(
      'product' + this.product
    ) as HTMLInputElement;
    element.checked = true;
  }

  productsNew: IProduct[] = [];
  first8Products: IProduct[] = [];
  first12Products: IProduct[] = [];

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(
      (data: any) => {
        this.productsNew = data.docs;
        this.productsNew.sort((a: any, b: any): any => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return dateB.getTime() - dateA.getTime();
        });
        this.first8Products = this.productsNew.slice(0, 8);
        this.first12Products = this.productsNew.slice(0, 12);
      },
      (error) => console.log(error)
    );
  }
}
