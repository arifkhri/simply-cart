// import { useQuery } from "react-query";

// import shipment from "@/integrations/shipment";
import { currency } from "@/utils";

const ShippingAmount = () => {
  // const province = form.watch('province');
  // const city = form.watch('city');

  // const { data, isLoading } = useQuery({
  //   queryKey: ['productDetail'],
  //   queryFn: async () => {
  //     let data = await shipment.getShippingCost(params.id);

  //     return data
  //   },
  //   enabled: !!province && !!city
  // });

  return (
    <div className="flex justify-between">
      <p className="text-sm">Biaya Pengiriman</p>
      <p className="font-bold text-sm">{currency('Rp ', '0')}</p>
    </div>
  )
}

export default ShippingAmount;
