import { useQuery } from "react-query";

import address from "@/integrations/address";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue} from "../ui/Select";
import { ICity, IRajaOnkirResponse } from "../../../global";


const City = ({form, ...restProps}) => {

  const provinceId = form.watch('province');

  const { data } = useQuery({
    queryKey: ['city'],
    queryFn: async () => {
      let data = await address.getCity<IRajaOnkirResponse<ICity>>(provinceId);

      return data;
    },
    enabled: !!provinceId
  });

  return (
    <Select {...restProps}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Pilih Provinsi" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Provinsi</SelectLabel>
          {
            (data?.rajaongkir?.results || []).map(({city_id, city_name}) => (
              <SelectItem key={city_id} value={city_id.toString()}>{city_name}</SelectItem>
            ))
          }
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default City;
