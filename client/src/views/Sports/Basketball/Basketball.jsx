import React from "react";

const Basketball = props => {
    const leagues = props.sports;
    return (
      <div>
        <h1>Basketball</h1>
        {leagues &&
          leagues.map(item => (
            <div key={item.idLeague}>
              <img src={item.badge} alt={item.name} title={item.name}></img>
              <button>Like</button>
              <p>{item.description}</p>
            </div>
          ))}
      </div>
    );  
}

export default Basketball;
