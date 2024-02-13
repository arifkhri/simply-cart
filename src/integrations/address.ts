
import fetchClient from '@/utils/fetch';

const baseUrl = process.env.NEXT_PUBLIC_RAJA_ONGKIR_API;
const headers = {
  key: process.env.NEXT_PUBLIC_RAJA_ONGKIR_APIKEY
}

const getProvince = <R>() => {
  const { get } = fetchClient(baseUrl);

  return get<R>('/starter/province', '', {headers});
}

const getCity = <R>(province: string) => {
  const { get } = fetchClient(baseUrl);

  return get<R>('starter/city', province, {headers});
}

const address = { getProvince, getCity };

export default address;
