import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products: IProduct[] = [];
  productList: IProduct[] = [];
  totalLength:any;
  p: number = 1;
  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(
      (data: any) => {
        this.products = data.docs;
        this.productList =data.docs;
        this.totalLength = data.docs.length;
      },
      (error) => console.log(error)
    );
  }
  confirmAndRemoveItem(productId: any) {
    if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
      this.removeItem(productId);
    }
  }
  removeItem(id: any) {
    this.productService.deleteProduct(id).subscribe(() => {
      alert('Bạn đã xóa thành công');
      this.products = this.products.filter((item) => item._id != id);
    });
  }

  onSearchChange(event: Event) {
    const searchValue = (event.target as HTMLInputElement).value;
    if(searchValue){
      this.products = this.products.filter((product) => {
        return product.name.toLowerCase().includes(searchValue.toLowerCase());
      });
    }else{
      this.products = this.productList
    }
  }
}