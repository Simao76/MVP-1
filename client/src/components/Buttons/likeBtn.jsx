//import React, { Component } from "react";
import { addfollower } from "../../services/user";

import React from "react";

export default function LikeBtn(props) {
  const adddingfollowers = () => {
    const teamsId = props.mongooseId;
    const userId = props.user._id;
    console.log("USERID", userId);
    addfollower(teamsId, userId);
  };
  return (
    <div>
      <div>
        {props.user && <button onClick={adddingfollowers}>Like</button>}
      </div>
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
