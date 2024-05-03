import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagination } from '../shared/models/pagination';
import { Product } from '../shared/models/product';
import { Brands } from '../shared/models/brands';
import { Types } from '../shared/models/types';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/';
  constructor(private http: HttpClient) { }

  getProducts(brandId? : number ,typeId?: number){
    let params = new HttpParams();

    if(brandId) params = params.append('brandId',brandId);
    if(typeId) params = params.append('typeId',typeId);
    return this.http.get<Pagination<Product[]>>(this.baseUrl + 'products' , {params});
  }
  getBrands(){
    return this.http.get<Brands[]>(this.baseUrl + 'products/brands');
  }
  getTypes(){
    return this.http.get<Types[]>(this.baseUrl + 'products/types');
  }
}


