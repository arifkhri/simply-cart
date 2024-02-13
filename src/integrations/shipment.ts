
import fetchClient from '@/utils/fetch';

const baseUrl = process.env.NEXT_PUBLIC_RAJA_ONGKIR_API;

const getShippingCost = <P, R>(payload) => {
  const { post } = fetchClient(baseUrl);

  return post<P, R>('/starter/cost', payload);
}

const shipment = { getShippingCost };

export default shipment;
