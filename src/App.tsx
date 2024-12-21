import { useColorScheme } from "@mui/material";
import { useState } from "react";
import Navbar from "./components/Navbar";
import WeatherGrid from "./components/WeatherGrid";
import CurrentUnitsContext from "./context/CurrentUnitsContext";
import LocationContext from "./context/LocationContext";
import PlaceContext from "./context/placeContext";
import TextContext from "./context/TextContext";
import unitsContext from "./context/unitsContext";
import CurrentUnits from "./Entities/CurrentUnits";
import UNITS from "./Entities/Units";
import useCurrentWeather from "./hooks/useCurrentWeather";

function App() {
  const [placeID, setPlaceID] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const { data } = useCurrentWeather();
  const [units, setUnits] = useState<"metric" | "us" | "uk" | "ca">(
    data?.units || "metric"
  );
  const [currentUnits, setCurrentUnits] = useState<CurrentUnits>(UNITS.metric);
  const [text, setText] = useState<string>("");
  const { mode, setMode } = useColorScheme();
  if (mode === "system") {
    setMode("dark");
  }

  return (
    <TextContext.Provider value={{ text, setText }}>
      <CurrentUnitsContext.Provider value={{ currentUnits, setCurrentUnits }}>
        <unitsContext.Provider value={{ units, setUnits }}>
          <PlaceContext.Provider value={{ placeID, setPlaceID }}>
            <LocationContext.Provider value={{ location, setLocation }}>
              <div>
                <Navbar />
                <main>
                  <WeatherGrid />
                </main>
              </div>
            </LocationContext.Provider>
          </PlaceContext.Provider>
        </unitsContext.Provider>
      </CurrentUnitsContext.Provider>
    </TextContext.Provider>
  );
}

export default App;
