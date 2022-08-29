import { Component } from '@angular/core';
import { SpinnerService } from 'src/app/service/spinner.service';

@Component({
  selector: 'app-spinner',
  template: `
  <div class="overlay" *ngIf="isLoading$ | async">
    <div class="loadingio-spinner-eclipse-u0kf664sb5q"><div class="ldio-v16qzlqq5a">
    <div></div></div></div>
  </div>`,
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {
  isLoading$ = this.spinerS.isLoading$;

  constructor(private readonly spinerS: SpinnerService) { }

}
