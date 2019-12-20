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

/* export default class LikeBtn extends Component {
  constructor(props) {
    super(props);
    this.adddingfollowers = this.adddingfollowers.bind(this);
  }

  adddingfollowers() {
    const userId = this.props.user;
    const teamsId = this.props.mongooseId;
    addfollower(teamsId);
  }

  render() {
    console.log("USER IN LIKE BUTTON", this.props.user);
    return (
      <div>
        {this.props.user && (
          <button onClick={this.adddingfollowers}>Like</button>
        )}
      </div>
    );
  }
}
 */
