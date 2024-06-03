import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css'

function GalleryList({ galleryItems, youLoveArt, deleteArt }) {
  return (

    <div data-testid="galleryList" className="gallery-list">
      {galleryItems.map((item) => (
        <GalleryItem 
        key={item.id} 
        item={item} 
        deleteArt={() => deleteArt(item.id)}
        youLoveArt={() => youLoveArt(item.id)}
        />
      ))}
    </div>
  );
}

export default GalleryList;
