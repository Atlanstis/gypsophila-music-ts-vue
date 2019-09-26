import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosPromise,
  AxiosResponse
} from "axios";

class HttpRequest {
  public baseUrl: string;
  constructor(baseUrl: string = apiBaseUrl) {
    // 这个类接收一个字符串参数，是接口请求的基本路径
    this.baseUrl = baseUrl;
  }
  // 我们实际调用接口的时候调用实例的这个方法，他返回一个AxiosPromise
  public request(options: AxiosRequestConfig): AxiosPromise {
    const instance: AxiosInstance = axios.create({
      baseURL: this.baseUrl
    }); // 这里使用axios.create方法创建一个axios实例，他是一个函数，同时这个函数包含多个属性，就像我们前面讲的计数器的例子
    this.interceptors(instance, options.url); // 调用interceptors方法使拦截器生效
    return instance(options); // 最后返回AxiosPromise
  }

  // 定义这个函数用于添加全局请求和响应拦截逻辑
  private interceptors(instance: AxiosInstance, url?: string) {
    // 在这里添加请求拦截
    instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        // 接口请求的所有配置，都在这个config对象中，他的类型是AxiosRequestConfig，你可以看到他有哪些字段
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );

    // 在这里添加响应拦截
    instance.interceptors.response.use(
      (response: AxiosResponse) => {
        const { data } = response; // res的类型是AxiosResponse<any>，包含六个字段，其中data是服务端返回的数据
        return data; // 返回数据
      },
      error => {
        return Promise.reject(error);
      }
    );
  }
}

const apiBaseUrl: string = "/netease-api";
export const request = (config: any) => {
  return new HttpRequest(apiBaseUrl).request(config);
};

export interface ResponseData {
  code: number;
  tag?: any;
}
