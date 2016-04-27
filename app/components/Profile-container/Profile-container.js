require('./Profile-container.css');
import React from 'react';
import Profile from './Profile/Profile';
import PhotoGrid from './image-block/image-block';
import {getUserInfo, getPosts} from '../../utils/helpers';
import {connect} from 'react-redux';
import {likeBlog, unlikeBlog} from '../../Redux/Like.js';

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [],
      userInfo: {}
    }
  }

  componentDidMount(){
    getUserInfo(this.props.params.userid).then(function(data){
      this.setState({
        userInfo: data.data
      })
    }.bind(this));

    getPosts().then(function(data){
      this.setState({
        cardData: data.data
      })
    }.bind(this));

  }

  render() {
    return (
      <div className='main-profile-container'>
        <Profile user={this.state.userInfo} like={this.props.like} likeBlog={this.props.likeBlog} unlikeBlog={this.props.unlikeBlog}/>
        <PhotoGrid cardData={this.state.cardData} />
      </div>
    );
  }
}

export default ProfileContainer

function stateToProps(state) {
  return {
    like: state.like
  }
}

var connectedProfileContainer = connect(stateToProps, {likeBlog: likeBlog, unlikeBlog: unlikeBlog,})(ProfileContainer);

export default connectedProfileContainer
