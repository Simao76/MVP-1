import React from "react";
import { Link, withRouter } from "react-router-dom";
import LikeBtn from "../Buttons/likeBtn";
import DislikeBtn from "../Buttons/dislikeBtn";
import "./teamCard.scss";

const teamCard = props => {
  let userFollow;
  props.user ? userFollow = props.user._myTeams.map(item => item) : userFollow = "";

  return (
    <div className="team-card">
      <Link to={`${props.history.location.pathname}/${props.id}`}>
        <img src={props.src} alt={props.alt} title={props.title}></img>
      </Link>
      <p>{props.title}</p>
      {userFollow.includes(props.mongooseId) && (
        <DislikeBtn {...props} />
      )}
      {!userFollow.includes(props.mongooseId) && (
        <LikeBtn {...props} />
      )}
        
       
    </div>
  );
};

export default withRouter(teamCard);
