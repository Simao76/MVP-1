import React from 'react'
import Logo from "../../assets/images/mvp_logo_round.png";
import './playerCard.scss';

export default function PlayerCard(props) {
  console.log(props.img)
  let playerPic; 
  props.img ? playerPic = props.img : playerPic = <Logo />
  return (
    <div>
      <img src={playerPic} alt={props.name} title={props.title} />
      <p>{props.name}</p>
      <p>{props.team}</p>
    </div>
  )
}
