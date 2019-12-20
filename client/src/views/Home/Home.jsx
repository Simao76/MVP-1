import React, { Component } from 'react';
/* import { getTeam as getTeamService} from "../../services/teams"; */
import './home.scss'

class Home extends Component {
  constructor(props) {
    super(props) 
      this.state = {
        team: null      
    }
  }

/*   async componentDidMount() {
    try {
      const team = await getTeamService();      
      this.setState({
        team
      });
    } catch (error) {
      console.log(error);
      console.log('Error in service.');
    }
  } */


  render() {      
    return (
      <div className="home-container"> 
        <div className="pitch">
          <p>Follow your favorite teams<br /> and get updated on the go!</p>
        </div>   
        <div>
          <a href="/login" className="home-button">login</a>
          <a href="/signup" className="home-button">sign up</a>
        </div>
      </div>
    )
  }
}

export default Home;
