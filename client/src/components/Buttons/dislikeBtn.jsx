import React from "react";
import { removeFollower } from "../../services/user";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './dislikeBtn.scss';

export default function dislikeBtn(props) {
  const removingFollowers = () => {
  const teamsId = props.mongooseId;
  const userId = props.user._id;
  //console.log("USERID", userId, "teamsId", teamsId);
  removeFollower(teamsId, userId);
  props.unfollow();
  };
  //console.log(props)
  return (
    <div>      
      {props.user && <button onClick={removingFollowers} className="unfollow-button"><FontAwesomeIcon icon={["far", "thumbs-down"]}/> unfollow</button>}
    </div>
  );
}
