import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {

  protected formValues = {
    productTitle: '',
    address: '',
    phone: ''
  };

  private subscription: Subscription | null = null;
  private subscriptionOrder: Subscription | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    // if (this.cartService.product) this.formValues.productTitle = this.cartService.product;
    this.subscription = this.activatedRoute.queryParams.subscribe((params) => {
      if (params['product']) {
        this.formValues.productTitle = params['product'];
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.subscriptionOrder?.unsubscribe();
  }

  protected createOrder(): void {
    if (!this.formValues.productTitle) {
      alert('Укажите пиццу');
      return;
    }
    if (!this.formValues.address) {
      alert('Укажите адрес');
      return;
    }
    if (!this.formValues.phone) {
      alert('Укажите номер телефона');
      return;
    }

    this.subscriptionOrder = this.productService.createOrder({
      product: this.formValues.productTitle,
      address: this.formValues.address,
      phone: this.formValues.phone
    }).subscribe(response => {
      if (response.success && !response.message) {
        alert('Спасибо за заказ!');
        this.formValues = {
          productTitle: '',
          address: '',
          phone: ''
        };
      } else {
        alert('ERROR!!!')
      }
    })
  
  };

}
