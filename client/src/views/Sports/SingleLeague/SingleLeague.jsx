import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { getTeamsInALeague as getTeamsService } from '../../../services/Sports';

class SingleLeague extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: ""
    }
  }

  async componentDidMount() {
    try {
      const getTeams = await getTeamsService(this.props.match.params.id)
      this.setState({
        teams: getTeams
      })
      console.log(this.state.teams)
    }
    catch(err) {
      console.log(err);
      throw(err);
    }
  }   

  render() { 
    const teams = this.state.teams
    //console.log(teams)
    //console.log(this.props.match)
    /* console.log(this.props.match.params.id);    
    console.log(this.state.oneBeer);
    const oneBeer = this.state.oneBeer; 
    
    const beerCard = (
      <div key={oneBeer._id}>
      <img src={oneBeer.image_url} alt=""></img>  
      <p>{oneBeer.name}</p>
      <p>{oneBeer.tagline}</p>
      <p>{oneBeer.first_brewed}</p>
      <p>{oneBeer.attenuation_level}</p>
      <p>Descripton level: {oneBeer.description}</p>
      <p>Created by: {oneBeer.contributed_by}</p>
      </div>
    )  */

    return (
      <div>
        
        {/* beerCard */}
        {teams && teams.map(el => (
          <div>
            <h1>{this.props.match.params.id}</h1>
            <div key={el.idTeam}>
              <img src={el.strTeamBadge} />
              <p>{el.strTeam}</p>
            </div>          
          </div>
            

         
        ))}
      </div>
    )
  }
}

export default withRouter(SingleLeague);
