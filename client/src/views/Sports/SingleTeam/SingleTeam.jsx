import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { getOneTeam as geTeamService } from '../../../services/Sports';

class SingleTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: "",
      events: ""
    }
  }
  async componentDidMount() {
    try {
      const getTeam = await geTeamService(this.props.match.params.id)
      //const getEvents = await getEventsService(this.props.match.params.id)
      this.setState({
        team: getTeam,
      })
      //console.log(this.state.events)
    }
    catch(err) {
      console.log(err);
      throw(err);
    }
  } 

  render() {
    const team = this.state.team;
    console.log(team)
    return(
      <div>
        {team && team.map(item => (
          <div key={item.idTeam}>
            <img src={item.banner}></img>
          </div>
        ))}
      </div>
    )
  }
}  

export default withRouter(SingleTeam);
