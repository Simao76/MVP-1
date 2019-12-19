import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import LikeBtn from "../Buttons/likeBtn";
import DislikeBtn from "../Buttons/dislikeBtn";
import "./teamCard.scss";

class teamCard extends Component {
  constructor(props) {
    super(props) 
      this.state = {
        follow: false
      }
      this.followUnfollowHandler = this.followUnfollowHandler.bind(this);
    }
  
    followUnfollowHandler() {      
      this.setState({
        follow: true
      });
    }  

  render() {

    console.log(this.props)    
    /*     let userFollow;
    this.props.user ? userFollow = this.props.user._myTeams.map(item => item) : userFollow = ""; */
  
    return (
      <div className="team-card">
        <Link to={`/${this.props.sport.toLowerCase()}/${this.props.idLeague}/${this.props.id}`}>
          <img src={this.props.badge} alt={this.props.alt} title={this.props.name}></img>
        </Link>
        <p>{this.props.name}</p>        
        <p>{this.props.league}</p>        
        { this.state.follow === false && (
          <LikeBtn {...this.props} follow={this.followUnfollowHandler}/>
        )}
        
        { this.state.follow === true && (
          <DislikeBtn {...this.props} follow={this.followUnfollowHandler}/>
        )}          
         
      </div>
  
 
    );
  };
};

export default withRouter(teamCard);