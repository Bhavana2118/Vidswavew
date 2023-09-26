import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { ThreeDots } from 'react-loader-spinner'
import '../../src/css/upload.css';

const SecureUploads = () => {

  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [img, setImg] = useState(null);
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(false);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangePost = (e) => {
    setPost(e.target.value);
  };


  const navigate = useNavigate();

  const uploadFile = async (type) => {
    const data = new FormData();
    data.append("file", type === 'image' ? img : video);
    data.append("upload_preset", type === 'image' ? 'images_preset' : 'videos_preset');

    try {
      let cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
      let resourceType = type === 'image' ? 'image' : 'video';
      let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

      const res = await axios.post(api, data);
      const { secure_url } = res.data;
      return secure_url;
    } catch (error) {
      console.error(error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      // Upload image file
      const imgUrl = await uploadFile('image');


      // Upload video file
      const videoUrl = await uploadFile('video');

      const newPost = {
      title: title,
      post: post,
      imgUrl: imgUrl,
      videoUrl: videoUrl,
    };
    
      // Send backend api request
      await axios.post(`http://localhost:5000/api/videos/`, newPost)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
      console.log(newPost);

      // Reset states 
      setImg(null);
      setVideo(null);
      setTitle(null);
      setPost(null);

      console.log("File upload success!");
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <center>
      <form onSubmit={handleSubmit}>
        <div>
        <div className="form-group fullname">
        <label for="Title">Title:</label>
        <input onChange={onChangeTitle} type="text" name="title" id="fullname" placeholder="Enter your title "/>
      </div>
      <div className="form-group email">
        <label for="description">Description:</label>
        <textarea onChange={onChangePost} placeholder='Enter your Description' id="description" name="description" rows="4" cols="50"></textarea>
      
      </div>
          <label htmlFor="video">Video:</label>
          <input className="form-group"
            type="file"
            accept="video/*"
            id="video"
            onChange={(e) => setVideo((prev) => e.target.files[0])}
          />
        </div>
        <div>
          <label htmlFor="img">Image:</label>
          <input className="form-group"
            type="file"
            accept="image/*"
            id="img"
            onChange={(e) => setImg((prev) => e.target.files[0])}
          />
        </div>
        <button className='forrm-group button' type="submit">Upload</button>
      </form>

      {
        loading && <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      }
      </center>
    </div>


  )
}

export default SecureUploads