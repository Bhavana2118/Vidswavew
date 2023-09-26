import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    title:{
      type: String,
      required: true,
    },
    post:{
      type:String,
      required:true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("videos", videoSchema);