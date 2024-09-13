import React from 'react';
import { TaskContext } from '../TaskContext';

function TaskSearch() {
    const { searchValue, setSearchValue } = React.useContext(TaskContext);
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