import React from "react";
import { Link, withRouter } from "react-router-dom";
import LikeBtn from "../Buttons/likeBtn";
import DislikeBtn from "../Buttons/dislikeBtn";
import "./teamCard.scss";

const teamCard = props => {
  //console.log("Team card", props);
  return (
    <div className="league-card">
      <Link to={`${props.history.location.pathname}/${props.id}`}>
        <img src={props.src} alt={props.alt} title={props.title}></img>
      </Link>
      <LikeBtn {...props} />
      <DislikeBtn {...props} />
    </div>
  );
};

export default withRouter(teamCard);
