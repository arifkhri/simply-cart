import { RequestInit } from "next/dist/server/web/spec-extension/request";

const fetchClient = () => {

  const baseUrl = process.env.NEXT_PUBLIC_API;

  const authConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const toQueryParams = (queryParams: any) => {

    if (typeof queryParams === 'string') {
      return queryParams;
    }

    const newQuery = {
      ...queryParams,
    } as any;

    Object.keys(newQuery).forEach((key: string) => {
      if (newQuery[key] === undefined || newQuery[key] === null || Number.isNaN(newQuery[key])) {
        delete newQuery[key];
      }
    });

    return `?${new URLSearchParams(newQuery).toString()}`;
  }

  const post = <P, R>(url: string, payload: P): Promise<R> => {
    const config: RequestInit = {
      method: 'POST',
      body: JSON.stringify(payload),
      ...authConfig,
    };

    return fetch(`${baseUrl}${url}`, config)
      .then((res) => res.json())
      .then((res) => {
        return res;
      });
  };

  const get = <R>(url: string, params?: any, defaultConfig: any = {}): Promise<R> => {
    const config: RequestInit = {
      method: 'GET',
      ...authConfig,
      ...defaultConfig
    };

    let queryParams = '';

    if (params) {
      queryParams = toQueryParams(params);
    }
    return fetch(`${baseUrl}${url}${queryParams || ''}`, config)
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log({ err }))
  };

  return { post, get };
};

export default fetchClient;

