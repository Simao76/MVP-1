import React from 'react';
import './userProfile.scss';

const userProfile = props => {
  console.log(props.user, props.history)
/*   let user;
  props.user ? user = props.user : user = `You don't have permission to see this page` */
  return (
    <div>
      {!props.user && (
        <div>
          <p>You're not authorized to view this page</p>
        </div>
      )}

      {props.user && (
        <div>
          <h1>User profile</h1>
          <p>{props.user.name}</p>
          <p>{props.user.email}</p>
          <img src={props.user.profilePic} className="profilePic"></img>   
        </div>
      )}   
    </div>
  )
}

export default userProfile;
