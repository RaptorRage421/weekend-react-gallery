import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ galleryItems, youLoveArt }) {
  return (
    <div data-testid="galleryList" className="gallery-list">
      {galleryItems.map((item) => (
        <GalleryItem 
        key={item.id} 
        item={item} 
        youLoveArt={() => youLoveArt(item.id)}
        />
      ))}
    </div>
  );
}

export default GalleryList;
