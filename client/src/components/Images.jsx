import {useEffect, useState} from 'react';
import axios from 'axios';
import Card from './Card';

const Images = () => {
  const [videos,setVideos] = useState([]);
  useEffect(() =>{
    const res = axios.get(`${process.env.REACT_APP_BACKEND_BASEURL}/api/getImages`)
    .then(videos => setVideos(videos.data))
    .catch(err => console.log(err))
   
  },[])
  return (
    <div className='cards-container'>
      {videos.map((video) => (
        <Card imageData = {video} key={video._id} />
      ))}
    </div>
  
  )
}
  


export default Images