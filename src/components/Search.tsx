import styles from "./Search.module.css";
import { CiSearch } from "react-icons/ci";
import { useColorScheme } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import PlaceContext from "../context/placeContext";
import LocationContext from "../context/LocationContext";
import usePlaces from "../hooks/usePlaces";
import textContext from "../context/TextContext";
import { FindPlace } from "../Entities/FindPlace";
import SearchList from "./SearchList";

const Search = () => {
  const { mode } = useColorScheme();
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { setPlaceID } = useContext(PlaceContext);
  const { setLocation } = useContext(LocationContext);
  const { setText, text } = useContext(textContext);
  const [placeArray, setPlaceArray] = useState<FindPlace[]>([]);
  const [showList, setShowList] = useState(false);
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      setShowList(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputClick = () => {
    if (text.trim() && !showList) {
      setShowList(true);
    }
  };

  const handlePlaceSelect = (place: FindPlace) => {
    setPlaceID(place.place_id);
    setLocation(`${place.name}, ${place.country}`);
    setText("");
    setShowList(false);
    setPlaceArray([]);
  };


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);

    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current); 
    }

    debounceTimer.current = setTimeout(() => {
      if (e.target.value.trim()) {
        setShowList(true);
      } else {
        setShowList(false);
      }
    }, 200); 
  };

  const { data } = usePlaces();

  useEffect(() => {
    if (data) {
      setPlaceArray(data);
    }
  }, [data]);

  return (
    <div className={styles.container}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <CiSearch className={styles.icon} />
        <div ref={wrapperRef} className={styles.searchWrapper}>
          <input
            ref={inputRef}
            onChange={handleInputChange} 
            onClick={handleInputClick}
            className={
              mode === "dark"
                ? `${styles["input-dark"]} ${styles.input}`
                : `${styles["input-light"]} ${styles.input}`
            }
            type="text"
            placeholder="Search City ..."
            value={text}
          />
          {showList && placeArray.length !== 0 && (
            <SearchList Array={placeArray} onSelectPlace={handlePlaceSelect} />
          )}
        </div>
      </form>
    </div>
  );
};

export default Search;

