import React from "react";

interface LocationContextType {
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const LocationContext = React.createContext<LocationContextType>(
  {} as LocationContextType
);

export default LocationContext
