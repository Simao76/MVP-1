import React from 'react';
import { Link, withRouter } from "react-router-dom"
import LikeBtn from "../Buttons/likeBtn";
import "./leagueCard.scss";

const leagueCard = props => {
  //console.log(props.key)
  return (
    <div className="league-card">
      <Link to={`${props.history.location.pathname}/${props.title}`}>
        <img src={props.src} alt={props.alt} title={props.title}></img>     
      </Link>
      <LikeBtn />
    </div>
  )
}

export default withRouter(leagueCard);
