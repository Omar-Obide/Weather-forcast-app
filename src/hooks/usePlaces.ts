import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import TextContext from "../context/TextContext";
import ApiClient from "../services/apiClient";
import { FindPlace } from "../Entities/FindPlace";


const apiClient = new ApiClient<FindPlace[]>("/find_places");

const usePlaces = () => {
  const { text } = useContext(TextContext);
  return useQuery({
    queryKey: ["place", text],
    queryFn: () =>
      apiClient.get({
        params: {
          text: text,
        },
      }),
  });
};

export default usePlaces;
