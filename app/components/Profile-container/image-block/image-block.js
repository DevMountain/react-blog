require('./image-block.css');
import React from 'react';

const PhotoGrid = ({cardData}) => {
  return (
    <div>
      {cardData.map((data) => {
        return (
          <div key={data.id}>
            <div>
              <img src={data.link} alt={data.name} />
            </div>
            <div>
              <p>{data.desc}</p>
            </div>
          </div>
        )
      })}
    </div>
  );
};

PhotoGrid.propTypes = {
  cardData: React.PropTypes.array.isRequired
};

export default PhotoGrid
