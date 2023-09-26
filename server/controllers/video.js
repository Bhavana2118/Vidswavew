import videos from "../models/Videos.js";

export const createVideo = async (req, res, next) => {
  const { title, post ,imgUrl, videoUrl, } = req.body;

  if (!imgUrl || !videoUrl) {
    res.status(400);
    return next(new Error("imgUrl & videoUrl fields are required"));
  }


  try {
    const video = await videos.create({
      title, 
      post,
      videoUrl,
      imgUrl
      
    });

    res.status(201).json({
      success: true,
      video
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    next(error);
  }
}