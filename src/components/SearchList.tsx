import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useColorScheme,
} from "@mui/material";
import { FindPlace } from "../Entities/FindPlace";
import styles from "./SearchList.module.css";

interface Props {
  Array: FindPlace[];
  onSelectPlace: (place: FindPlace) => void;
}

const SearchList = ({ Array, onSelectPlace }: Props) => {
  const { mode } = useColorScheme();
  return (
    <List
      className={
        mode === "light"
          ? `${styles.list} ${styles["list-light"]}`
          : `${styles.list} ${styles["list-dark"]}`
      }
      sx={{ position: "absolute" }}
    >
      {Array.map((e) => (
        <ListItem
          key={e.place_id}
          sx={{ padding: "0", zIndex: "999" }}
          className={styles.listItem}
        >
          <ListItemButton
            onClick={() => onSelectPlace(e)}
            className={styles["list-item-button"]}
          >
            <ListItemText
              className={styles["list-item-text"]}
              primary={`${e.name} ${e.adm_area1} ${e.country}`}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default SearchList;
