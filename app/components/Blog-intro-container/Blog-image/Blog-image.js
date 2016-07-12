require('./Blog-image.css');
import React from 'react';
import BlogLink from './Blog-link/Blog-link';

const BlogImage = ({blogInfo}) => {
  return (
    <div className='image-container'>
      <img src={blogInfo.image} alt="" className='blog-intro-img' />
      <BlogLink blogInfo={blogInfo} />
    </div>
  );
};

BlogImage.propTypes = {
  blogInfo: React.PropTypes.object.isRequired
};

export default BlogImage
