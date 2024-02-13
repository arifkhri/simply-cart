
import fetchClient from '@/utils/fetch';


const login = <P, R>(params?: any) => {
  const { post } = fetchClient();

  return post<P, R>('/auth/login', params);
}

const getAuthorizationData = <R>(token: string) => {
  const { get } = fetchClient();
  const headers = {
    Authorization: `Bearer ${token}`
  }

  return get<R>('/auth/me', {headers});
}
const auth = { login, getAuthorizationData };

export default  auth;
