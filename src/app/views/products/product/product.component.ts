import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/shared/services/product.service';
import { ProductType } from 'src/types/product.type';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

  private productSubscription: Subscription | null = null;

  protected product: ProductType = {} as ProductType;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(( params ) => {
      if (params['id']) {
        this.productSubscription = this.productService.getProduct(+params['id'])
        .subscribe({
          next: ( data: ProductType ) => { this.product = data },
          error: ( error ) => { this.router.navigate(['/']) }
        });
      }
    })
  }

  ngOnDestroy(): void {
    this.productSubscription?.unsubscribe();
  }

}
