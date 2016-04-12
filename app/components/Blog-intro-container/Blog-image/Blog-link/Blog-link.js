import React from 'react';
import { Link } from 'react-router';
require('./Blog-link.css');

const BlogLink = ({blogInfo}) => {
    return (
        <div className="blog-link-container">
            <Link className="blog-a-tag" to={`/profile/${blogInfo.id}`}>view profile</Link>
        </div>
    );
};

BlogLink.propTypes = {
    blogInfo: React.PropTypes.object.isRequired
};

export default BlogLink
