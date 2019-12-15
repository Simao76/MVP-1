import React, { Component } from "react";
import { getSport as getSportService } from "../../../services/Sports";

class Tennis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tennis: ""
    };
  }

  async componentDidMount() {  
    const tennis = await getSportService("Tennis");
    this.setState({
      tennis: tennis
    })
    console.log(this.state)
  }  

  render() {
    
    const tennis = this.state.tennis;    
    return (
      <div>
        <h1>Tennis</h1>
        {tennis &&
          tennis.map(item => (
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

export default Tennis;
