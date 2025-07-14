import { post } from '@utils/request';

export const register = (params) => post('/api/accounts/register/', params);