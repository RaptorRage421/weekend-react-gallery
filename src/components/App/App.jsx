import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';


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

const addUpload = (newUpload) => {
  axios.post('/api/gallery', newUpload)
  .then(() => {
    getGallery()
  })
  .catch((err) => {
    console.error("Error adding new upload", err)
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

const deleteArt = (id) => {
  axios.delete(`/api/gallery/${id}`)
  .then((response) => {
    getGallery()
  })
  .catch((err) => {
    console.error("ERROR deleting the ART", err)
  })
}


    return (
      <div data-testid="app">
        <header>
          <h1>React Gallery</h1>
        </header>
        <GalleryForm addUpload={addUpload} />
        <p>The gallery goes here!</p>
        <GalleryList 
        deleteArt={deleteArt}
        galleryItems={galleryItems}
        youLoveArt={youLoveArt}
        />
        
      </div>
    );
}

export default App;
