import React, { Component } from "react";
//import { getBasketball as getFootballService } from "../../../services/Sports";
import { getSport as getSportService } from "../../../services/Sports";

class Basketball extends Component {
  constructor(props) {
    super(props);
    this.state = {
      basketball: ""
    };
  }

  async componentDidMount() {   
    const basketballLeagues = await getSportService("Basketball");
    this.setState({
      basketball: basketballLeagues
    })
  }  

  render() {
    const leagues = this.state.basketball;    
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
}

export default Basketball;
