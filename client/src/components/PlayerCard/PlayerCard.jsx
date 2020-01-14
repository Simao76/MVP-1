import React from 'react';
import { withRouter } from 'react-router-dom';
import './playerCard.scss';

const PlayerCard = props => {
  return (
    <div className="player-container">
      <img src={props.img} alt={props.name} title={props.title} className="player-pic" />
      <p className="player-details">{props.name}</p>
      <p className="player-details">{props.team}</p>
      <a href="/premium" className="premium-button">Premium</a>
    </div>    
  );
};

export default withRouter(PlayerCard);
