import React from "react";

import SearchForm from "./searchForm";
import FiltersForm from "./filtersForm";

function SearchGuild() {
    return (
        <div className="search-guild">
            <SearchForm />
            <FiltersForm />
        </div>
    );
}

export default SearchGuild;
