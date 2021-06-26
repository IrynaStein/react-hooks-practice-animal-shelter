import React, { useState } from "react";

function Pet({ pet, onAdoptPet }) {
  const { type, gender, weight, age, name, isAdopted, id } = pet

  const [adopted, SetAdopted] = useState(isAdopted)

  function handleClick(e){
    SetAdopted((mUv) => !mUv)
    onAdoptPet(id)
  }

  function genderDet(gender) {
    if (gender === "male") {
      return '♂'
    }
    else {
      return '♀'
    }
  }

  // function onAdoptPet(){
  //   console.log(isAdopted)
  // }

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {/*'♀' OR '♂' */}
          {genderDet(gender)}
          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        {adopted? (<button className="ui disabled button">Already adopted</button>)
        : (<button className="ui primary button" onClick={handleClick}>Adopt pet</button>)}  
      </div>
    </div>
  );
}

export default Pet;
