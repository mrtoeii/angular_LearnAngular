import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { ProductResponse, Product } from '../models/product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<ProductResponse[]> {
    return this.httpClient.get<ProductResponse[]>(`${environment.baseURL}product`)
  }

  addProduct(product: Product): Observable<ProductResponse> {
    return this.httpClient.post<ProductResponse>(`${environment.baseURL}product/add`, this.makeFormData(product))
  }

  deleteProduct(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${environment.baseURL}product/delete/${id}`)
  }

  makeFormData(product: Product): FormData {
    const formData = new FormData()
    formData.append('name', product.name)
    formData.append('price', product.price)
    formData.append('stock', product.stock)
    formData.append('photo', product.image)
    return formData
  }
}
