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
          <p>Stop wasting time searching for your favorite teams!</p>       
          <p>Join us and have access to the hottest stats</p> 
          <button>Login</button>
          <button>Sign Up</button>
        </div>   
        <p></p>
      </div>
    )
  }
}

export default Home;
