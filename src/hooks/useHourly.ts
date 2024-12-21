import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import PlaceContext from "../context/placeContext";
import unitsContext from "../context/unitsContext";
import HourlyResponse from "../Entities/Hourly";
import ApiClient from "../services/apiClient";

const apiClient = new ApiClient<HourlyResponse>("/hourly");

const useHourly = () => {
  const { placeID } = useContext(PlaceContext);
  const { units } = useContext(unitsContext);

  return useQuery({
    queryKey: ["hourly", placeID, units],
    queryFn: () =>
      apiClient.get({
        params: {
          place_id: placeID,
          units: units,
        },
      }),
  });
};

export default useHourly;
