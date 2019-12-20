import React from 'react';
import { withRouter } from 'react-router-dom';
import Logo from "../../assets/images/mvp_logo_round.png";
import './playerCard.scss';

const PlayerCard = props => {
  //console.log(props.img)
  let playerPic; 
  props.img ? playerPic = props.img : playerPic = <Logo />
  return (
    <div className="player-container">
      <img src={playerPic} alt={props.name} title={props.title} className="player-pic" />
      <p className="player-details">{props.name}</p>
      <p className="player-details">{props.team}</p>
      <a href="/premium" className="premium-button">Premium</a>
    </div>
    
  )
}

export default withRouter(PlayerCard);
