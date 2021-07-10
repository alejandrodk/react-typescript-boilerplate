import axios from 'axios';
import { HttpMethods } from '@enums';

export async function HttpRequest({
  url,
  method,
  body,
  options,
  headers,
}: any): Promise<any> {
  body = body && typeof body === 'string' ? body : JSON.stringify(body);

  const requestHeaders = {
    'Content-Type': 'application/json',
    ...headers,
  };

  const { data } = await axios(url, {
    method: method || HttpMethods.GET,
    data: body,
    headers: requestHeaders,
    ...options,
  });

  return data;
}

export function UrlFactory(
  endpoint: string,
  params: Record<string, any>
): string {
  const uri = params
    ? Object.entries(params).reduce((acc, [key, value], index) => {
        const and = !index ? '?' : '&';
        acc = `${acc}${and}${key}=${value}`;
        return acc;
      }, endpoint)
    : endpoint;
  return encodeURI(uri);
}
