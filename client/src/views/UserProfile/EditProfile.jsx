import React, { Component } from 'react';
import { editProfile,  uploadImage } from './../../services/user';
import { loadUserInformation } from "./../../services/auth/auth-service";
import EditImage from '../../assets/images/edit.png';
import './editProfile.scss';

export class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      picHolder: ""
    };
    this.formChangeHandler = this.formChangeHandler.bind(this);
    this.submitFormHandler = this.submitFormHandler.bind(this);
    this.imageUploadHandler = this.imageUploadHandler.bind(this);
  }

  async componentDidMount(props) {
    const loadUser = await loadUserInformation()
    this.setState({
      user: loadUser
    });
  }

  async submitFormHandler(e) {
    e.preventDefault();
    const updateUser = this.state.user;
    //console.log(updateUser)
    await editProfile(this.state.user._id, {updateUser} );
    await this.props.updateUser(updateUser);
    this.props.history.push(`/profile/${this.state.user.name}`);
  }

  formChangeHandler(e) {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value,
      }
    });
  }
  async imageUploadHandler(e) {
    e.preventDefault();
    const image = e.target[0].files[0];
    //console.log(image)
    const imageUrl = await uploadImage(image);
    //console.log(imageUrl)
    this.setState({
      user: {
        ...this.state.user,
        profilePic: imageUrl
      }
    });
    await this.props.updateUser(this.state.user);
  } 

  render() {
    //console.log(this.state.user._id)
    return (
      <div className="edit-form-container">
        <div className="edit-form">
        <img src={EditImage} alt="" className="edit-image"/>
          <form onSubmit={this.submitFormHandler}>
            <div>
              <input
              type="text"
              name="name"
              onChange={this.formChangeHandler}
              placeholder="Name"
              />
            </div>

            <div>
              <input
              type="email"
              name="email"
              onChange={this.formChangeHandler}
              placeholder="email"
              />
            </div>
            <button className="edit-button">update</button>
          </form>
          <div className="upload-container">
            <form encType="multipart/form-data" onSubmit={this.imageUploadHandler}>
              <input type="file" name="profilePic" className="choose-file"/>
              <button type="submit" className="upload-button">upload picture</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProfile;
