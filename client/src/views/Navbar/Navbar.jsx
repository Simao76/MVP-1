import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Logo from '../../assets/images/mvp_logo_full.png';
import NavigationItems from './NavigationItems/NavigationItems';
import { getTeam as getTeamService, getPlayer as getPlayerService } from "../../services/teams"
import './navbar.scss';

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ""
    }
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  onChangeHandler = (e) => {
    //console.log(this.state.search)
    //console.log(e.target.value)   
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  async handleFormSubmission(e) {
    e.preventDefault();
    const { search } = this.state;
    try {      
      const results = await getTeamService({ search });    
      const searchFor = this.state.search; 
      this.props.getSearch(results)
      this.props.history.push(`/search/${searchFor}`);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <nav>
        <Link to="/"><img src={Logo} alt="logo" /></Link>
        <NavigationItems />
        <form onSubmit={this.handleFormSubmission} >
          <input type="search" name="search" value={this.state.search} onChange={this.onChangeHandler}></input>
          <button>Submit</button>
        </form>
      </nav>
    )
  }
}


export default withRouter(Navbar);
