import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-model-products-outstanding',
  templateUrl: './model-products-outstanding.component.html',
  styleUrls: ['./model-products-outstanding.component.scss'],
})
export class ModelProductsOutstandingComponent {
  productsNew: IProduct[] = [];
  first4Products: IProduct[] = [];
  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(
      (data: any) => {
        this.productsNew = data.docs;
        this.productsNew.sort((a: any, b: any): any => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return dateB.getTime() - dateA.getTime();
        });
        this.first4Products = this.productsNew.slice(0, 4);
      },
      (error) => console.log(error)
    );
  }
}
