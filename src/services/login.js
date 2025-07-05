import { post } from '../utils/request';

export const loginService = (username, password) =>  post(`/api/accounts/login/`, { username, password });
