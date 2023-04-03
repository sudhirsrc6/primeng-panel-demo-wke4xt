import receiveProduct from '../page-configs/receive-product.json';

export class DynamicElementUtil {
  pageConfig: string;

  constructor(pageConfig: string, formData: any) {
    this.pageConfig = pageConfig;
    Object.keys(this.getPageElements().fields).forEach((key: any) => {
      this.getPageElements().fields[key].formData = formData;
    });
  }

  mergeSecurityConfigs(securityConfigs: any) {
    securityConfigs.userFieldSettingList.forEach((eachField: any) => {
      let elementConfig = this.getPageElements().fields[eachField.fieldId];
      if (eachField.editable != undefined) {
        elementConfig.editable = eachField.editable;
      }
      if (eachField.viewable != undefined) {
        elementConfig.viewable = eachField.viewable;
      }
      if (eachField.fieldLabel != undefined) {
        elementConfig.label = eachField.fieldLabel;
      }
    });
  }

  getPageElements(): any {
    return receiveProduct;
  }

  onchange(element: any, callFunction: Function) {
    element.onchange = callFunction;
  }
}
