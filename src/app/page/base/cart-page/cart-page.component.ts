import { Component } from '@angular/core';

interface ICard {
  products: IProduct[];
  total: number;
}
interface IProduct {
  id: number;
  name: string;
  price: number;
  priceNew: number;
  image: string;
  quantity: number;
  quantityProducts: number;
}
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent {
  openCart: boolean = true;

  card: ICard = {
    products: [
      {
        id: 1,
        name: 'product A',
        price: 1000,
        priceNew: 1000,
        image:
          'https://bizweb.dktcdn.net/thumb/compact/100/091/132/products/5-min-a5bb63b5-5f5e-4109-ae48-b6f4e3c5a3aa.jpg',
        quantity: 1,
        quantityProducts: 11,
      },
      {
        id: 2,
        name: 'product B',
        price: 11,
        priceNew: 11,
        image:
          'https://bizweb.dktcdn.net/thumb/compact/100/091/132/products/5-min-a5bb63b5-5f5e-4109-ae48-b6f4e3c5a3aa.jpg',
        quantity: 1,
        quantityProducts: 100,
      },
    ],
    total: 1011,
  };

  calculateTotal() {
    this.card.total = this.card.products.reduce(
      (total, product) => total + product.priceNew,
      0
    );
  }

  minus(id: number) {
    const product = this.card.products.find((item) => item.id === id);
    if (product && product.quantity && product.quantity > 1) {
      product.quantity -= 1;
      product.priceNew = product.quantity * product.price;
      this.calculateTotal();
    }
  }

  plus(id: number) {
    const product = this.card.products.find((item) => item.id === id);
    if (
      product &&
      product.quantity &&
      product.quantity < product.quantityProducts
    ) {
      product.quantity += 1;
      product.priceNew = product.quantity * product.price;
      this.calculateTotal();
    }
  }
}
