import React, { Component } from "react";
import { getSport as getSportService } from "../../../services/Sports";

class Fighting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fighting: ""
    };
  }

  async componentDidMount() {  
    const fighting = await getSportService("Fighting");
    this.setState({
      fighting: fighting
    })
    console.log(this.state)
  }  

  render() {    
    const fighting = this.state.fighting;    
    return (
      <div>
        <h1>Fighting</h1>
        {fighting &&
          fighting.map(item => (
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

export default Fighting;
