
import fetchClient from '@/lib/fetch';


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

export default { login, getAuthorizationData };
