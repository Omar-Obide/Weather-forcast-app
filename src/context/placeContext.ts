import React from "react";

interface PlaceContextType {
  placeID: string;
  setPlaceID: React.Dispatch<React.SetStateAction<string>>;
}

const PlaceContext = React.createContext<PlaceContextType>(
  {} as PlaceContextType
);

export default PlaceContext;
