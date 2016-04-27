require('./Profile.css');
import React from 'react';

const Profile =({user, like, count, likeBlog, unlikeBlog}) => {
  return (
    <div className='profile-container'>
      <div className='profile-image-container'>
        <img src={user.image} alt={user.username} className='profile-image-container img' />
      </div>
      <div>
        <h1>{user.username}</h1>
        <p>{user.intro}</p>
        <div className='like-count-container'>
          <div className={`heart-icon liked-${like}`}></div>
          <h1>{user.likeCount}</h1>
          <h3>Like: {like}</h3>
          <h3>Count: {count}</h3>
          <button onClick={()=>likeBlog()}> LIKE </button>
          <button onClick={()=>unlikeBlog()}> UNLIKE </button>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  user: React.PropTypes.object.isRequired
};

export default Profile
