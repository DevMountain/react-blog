require('./image-block.css');
import React from 'react';

const PhotoGrid = ({cardData}) => {
  return (
    <div className='list-container'>
      <div className='grid-list'>
        {cardData.map((data) => {
          return (
            <div key={data.id} className='list-group-item'>
              <div className='blog-image-container'>
                <img src={data.link} alt={data.name} />
              </div>
              <div className='desc'>
                <p>{data.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

PhotoGrid.propTypes = {
  cardData: React.PropTypes.array.isRequired
};

export default PhotoGrid
