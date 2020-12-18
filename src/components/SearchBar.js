import React, { useState } from "react";

const SearchBar = ({onSubmit}) => {
  const [searchTerm, setSearchTerm] = useState("");

  // remove: const onInputChange = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(searchTerm);

  };    

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Search for a Video</label>
          <input
            type="text"
            value={searchTerm}
            onChange={ event => setSearchTerm(event.target.value) } 
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;

// Alternate syntax can be implemented:
// onChange={(e) => this.setState({ searchTerm: e.target.value })}
