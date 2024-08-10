import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of, Subscription, tap } from 'rxjs';
import { ProductService } from 'src/app/shared/services/product.service';
import { ProductType } from 'src/types/product.type';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})

export class ProductsComponent implements OnInit, OnDestroy {

  private productsSubscription: Subscription | null = null;

  public products: ProductType[] = [];
  public loading: boolean = false;

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.productsSubscription = this.productService.getProducts()
    .pipe(
      tap(() => { this.loading = false }),
      catchError(error => {
        console.log(error);
        return of([]);
      })
    )
    .subscribe({
        next: (data: ProductType[]) => { this.products = data; },
        error: (error) => {
          console.log(error);
          this.router.navigate(['/']);
        }
    })
  }

  ngOnDestroy(): void {
    this.productsSubscription?.unsubscribe();
  }

}
