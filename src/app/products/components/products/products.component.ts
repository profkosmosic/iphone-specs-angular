import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../interfaces/i-product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList:IProduct[] = [];
  selectedProduct?:IProduct;

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll():void {
    this.productsService.getAll()
      .subscribe(products => this.productList = products);
  }

  selectProduct(product:IProduct) {
    this.selectedProduct = product;
  }

}
