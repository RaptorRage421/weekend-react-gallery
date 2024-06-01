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

        <div data-testid="galleryItem">
            <div>
                Title: {title}
            </div>
            <div data-testid="toggle" className="gallery-item" onClick={toggleDescription}>
      {showDescription ? (
        <p>{description}</p>
      ) : (
        <img src={url} alt={title} />
      )}
    </div>
            <div>
                <button data-testid="like" onClick={youLoveArt}>Love this Art! 💙</button>
            </div>
            <div>
                {likes} People love this!
            </div>
        </div>

    )

}

export default GalleryItem
