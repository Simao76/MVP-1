import React from 'react';
import { withRouter } from 'react-router-dom';
import TeamCard from "../../components/teamCard/searchTeamCard";
import PlayerCard from "../../components/PlayerCard/PlayerCard";
import './searchResults.scss';

const SearchResults = props => {
  console.log(props.search);

  // All teams from all sports
  let teams = props.search.teams
  // All players from all sports
  let players = props.search.players.player;

  // Filter sports: teams
/*   let filteredTeams;
  if (teams) {
    filteredTeams = teams.filter(el => {
      if (el.strSport === "Soccer" 
        || el.strSport === "Basketball" 
        || el.strSport === "Formula 1" 
        || el.strSport === "Fighting" 
        || el.strSport === "Tennis") {
        return true;
      };
      return true
    });
  }; */

  // Filter sports: players
  let filteredPlayers;
  if (players) {
    filteredPlayers = players.filter(el => {
      if (el.strSport === "Soccer" 
      || el.strSport === "Basketball" 
      || el.strSport === "Formula 1" 
      || el.strSport === "Fighting"
      /* || el.strSport === "Tennis" */) {
        return true;
      };
      return true
    });
  }

  return (
    <div className="card-container">
      {
        filteredPlayers && (
          filteredPlayers.map(item => (
            <PlayerCard
              key={item.idPlayer}
              img={item.strCutout}           
              name={item.strPlayer}   
              team={item.strTeam}           
            />
          )))
      }
        {
         teams && (
           teams.map(item => (            
             <TeamCard
               {...props}
               key={item.idTeam}
               mongooseId={item._id}
               badge={item.badge}
               id={item.idTeam} 
               idLeague={item.idLeague}               
               name={item.name}
               league={item.league}
               sport={item.sport}
               />
             )
         ))
        } 
       {
          !teams || teams.length === 0 && !players && (
            <p>No result was found</p>
          )
        } 

    </div>
  )
}

export default withRouter(SearchResults);
