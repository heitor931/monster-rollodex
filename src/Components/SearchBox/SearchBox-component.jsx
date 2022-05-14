import React from "react";

export const SearchBox = ({filteredMonsters, placeholder, onChange}) => {
    return (
        <input 
        onChange={onChange} type="search" 
        placeholder={placeholder}
         />
    )
}