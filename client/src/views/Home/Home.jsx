import React, { Component } from 'react';

/* import { getTeam as getTeamService} from "../../services/teams"; */

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
      <div> 
        <p>Homepage</p>
   
        <p></p>
      </div>
    )
  }
}

export default Home;