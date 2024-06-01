import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';


function App() {
const [galleryItems, setGalleryItems] = useState([])

useEffect(()=>{
  getGallery()
},[])

const getGallery = () => {
  axios.get('/api/gallery')
  .then((response) => {
    setGalleryItems(response.data)
    console.log("Gallery Items", response.data)
  })
  .catch((err) => {
    console.error("Error getting list of gallery Items", err)
  })
}



const youLoveArt = (id) => {
  console.log("ID", id)
    axios.put(`/api/gallery/${id}`)
    .then(()=> {
      getGallery()
    })
    .catch((err) => {
      console.error("Error loving the Art!", err)
    })
}


    return (
      <div data-testid="app">
        <header>
          <h1>React Gallery</h1>
        </header>

        <p>The gallery goes here!</p>
        <GalleryList 
        galleryItems={galleryItems}
        youLoveArt={youLoveArt}
        />
        
      </div>
    );
}

export default App;
