require('./Blog-meta.css');
import React from 'react';

const BlogMeta = ({metaInfo}) => {
  return (
    <div>
      <h2>{metaInfo.username}</h2>
    </div>
  )
};

BlogMeta.proptypes = {
  metaInfo: React.PropTypes.object.isRequired
};

export default BlogMeta
