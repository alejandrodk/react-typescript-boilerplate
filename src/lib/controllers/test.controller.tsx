import { UrlFactory } from '@helpers';

export class TestController {
  private static API = process.env.REACT_APP_API_URL;

  static getTestRequest(someId: string) {
    return UrlFactory(`${this.API}/test/${someId}`, {});
  }
}
