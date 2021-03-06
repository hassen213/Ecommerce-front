import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../catalogue.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: any;
  private err: any;

  constructor(public catService: CatalogueService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(){
      this.catService.getResource("/products")
        .subscribe(data=>{
          this.products=data;
        }, error => {
          console.log(this.err);
        })
  }
}
