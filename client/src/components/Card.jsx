import React from 'react'
import { useState } from 'react';
import "../../src/css/Card.css";
import ReactPlayer from "react-player";


const Card = ({imageData }) => {
const [isVideoPlaying, setVideoPlaying] = useState(false);

const toggleVideo = () => {
    setVideoPlaying(!isVideoPlaying);
    console.log(imageData .videoUrl);
  };

  return (       
<div className="video-container">
    <div className="App">
      <div className="video-container">
        {isVideoPlaying ? (
          <ReactPlayer className='videoplayer'
            url= {imageData .videoUrl} height="500px" width="750px"
            controls ={true}
            autoPlay
            onClick={toggleVideo}
          ></ReactPlayer>
        ) : (
          <div className='card' >
           <div className="card__image" key={imageData._id}>
            <img src={imageData.imgUrl} onClick={toggleVideo} alt="" />
           </div>
           <div className="card__title">
            <p>{imageData.title}</p>
          </div>
         </div>
        )}
      </div>
    </div>
    </div>
  );
}



export default Card