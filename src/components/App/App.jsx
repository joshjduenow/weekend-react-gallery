import React from 'react';

function App() {
    return (
      <div>
        <header>
          <h1>React Gallery</h1>
        </header>

        <p>The gallery goes here!</p>
        <img src="images/goat_small.jpg"/>
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
