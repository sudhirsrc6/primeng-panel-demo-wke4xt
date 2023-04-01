import receiveProduct from '../page-configs/receive-product.json';

export class DynamicElementUtil {
  pageConfig: string;

  constructor(pageConfig: string, formData: any) {
    this.pageConfig = pageConfig;
    Object.keys(this.getPageElements().fields).forEach((key: any) => {
      this.getPageElements().fields[key].formData = formData;
    });
  }

  getPageElements(): any {
    return receiveProduct;
  }
}
