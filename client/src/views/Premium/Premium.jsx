import React from 'react';
import { withRouter } from 'react-router-dom';
import PremiumImage from "../../assets/images/premium.png";
import './premium.scss';

const Premium = () => {
  return (
    <div className="premium-container">
      <img src={PremiumImage} alt="page not found" className="premium-image"/>
      <h4>Premium users have access to the most recent and in-depth information</h4>
      <h5><a href="/signup" className="join-button"> Join us </a>and support us on Patreon to become premium</h5>
    </div>
  )
}

export default withRouter(Premium);
