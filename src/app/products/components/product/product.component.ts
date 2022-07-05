import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../interfaces/i-product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product:IProduct | undefined;

  constructor(private route:ActivatedRoute, private productService:ProductsService) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct():void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.get(id)
      .subscribe(product => this.product = product);
  }

}
