import React from "react"
import { useState } from "react"

const GalleryForm = ({addUpload}) => {


const [itemTitle, setItemTitle] = useState('')
const [itemDescription, setItemDescription] = useState('')
const [itemUrl, setItemUrl] = useState('')


const addPicture = (event) => {
event.preventDefault();

addUpload({url: itemUrl, title: itemTitle, description: itemDescription})

    setItemTitle('')
    setItemDescription('')
    setItemUrl('')

}

return (
<section>
      <form onSubmit={addPicture}>
        <div>
        <label htmlFor="title-input">Title:</label>
        <input
          id="title-input"
          value={itemTitle}
          onChange={(e) => setItemTitle(e.target.value)}
        />
        </div>
        <div>
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          value={itemDescription}
          onChange={(e) => setItemDescription(e.target.value)}
        />
        </div>
        <div>
        <label htmlFor="url">Url:</label>
        <input
          id="url"
          value={itemUrl}
          onChange={(e) => setItemUrl(e.target.value)}
        />
        </div>

        <button type="submit">Add Item</button>
      </form>
    </section>

)



}

export default GalleryForm