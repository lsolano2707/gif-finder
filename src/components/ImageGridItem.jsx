import React from 'react';

function ImageGridItem({id, title, url}) {
  return <img className="h-52 w-full rounded" src={url} alt={title} />;
}

export default ImageGridItem;
