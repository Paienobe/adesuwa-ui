export type DropdownProps = {
  defaultText: string;
  options: string[];
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  searchBarPlaceholder: string;
};
