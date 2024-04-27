// HomePage.js
import React from 'react';
import Example from '../images/Example.png';
import Example_Result from '../images/Example_result.png';

const Home = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Welcome to VineNet Detector!</h1>
      <p>We are here to help you identify any missed bunch of grapes in your VineYard. How you ask? Quite simple. Just follow the steps given below.</p>
      <ol>
        <li>
            Take a high-definition Image of the area you want us to search for the grape vines.
        </li>
        <li>
            Upload the image through into the website.
        </li>
        <li>
            Just wait for the results!!!
        </li>
        </ol>
        <p>What we do is take the image and pass it through a UNet Modle which segments the portion in the image where grapes are visible. You can use this by cross refering the output with the original image to find any grapes that you might have missed.</p>
        <p>Didn't understand? No worries. Let's demonstrate this with some pictoral examples.</p>
        <div class="container"><div class="d-flex flex-row mb-6">
        <div className="card" style={{ width: '18rem' }}>
      <img src={Example} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">An Example image.</p>
      </div>
    </div>
    <div className="card" style={{ width: '18rem' }}>
      <img src={Example_Result} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">The output which has segmented all the grapes that are visible in the image.</p>
      </div>
    </div></div>
        </div>
    </div>
  );
};

export default Home;
