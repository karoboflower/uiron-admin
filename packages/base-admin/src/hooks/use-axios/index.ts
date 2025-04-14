import service from './service';
import { CONTENT_TYPE } from '@/constants';
import { useUserStoreWithOut } from '@/store/modules/user';
console.log('CONTENT_TYPE',CONTENT_TYPE)
const request = (option: AxiosConfig) => {
  const { url, method, params, data, headers, responseType } = option;

  const userStore = useUserStoreWithOut();
  return service.request({
    url,
    method,
    params,
    data,
    responseType,
    headers: {
      'Content-Type': CONTENT_TYPE,
      [userStore.getTokenKey ?? 'Authorization']: userStore.getToken ?? '',
      ...headers,
    },
  });
};

export default {
  get: <T = any>(option: AxiosConfig) => {
    return request({ method: 'get', ...option }) as Promise<IResponse<T>>;
  },
  post: <T = any>(option: AxiosConfig) => {
    return request({ method: 'post', ...option }) as Promise<IResponse<T>>;
  },
  delete: <T = any>(option: AxiosConfig) => {
    return request({ method: 'delete', ...option }) as Promise<IResponse<T>>;
  },
  put: <T = any>(option: AxiosConfig) => {
    return request({ method: 'put', ...option }) as Promise<IResponse<T>>;
  },
  cancelRequest: (url: string | string[]) => {
    return service.cancelRequest(url);
  },
  cancelAllRequest: () => {
    return service.cancelAllRequest();
  },
};
