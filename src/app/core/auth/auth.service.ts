import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {

  public isLogged$: Subject<boolean> = new Subject<boolean>();
  public isLogged: boolean = false;

  constructor() { }

  public logIn(): void {
    this.isLogged = true;
    this.isLogged$.next(this.isLogged);
  }

  public logOut(): void {
    this.isLogged = false;
    this.isLogged$.next(this.isLogged);
  }

  public getToken(): string {
    return 'OMFG-How-good-is-this-token';
  }

}
