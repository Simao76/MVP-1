import React, { Component } from "react";

class Football extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footballLeagues: ""
    };
  }
  render() {
    console.log(this.props);
    let leagues = this.props.sports.leagues;

    let filteredLeagues;
    if (leagues) {
      filteredLeagues = leagues.filter(el => {
        if (
          el.strLeague === "English Premier League" ||
          el.strLeague === "German Bundesliga" ||
          el.strLeague === "Italian Serie A"
        ) {
          return true;
        }
      });
    }

    console.log(filteredLeagues);
    return (
      <div>
        <h1>Football</h1>

        {filteredLeagues &&
          filteredLeagues.map(item => (
            <div key={item.idPlayer}>
              <img
                src={item.strThumb}
                alt={item.strPlayer}
                title={item.strPlayer}
              ></img>
              <button>Like</button>
              <p>{item.strPlayer}</p>
            </div>
          ))}
      </div>
    );
  }
}

export default Football;
