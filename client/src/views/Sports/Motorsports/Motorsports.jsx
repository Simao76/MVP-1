import React, { Component } from "react";
import { getSport as getSportService } from "../../../services/Sports";
import LeagueCard from "../../../components/leagueCard/leagueCard";
import "../sports.scss";

class Motorsports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formula: ""
    };
  }

  async componentDidMount() {  
    const formula1 = await getSportService("Motorsport");
    this.setState({
      formula: formula1
    })
    //console.log(this.state)
  }  

  render() {    
    const formula1 = this.state.formula;  
    
    return (
      <div className="card-container">
        {formula1 &&
          formula1.map(item => (
            <LeagueCard
              key={item.idLeague}
              src={item.badge}
              alt={item.name}
              title={item.name}        
            />            
          ))}                 
      </div>
    );
  } 
}

export default Motorsports;
