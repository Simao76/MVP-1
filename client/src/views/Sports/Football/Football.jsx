import React, { Component } from "react";

class Football extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footballLeagues: ""
    };
  }

  // componentDidMount() (relacionado com o getfootball)

  render() {
    /*  console.log(this.props);
    let leagues = this.props.sports.leagues;

    let filteredLeagues;
    if (leagues) {
      filteredLeagues = leagues.filter(el => {
        if (
          el.strLeague === "UEFA Champions League" ||
          el.strLeague === "UEFA Europa League" ||
          el.strLeague === "English Premier League" ||
          el.strLeague === "German Bundesliga" ||
          el.strLeague === "Italian Serie A" ||
          el.strLeague === "French Ligue 1" ||
          el.strLeague === "Spanish La Liga" ||
          el.strLeague === "Portuguese Primeira Liga" ||
          el.strLeague === "Brazilian Brasileirao"
        ) {
          return true;
        }
      });
    } */

    const leagues = this.props.sports;
    return (
      <div>
        <h1>Football</h1>

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

export default Football;
