import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private authService: AuthService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.log('%cAuthInterceptor | RAW', 'color: orange', req);

        const authToken = this.authService.getToken();
        const authorizedReq = req.clone({
            headers: req.headers.set('Authorization', authToken)
        })

        console.log('%cAuthInterceptor | EDITED', 'color: orange', authorizedReq);

        return next.handle(authorizedReq).pipe(
            tap({
                next: (event) => {
                    if (event instanceof HttpResponse) {
                        console.log('%cAuthInterceptor | RESPONSE', 'color: orange', event)
                    }
                } 
            })
        );
    }
    
}