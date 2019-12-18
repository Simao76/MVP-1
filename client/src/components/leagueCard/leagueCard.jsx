import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import LikeBtn from "../Buttons/likeBtn";
import DislikeBtn from "../Buttons/dislikeBtn";
import "./leagueCard.scss";

class leagueCard extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let isFollowing;
    //const userFollowing = this.props.user.myTeams.map(item => item)
    //let user = this.props.user._myTeams;
   //console.log(this.props.user_myTeams)

  }
  render() {
    
    return (
      <div className="league-card">
      <Link to={`${this.props.history.location.pathname}/${this.props.id}`}>
        <img src={this.props.src} alt={this.props.alt} title={this.props.title}></img>
      </Link>
      <LikeBtn {...this.props} />
      <DislikeBtn {...this.props} />
    </div>
    )
  }


};

export default withRouter(leagueCard);
