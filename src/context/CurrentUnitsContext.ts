import React from "react";
import CurrentUnits from "../Entities/CurrentUnits";

interface CurrentUnitsContextType {
  currentUnits: CurrentUnits;
  setCurrentUnits: React.Dispatch<React.SetStateAction<CurrentUnits>>;
}

const CurrentUnitsContext = React.createContext<CurrentUnitsContextType>(
    {} as CurrentUnitsContextType
  );
  
  export default CurrentUnitsContext