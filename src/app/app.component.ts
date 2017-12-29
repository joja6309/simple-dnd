import { Component,EventEmitter } from '@angular/core';
import { Product } from './product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // listBoxers: Array<string> = ['Sugar Ray Robinson', 'Muhammad Ali', 'George Foreman', 'Joe Frazier', 'Jake LaMotta', 'Joe Louis', 'Jack Dempsey', 'Rocky Marciano', 'Mike Tyson', 'Oscar De La Hoya'];
  listTeamOne: Array<string> = [];
  listTeamTwo: Array<string> = [];
  simpleDrop: any = null;
  products: Array<Product> = [];
  title = 'app';
  constructor() {

  }
  ngOnInit() {
    this.products = [
    new Product(
      'MYSHOES',
      'Black Running Shoes',
      '/assets/images/products/black-shoes.jpg',
      ['Men', 'Shoes', 'Running Shoes'],
      109.99),
    new Product(
      'NEATOJACKET',
      'Blue Jacket',
      '/assets/images/products/blue-jacket.jpg',
      ['Women', 'Apparel', 'Jackets & Vests'],
      238.99),
    new Product(
      'NICEHAT',
      'A Nice Black Hat',
      '/assets/images/products/black-hat.jpg',
      ['Men', 'Accessories', 'Hats'],
      29.99), new Product(
          'MYSHOES',
          'Black Running Shoes',
          '/assets/images/products/black-shoes.jpg',
          ['Men', 'Shoes', 'Running Shoes'],
          109.99),  new Product(
              'MYSHOES',
              'Black Running Shoes',
              '/assets/images/products/black-shoes.jpg',
              ['Men', 'Shoes', 'Running Shoes'],
              109.99),  new Product(
                  'MYSHOES',
                  'Black Running Shoes',
                  '/assets/images/products/black-shoes.jpg',
                  ['Men', 'Shoes', 'Running Shoes'],
                  109.99),  new Product(
                      'MYSHOES',
                      'Black Running Shoes',
                      '/assets/images/products/black-shoes.jpg',
                      ['Men', 'Shoes', 'Running Shoes'],
                      109.99)
    ];
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
}
