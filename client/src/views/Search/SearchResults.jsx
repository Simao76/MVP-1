import React from 'react'

const SearchResults = props => {
  //console.log(props.search);
  let teams = props.search.teams;
  let player = props.search.player;

  
  return (
    <div>
      <h1>Search results</h1>
     {
        teams && (
          teams.map(item => (
            <div key={item.idTeam}>            
              <img src={item.strTeamBadge} alt="club logo"/>
              <button>Like</button>
              <p>{item.strTeam}</p>
              <p>{item.strLeague}</p>
              <p>{item.strStadium}</p>
            </div>
        )))
      }
      {
        player && (
          player.map(item => (
            <div key={item.idPlayer}>            
            <p>{item.strPlayer}</p>
            </div>
          )))
      }

    </div>
  )
}

export default SearchResults;
