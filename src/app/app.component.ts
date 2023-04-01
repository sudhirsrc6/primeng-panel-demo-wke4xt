import { Component } from '@angular/core';
import receiveProductSecurity from './security-config/receive-product.json';

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
    this.elemntUtil.mergeSecurityConfigs(receiveProductSecurity);
    this.pageElements = this.elemntUtil.getPageElements().fields;

    this.elemntUtil.onchange(this.pageElements.warehouse, (event) => {
      this.onWarehouseSelected(event);
    });

    this.populateFormData();
  }

  populateFormData() {
    this.formData.ownerId = {
      ownerId: 'SP2',
    };
    this.formData.po = 'R01234';
  }

  onWarehouseSelected(event) {
    console.log('Warehouse value is changed', event);
  }

  onSubmit() {
    console.log('formData', this.formData);
  }

  permissions() {
    let securityFields = 'Below are the fields need to configured in DB:\n';
    securityFields += '-----------------------------------------------\n';
    Object.keys(this.elemntUtil.getPageElements().fields).forEach(
      (key: any) => {
        securityFields += key + '\n';
      }
    );
    securityFields += '-----------------------------------------------\n';
    alert(securityFields);
  }
}
