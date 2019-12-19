import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import LikeBtn from "../Buttons/likeBtn";
import DislikeBtn from "../Buttons/dislikeBtn";
import "./teamCard.scss";

class teamCard extends Component {
  constructor(props) {
    super(props) 
      this.state = {
        follow: ""
      }
      this.followStateTrue = this.followStateTrue.bind(this);
      this.followStateFalse = this.followStateFalse.bind(this);
    }

    componentDidMount() {
      let userFollow;
      this.props.user ? userFollow = this.props.user._myTeams.map(item => item) : userFollow = "";
      if (userFollow.includes(this.props.mongooseId)) {
        this.setState({
          follow: true
        })
      }
      else {
        this.setState({
          follow: false
        })
      }
    }
  
    followStateTrue() {      
      this.setState({
        follow: true
      })
    } 

    followStateFalse() {      
      this.setState({
        follow: false
      })
    }  
    
  render() {

    console.log(this.state.follow)    
    let userFollow;
    this.props.user ? userFollow = this.props.user._myTeams.map(item => item) : userFollow = "";
  
    return (
      <div className="team-card">
        <Link to={`${this.props.history.location.pathname}/${this.props.id}`}>
          <img src={this.props.src} alt={this.props.alt} title={this.props.title}></img>
        </Link>
        <p>{this.props.title}</p>
  {/*       {userFollow.includes(props.mongooseId) && (
          <DislikeBtn {...props} />
        )}
        {!userFollow.includes(props.mongooseId) && (
          <LikeBtn {...props} />
        )} */}
        
        { !this.state.follow /* && !userFollow.includes(this.props.mongooseId) */ && (
          <LikeBtn {...this.props} follow={this.followStateTrue}/>
        )}
        
        { this.state.follow /* && userFollow.includes(this.props.mongooseId) */ && (
          <DislikeBtn {...this.props} unfollow={this.followStateFalse}/>
        )}
        
     
        
          
         
      </div>
  
 
    );
  };
};

export default withRouter(teamCard);
