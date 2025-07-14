import { Toast } from 'antd-mobile';
import axios from 'axios';

const domain = 'http://localhost:8000';

axios.interceptors.request.use((config) => ({
  ...config,
  url: domain + config.url,
}));

axios.interceptors.response.use((response) => response.data, (error) => {
  const message =
      error?.response?.data?.message ||
      error?.message ||
      'Oops! The service is currently unavailable.';

    Toast.show({
      icon: 'fail',
      content: message,
    });

    return Promise.reject(error);
});

export const get = (url) => axios.get(url);

export const post = (url, params) => axios.post(url, params);

export const put = (url, params) => axios.put(url, params);

export const del = (url, params) => axios.del(url, params);

export const patch = (url, params) => axios.patch(url, params);
