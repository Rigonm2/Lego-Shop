import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product';
import { ShopService } from './shop.service';
import { Brands } from '../shared/models/brands';
import { Types } from '../shared/models/types';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit{
  products : Product [] = [];
  brands : Brands [] = [];
  types : Types [] = [];

  brandIdSelected =0;
  typeIdSelected = 0;
  constructor(private shopService : ShopService){}

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();

  }

  getProducts(){
  
    this.shopService.getProducts(this.brandIdSelected, this.typeIdSelected).subscribe({
      next: response => this.products = response.data,
      error : error => console.log(error)
    })
  }
  getTypes(){
  
    this.shopService.getTypes().subscribe({
      next: response => this.types = [{id : 0,name : 'All'}, ...response],
      error : error => console.log(error)
    })
  }
  getBrands(){
  
    this.shopService.getBrands().subscribe({
      next: response => this.brands = [{id : 0,name : 'All'}, ...response],
      error : error => console.log(error)
    })
  }
  onBrandSelected(brandId: number){
    this.brandIdSelected = brandId;
    this.getProducts();
  }
  onTypeSelected(typeId: number){
    this.typeIdSelected = typeId;
    this.getProducts();
  }



}