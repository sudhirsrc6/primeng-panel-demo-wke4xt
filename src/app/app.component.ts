import { Component } from '@angular/core';

import { MessageService } from 'primeng/api';
import { DynamicElementUtil } from './dynamic-element/dynamic-element.util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [MessageService],
})
export class AppComponent {
  formData: any = {};

  constructor() {}

  pageElements: any;
  elemntUtil: DynamicElementUtil;
  ngOnInit() {
    this.elemntUtil = new DynamicElementUtil('receive-product', this.formData);
    this.pageElements = this.elemntUtil.getPageElements().fields;
  }
}
