import React from "react";

interface unitsContextType {
  units: 'metric' | 'us' | 'uk' | 'ca'; 
  setUnits: React.Dispatch<React.SetStateAction<'metric' | 'us' | 'uk' | 'ca'>>; 
}

const unitsContext = React.createContext<unitsContextType>(
  {} as unitsContextType
);

export default unitsContext;
