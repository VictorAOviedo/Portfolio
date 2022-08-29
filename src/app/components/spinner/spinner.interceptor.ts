import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { SpinnerService } from 'src/app/service/spinner.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {

  constructor(private readonly spinnerS: SpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.spinnerS.show();
    return next.handle(request).pipe(
      finalize( ()=> this.spinnerS.hide()));
  }
}

export const interceptorSpinner = [{
  provide: HTTP_INTERCEPTORS,
  useClass: SpinnerInterceptor,
  multi: true
}];