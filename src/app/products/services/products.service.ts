import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { api } from 'src/app/constants/api';
import { serverPath } from 'src/app/constants/server';
import { IProduct } from '../interfaces/i-product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getAll():Observable<IProduct[]> {
    return this.http.get<IProduct[]>(serverPath + api.devices);
  }

  get(id: number | string): Observable<IProduct> {
    return this.http.get<IProduct>(serverPath + api.devices + "/" + id);
  }
}
