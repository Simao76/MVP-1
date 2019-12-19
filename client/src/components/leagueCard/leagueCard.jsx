import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./leagueCard.scss";

class leagueCard extends Component {
/*   constructor(props) {
    super(props);
  } */

  render() {
    return (
      <div className="league-card">
        <Link to={`${this.props.history.location.pathname}/${this.props.id}`}>
          <img
            src={this.props.src}
            alt={this.props.alt}
            title={this.props.title}
          ></img>
        </Link>
      </div>
    );
  }
}

export default withRouter(leagueCard);
