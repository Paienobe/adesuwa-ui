import { BiSearchAlt2 } from "react-icons/bi";
import styles from "./SearchBar.module.scss";
import { SearchBarProps } from "./types";

const SearchBar = ({ queryHandler, placeholder }: SearchBarProps) => {
  return (
    <div className={styles.search_bar}>
      <BiSearchAlt2 size={25} />
      <input
        type="text"
        className={styles.search_bar__input}
        placeholder={placeholder}
        onChange={(e) => queryHandler(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
