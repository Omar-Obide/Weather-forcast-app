import { useQuery } from "@tanstack/react-query";
import CurrentWeatherResponse from "../Entities/CurrentWeather";
import ApiClient from "../services/apiClient";
import { useContext } from "react";
import PlaceContext from "../context/placeContext";
import unitsContext from "../context/unitsContext";

const apiClient = new ApiClient<CurrentWeatherResponse>("/current");

const useCurrentWeather = () => {
  const { placeID } = useContext(PlaceContext);
  const { units } = useContext(unitsContext);

  if (!placeID) {
    return { data: null, isLoading: false, error: null };
  }

  return useQuery({
    queryKey: ["current", placeID, units],
    queryFn: () =>
      apiClient.get({
        params: {
          place_id: placeID,
          units: units,
        },
      }),
    enabled: !!placeID,
  });
};

export default useCurrentWeather;
