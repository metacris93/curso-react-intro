function TaskSearch({ searchValue, setSearchValue }) {
    return (
        <input
            type="search"
            value={searchValue}
            placeholder="Search..."
            onChange={(e) => setSearchValue(e.target.value)}
        />
    );
}
export { TaskSearch }