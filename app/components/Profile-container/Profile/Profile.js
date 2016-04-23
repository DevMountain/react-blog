require('./Profile.css');
import React from 'react';

const Profile =({user}) => {
  return (
    <div>
      <div>
        <img src={user.image} alt={user.username} />
      </div>
      <div>
        <h1>{user.username}</h1>
        <p>{user.intro}</p>
        <div>
          <h1>{user.likeCount}</h1>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  user: React.PropTypes.object.isRequired
};

export default Profile
