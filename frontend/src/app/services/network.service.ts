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
    return this.httpClient.get<ProductResponse[]>(`product`)
  }

  getProduct(id: number): Observable<ProductResponse> {
    return this.httpClient.get<ProductResponse>(`product/${id}`)
  }

  addProduct(product: Product): Observable<ProductResponse> {
    return this.httpClient.post<ProductResponse>(`product/add`, this.makeFormData(product))
  }

  updateProduct(id: number,product: Product): Observable<ProductResponse> {
    return this.httpClient.post<ProductResponse>(`product/update/${id}`, this.makeFormData(product))
  }

  deleteProduct(id: number): Observable<any> {
    return this.httpClient.delete<any>(`product/delete/${id}`)
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
