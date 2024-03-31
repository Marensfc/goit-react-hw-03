import { useState } from "react";
import css from "./SearchBox.module.css";

const SearchBox = ({ inSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleOnChange = evt => {
    const searchValue = evt.target.value;

    setSearchValue(searchValue);
    inSearch(searchValue);
  };

  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        className={css.searchInput}
        value={searchValue}
        onChange={handleOnChange}
      />
    </>
  );
};

export default SearchBox;
