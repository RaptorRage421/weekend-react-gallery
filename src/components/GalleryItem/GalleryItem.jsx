import React from "react"
import { useState } from "react";
import './GalleryItem.css'

const GalleryItem = ({item, youLoveArt}) => {
    const { url, title, description, likes } = item
   
    const [showDescription, setShowDescription] = useState(false);

    const toggleDescription = () => {
      setShowDescription(!showDescription);
    };

    return (
        <div className="gallery-item-container" data-testid="galleryItem">
          <div className="title">{title}</div>
          <div
            data-testid="toggle"
            className={`gallery-item ${showDescription ? "show-description" : ""}`}
            onClick={toggleDescription}
          >
            {showDescription ? <p>{description}</p> : <img src={url} alt={title} />}
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
