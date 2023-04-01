import receiveProduct from '../page-configs/receive-product.json';

export class DynamicElementUtil {
  pageConfig: string;
  public DynamicElementUtil(pageConfig: string) {
    this.pageConfig = pageConfig;
  }

  getPageElements() {
    return receiveProduct;
  }
}
