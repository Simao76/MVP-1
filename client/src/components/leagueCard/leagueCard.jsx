import React from "react";
import { Link, withRouter } from "react-router-dom";
import LikeBtn from "../Buttons/likeBtn";
import "./leagueCard.scss";

const leagueCard = props => {
<<<<<<< HEAD
  // console.log("LeagueCard", props);
=======
//  console.log(props)
>>>>>>> 10683a14e7cbcba34347b8be513de3d2f3702416
  return (
    <div className="league-card">
      <Link to={`${props.history.location.pathname}/${props.id}`}>
        <img src={props.src} alt={props.alt} title={props.title}></img>
      </Link>
      <LikeBtn {...props} />
    </div>
  );
};

export default withRouter(leagueCard);
