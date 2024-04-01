import css from "./SearchBox.module.css";

const SearchBox = ({ filterValue, setFilterValue }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        className={css.searchInput}
        value={filterValue}
        onChange={evt => setFilterValue(evt.target.value)}
      />
    </>
  );
};

export default SearchBox;
