import { GoCheck, GoChevronDown } from "react-icons/go";
import styles from "./Dropdown.module.scss";
import { DropdownProps } from "./types";
import { useRef, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { searchStringArray } from "../../utils/searchStringArray";

const Dropdown = ({
  defaultText,
  selectedOption,
  options,
  setSelectedOption,
  searchBarPlaceholder,
}: DropdownProps) => {
  const [showOptions, setShowOptions] = useState(false);
  const [visibleOptions, setVisibleOptions] = useState(options);
  const dropdownRef = useRef(null);

  const searchCategory = (query: string) => {
    const result = searchStringArray(query, options);
    setVisibleOptions(result);
  };

  useOutsideClick(dropdownRef, setShowOptions, "hook_class");

  return (
    <div className={styles.dropdown}>
      <button
        type="button"
        className="hook_class"
        onClick={() => setShowOptions(!showOptions)}
      >
        <p>{selectedOption || defaultText}</p>
        <GoChevronDown />
      </button>

      {showOptions && (
        <div className={styles.dropdown__contents} ref={dropdownRef}>
          <SearchBar
            placeholder={searchBarPlaceholder}
            queryHandler={searchCategory}
          />
          <div>
            {visibleOptions.map((option) => {
              return (
                <button
                  key={option}
                  onClick={() => {
                    setSelectedOption(option);
                    setShowOptions(false);
                  }}
                >
                  <p>{option}</p>
                  {selectedOption == option && <GoCheck />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
