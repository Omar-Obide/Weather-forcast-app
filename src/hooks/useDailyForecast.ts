import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import PlaceContext from "../context/placeContext";
import unitsContext from "../context/unitsContext";
import DailyForcastResponse from "../Entities/DailyForecast";
import ApiClient from "../services/apiClient";

const apiClient = new ApiClient<DailyForcastResponse>("/daily");

const useDailyForcast = () => {
  const { placeID } = useContext(PlaceContext);
  const { units } = useContext(unitsContext);
  return useQuery({
    queryKey: ["daily", placeID, units],
    queryFn: () =>
      apiClient.get({
        params: {
          place_id: placeID,
          units: units,
        },
      }),
  });
};

export default useDailyForcast;
