import {Component, OnInit} from '@angular/core';
import {CatalogueService} from "./catalogue.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public categories: any;
  public err: any;
  constructor(private catServices: CatalogueService) {
  }

  ngOnInit(): void {
    this.getCategories();
  }
  private getCategories() {
      this.catServices.getResource("/categories")
        .subscribe(data=>{
          this.categories=data;
        },error => {
          console.log(this.err);
        })
  }
}
