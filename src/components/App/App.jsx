import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryItem from './GalleryItem';

function App() {
  useEffect(() => {
    fetchGallery()
  }, []) // 👈 the "stop sign"

  const [gallery, setGallery] = useState([])
 
  const fetchGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    })
      .then((response) => {
        setGallery(response.data)
      })
      .catch((error) => {
        console.log('fetchGallery fail:', error);
      })
  }
    return (
      <div data-testid="app">
        <header>
          <h1>Mac & Cheese Gallery</h1>
        </header>

        <p>The gallery goes here!</p>
        <img style = {{width: 150, height: 150}} src="images/bucket_mac.jpeg"/>
        <img style = {{width: 150, height: 150}} src="images/green_mac.jpeg"/>
        <img style = {{width: 150, height: 150}} src="images/sheet_pan_thick.jpeg"/>
        <img style = {{width: 150, height: 150}} src="images/sheet_pans_mac.jpeg"/>
        <img style = {{width: 150, height: 150}} src="images/shredded_cheese.jpeg"/>
        <img style = {{width: 150, height: 150}} src="images/singles_mac.jpeg"/>
      </div>
    );
}

export default App;
