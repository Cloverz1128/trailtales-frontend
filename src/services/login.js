import { post } from '@utils/request';

export const login = (username, password) =>  post(`/api/accounts/login/`, { username, password });
