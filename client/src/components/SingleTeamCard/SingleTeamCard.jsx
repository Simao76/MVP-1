import React, { Fragment} from 'react';
import { Link, wihtRouter } from 'react-router-dom';
import LikeBtn from '../Buttons/likeBtn';

const SingleTeam = props => {
  //console.log(props.state)
  const team = props.state
  return (
    <div key={props.id}>
      <div>
      {team && team.map(item => (
        <Fragment key={item.idTeam}>
          <Link to={`${props.history.location.pathname}/${item.idTeam}`}> 
            <img src={item.badge} alt={item.title} />
            <p>{item.title}</p>
            <LikeBtn {...props}/>
          </Link>
        </Fragment>
      ))}      
      </div>
    </div>
  )
};

export default SingleTeam;
