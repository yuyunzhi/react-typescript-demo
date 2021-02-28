import Axios, { Method } from "axios";

const isDevelopment = !!window.location.host.match(/:/);

interface IResponse<T> {
  code: number;
  data: T;
}

interface IRequestParams {
  params?: { [index: string]: any };
  forms?: any;
}

const axios = Axios.create({
  baseURL: isDevelopment ? "/api/" : process.env.REACT_APP_DOMAIN,
  timeout: 55000,
});


axios.interceptors.request.use(
  config => {
    config.headers.XYZ = 6677;
    config.headers.Authorization = `Bearer token`
    config.headers['Content-Type'] = "application/json"
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

axios.interceptors.response.use(
  config => {
    if (config?.data?.message) {
      // TODO success message console
    }
    return config?.data;
  },
  error => {
    let errorMessage = '系统异常';
    if (error?.message?.includes('Network Error')) {
      errorMessage = 'Network Error';
    }
    return {
      status: false,
      message: errorMessage,
      result: null
    };
  }
);

export function api<T>(url: string, method: Method, req: IRequestParams): Promise<IResponse<T>> {
  console.log('API url',url,req);
  switch (method) {
    case "get":
      return axios.get(url);
    case "delete":
      return axios.delete(url);
    case "post":
      return axios.post(url, req.forms || req.params);
    case "patch":
      return axios.patch(url, req.forms || req.params);
    default:
      return axios.get(url);
  }
}

export function get<T>(url: string, params?: IRequestParams["params"], forms?: any): Promise<IResponse<T>> {
  return api<T>(url, "get", {
    params,
    forms
  });
}

export function deletes<T>(url: string, params?: IRequestParams["params"], forms?: any): Promise<IResponse<T>> {
  return api<T>(url, "delete", {
    params,
    forms
  });
}

export function post<T>(url: string, params?: IRequestParams["params"], forms?: any): Promise<IResponse<T>> {
  return api<T>(url, "post", {
    forms,
    params
  });
}

export function patch<T>(url: string, params?: IRequestParams["params"], forms?: any): Promise<IResponse<T>> {
  return api<T>(url, "patch", {
    forms,
    params
  });
}

const axiosApi = {
  get,
  delete: deletes,
  patch,
  post
};

export default axiosApi;
