import axios, { Method, AxiosPromise, AxiosRequestConfig } from 'axios';

class HttpRequest {
  _method: Method;
  _url: string;
  _body: object;
  _headers: object;

  constructor(method?: Method, url?: string, body?: object, headers?: object) {
    this.method = method;
    this.url = url;
    this.body = body;
    this.headers = headers;
  }

  set method(value: Method) {
    this._method = value;
  }

  set url(value: string) {
    this._url = value;
  }

  set body(value: object) {
    this._body = value;
  }

  set headers(value: object) {
    this._headers = value;
  }

  get method(): Method {
    return this._method;
  }

  get url(): string {
    return this._url ?? '';
  }

  get body(): object {
    return this._body ?? {};
  }


  get headers(): object {
    return this._headers ?? {};
  }

  send(): AxiosPromise<any> {
    if (!this._method || !this._url) {
      return;
    }

    const axiosInstance = axios.create();

    axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
      if (process.env.NODE_ENV === 'development') {
        console.log(config);
      }
      return config;
    })

    return axiosInstance({
      method: this._method,
      url: this._url,
      data: this._body,
      headers: this._headers
    });
  }
}


export default HttpRequest;