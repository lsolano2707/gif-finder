import React from 'react';
import ImageGridItem from './ImageGridItem';

function ImageGrid({ images }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mlgd:grid-cols-6 gap-2">
      {images?.map((el) => (
        <ImageGridItem key={el.id} id={el.id} title={el.url} url={el.url}/>
      ))}
    </div>
  );
}

export default ImageGrid;
