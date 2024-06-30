import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {MobileNavBarComponent, NavBarComponent} from "@app/shared";

@Component({
  selector: 'app-callback',
  standalone: true,
  imports: [
    CommonModule,
    NavBarComponent,
    MobileNavBarComponent
  ],
  template: `
      <div class="page-layout">
          <app-nav-bar></app-nav-bar>
          <app-mobile-nav-bar></app-mobile-nav-bar>
          <div class="page-layout__content">
              <ng-content></ng-content>
          </div>
      </div>
  `,
  styles: ``
})
export class CallbackComponent {

}
