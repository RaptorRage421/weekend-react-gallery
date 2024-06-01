import React from "react"
import { useState } from "react";
import './GalleryItem.css'

const GalleryItem = ({item, youLoveArt, deleteArt}) => {
    const { url, title, description, likes } = item
   
    const [showDescription, setShowDescription] = useState(false);

    const toggleDescription = () => {
      setShowDescription(!showDescription);
    };

    return (
        <div className="gallery-item-container" data-testid="galleryItem">
          <div className="title">{title} <button className="delete-button" onClick={deleteArt}>X</button></div>
          <div
            data-testid="toggle"
            className={`gallery-item ${showDescription ? "show-description" : ""}`}
            onClick={toggleDescription}
          >
            {showDescription ? <div className="center" ><p>{description}</p></div> : <img src={url} alt={title} />}
          </div>
          <div className="like-container">
        <button className="like-button" data-testid="like" onClick={youLoveArt}>
          Love this Art! 💙
        </button>
        </div>
        <div className="like-counter">
        <div>{likes} People love this!</div>
      </div>
        </div>
      );
    };
    

export default GalleryItem
