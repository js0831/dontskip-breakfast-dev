import { retry, map, catchError, finalize, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Injectable, Injector } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpSentEvent,
  HttpHeaderResponse,
  HttpProgressEvent,
  HttpResponse,
  HttpUserEvent,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
// import { LoadingService } from '../components/loading/loading.service';
import { environment } from 'src/environments/environment';
// import { LocalStorageService } from '../services/local-storage.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  // public loading: LoadingService;
  constructor(
    private injector: Injector
  ) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable< HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {

    // this.loading = this.loading || this.injector.get(LoadingService);
    // this.loading.start();
    console.log('START');
    // const user = LocalStorageService.get('user') || {token: ''};
    const withTokenRequest = req.clone({
      // setHeaders: {
      //   Authorization : `Bearer ${user.token}`,
      //   'Content-Type': 'application/json'
      // },
      // url: `${environment.apiURL}${req.url}`
    });

    return next.handle(withTokenRequest).pipe(
      // retry(1),
      catchError((error: HttpErrorResponse) => {
        console.log(error.status);
        console.log(error.message);
        if (error.status !== 401) {
          // 401 handled in auth.interceptor
          // alert(error.message);
        }
        return throwError(error);
      }),
      finalize(() => {

        // setTimeout( () => {
          // this.loading.end();
        // }, 1000);
        console.log('END');

      }),
      tap((event: HttpEvent<any>) => {
        // console.log(event);
        // if (event instanceof HttpResponse) {
        //   const camelCaseObject = event.body;
        //   const modEvent = event.clone({ body: camelCaseObject });
        //   return modEvent;
        // }
        return event;
      })
    );
  }
}
