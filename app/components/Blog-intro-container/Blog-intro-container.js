require('./Blog-intro-container.css');
import React from 'react';
import {usersBlogData} from '../../utils/helpers';
import BlogImage from '../Blog-intro-container/Blog-image/Blog-image';
import BlogMeta from '../Blog-intro-container/Blog-meta/Blog-meta';

class BlogIntroContainer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      usersBlogData: []
    }
  }


  componentDidMount() {
    this.init()
  }

  init() {
    usersBlogData().then(function(data) {
      this.setState({
        usersBlogData: data.data
      })
    }.bind(this));
  }

  render() {
    return (
      <div>
        {this.state.usersBlogData.map((data) => {
          return (
            <div key={data.id}>
              <BlogMeta metaInfo={data} />
              <BlogImage blogInfo={data} />
            </div>
          )
        })}
      </div>
    )
  }

}

export default BlogIntroContainer
