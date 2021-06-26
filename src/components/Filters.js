import React from "react";

function Filters({onChangeType, onFindPetsClick}) {

  function handleChange(e){
    onChangeType(e.target.value)
 
  }

  function handleClick(e){
    onFindPetsClick(e.target.value)
  }

  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select aria-label="type" name="type" id="type" onChange={handleChange}>
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button className="ui secondary button" onClick={handleClick}>Find pets</button>
      </div>
    </div>
  );
}

export default Filters;
