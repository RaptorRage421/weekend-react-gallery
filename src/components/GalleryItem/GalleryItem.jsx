import React from "react"
import { useState } from "react";

const GalleryItem = ({item, youLoveArt}) => {
    const { url, title, description, likes } = item
   
    const [showDescription, setShowDescription] = useState(false);

    const toggleDescription = () => {
      setShowDescription(!showDescription);
    };

    return (

        <div>
            <div>
                Title: {title}
            </div>
            <div className="gallery-item" onClick={toggleDescription}>
      {showDescription ? (
        <p>{item.description}</p>
      ) : (
        <img src={url} alt={title} />
      )}
    </div>
            <div>
                <button onClick={youLoveArt}>Love this Art! 💙</button>
            </div>
            <div>
                {likes} People love this!
            </div>
        </div>

    )

}

export default GalleryItem
