require('./Blog-meta.css');
import React from 'react';

const BlogMeta = ({metaInfo}) => {
  return (
    <div className='blog-meta-container'>
      <div className='blog-meta-inner-container'>
        <h2 className='meta-title'>{metaInfo.username}</h2>
        <p className='blog-meta-text'>{metaInfo.intro}</p>
        <h2 className='blog-meta-like'>{metaInfo.likeCount} Likes</h2>
      </div>
    </div>
  )
};

BlogMeta.proptypes = {
  metaInfo: React.PropTypes.object.isRequired
};

export default BlogMeta
