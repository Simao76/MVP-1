import React from 'react';

const SearchResults = props => {
  //console.log(props.search);

  // All teams from all sports
  let teams = props.search.teams.teams
  // All players from all sports
  let players = props.search.players.player;

  // Filter sports: teams
  let filteredTeams;
  if (teams) {
    filteredTeams = teams.filter(el => {
      if (el.strSport === "Soccer" 
        || el.strSport === "Basketball" 
        || el.strSport === "Formula 1" 
        || el.strSport === "Fighting" 
        || el.strSport === "Tennis") {
        return true;
      };
    });
  };

  // Filter sports: players
  let filteredPlayers;
  if (players) {
    filteredPlayers = players.filter(el => {
      if (el.strSport === "Soccer" 
      || el.strSport === "Basketball" 
      || el.strSport === "Formula 1" 
      || el.strSport === "Fighting"
      || el.strSport === "Tennis") {
        return true;
      };
    });
  }

  return (
    <div>
      <h1>Search results</h1>
      {
        filteredPlayers && (
          filteredPlayers.map(item => (
            <div key={item.idPlayer}>            
            <img src={item.strThumb} alt={item.strPlayer} title={item.strPlayer}></img>
            <button>Like</button>
            <p>{item.strPlayer}</p>
            </div>
          )))
      }
      {
          filteredTeams && (
            filteredTeams.map(item => (
              <div key={item.idTeam}>            
                <img src={item.strTeamBadge} alt="club logo"/>
                <button>Like</button>
                <p>{item.strTeam}</p>
                <p>{item.strLeague}</p>
                <p>{item.strStadium}</p>
              </div>
          )))
        }
    </div>
  )
}

export default SearchResults;
