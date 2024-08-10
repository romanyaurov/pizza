import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { ProductType } from 'src/types/product.type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: ProductType[] = [];

  constructor(
    private http: HttpClient
  ) { }

  public getProducts(): Observable<ProductType[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.set('extraField', 1)
    return this.http.get<{data: ProductType[]}>('https://testologia.ru/pizzas', {
      observe: 'response',
      params: queryParams,
      headers: new HttpHeaders({ Authorization: 'auth-token' })
    })
    .pipe(
      tap(result => console.log('%cProductService:', 'color: orange', result)),
      map(result => result.body!.data)
    )
  }

  public getProduct(id: number): Observable<ProductType> {
    let queryParams = new HttpParams();
    queryParams = queryParams.set('id', id);
    return this.http.get<ProductType>('https://testologia.ru/pizzas', {
      params: queryParams
    })
  }

  public createOrder(data: { product: string, address: string, phone: string }) {
    const url: string = 'https://testologia.ru/order-pizza' 
    return this.http.post<{ success: boolean, message?: string }>( url, data );
  }

}
