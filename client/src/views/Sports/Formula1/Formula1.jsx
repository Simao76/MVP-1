import React, { Component } from "react";
import { getSport as getSportService } from "../../../services/Sports";

class Formula1 extends Component {
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
    console.log(this.state)
  }  

  render() {
    
    const formula1 = this.state.formula;    
    return (
      <div>
        <h1>Formula 1</h1>
        {formula1 &&
          formula1.map(item => (
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

export default Formula1;
