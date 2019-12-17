import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { getEvents as getEventsService,  getTeams as getTeamsService  } from '../../../services/Sports';
import LikeBtn from '../../../components/Buttons/likeBtn';

class SingleLeague extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: "",
      events: ""
    }
  }

  async componentDidMount() {
    try {
      const getTeams = await getTeamsService(this.props.match.params.id)
      const getEvents = await getEventsService(this.props.match.params.id)
      this.setState({
        teams: getTeams,
        events: getEvents
      })
      //console.log(this.state.events)
    }
    catch(err) {
      console.log(err);
      throw(err);
    }
  }   

  render() { 
    const events = this.state.events;
    const teams = this.state.teams;
    //console.log(this.state.teams)
    //console.log(teams)
    
    return (
      <div>
        <div>
          {teams && teams.map(item => (
            <Fragment key={item.idTeam}>
              <Link to={`${this.props.history.location.pathname}/${item.idTeam}`}>
                <div>
                  <img src={item.badge} alt={item.name}></img> 
                  <p>{item.name}</p>
                  <LikeBtn />
                </div>             
              </Link>
            </Fragment>
            
          ))}

          <h3>Latest games</h3>
            {events[0] && events[0].map(el => (
              <Fragment key={el.idEvent}>
                <p><strong>{el.strEvent}</strong></p>
                <div><p>{el.strHomeTeam} {el.intHomeScore}</p><p>{el.strAwayTeam} {el.intHomeScore}</p></div>                
                <div>                  
                </div>          
              </Fragment>
            ))}
        </div>
        <div>
          <h3>Next games</h3>
            {events[1] && events[1].map(el => (
              <Fragment key={el.idEvent}>
              <p><strong>{el.strEvent}</strong></p>
                <div><p>{el.strHomeTeam} {el.intHomeScore}</p><p>{el.strAwayTeam} {el.intHomeScore}</p></div>
                <div>                  
                </div>          
              </Fragment>
            ))}
        </div>
      </div>
    )
  }
}

export default withRouter(SingleLeague);