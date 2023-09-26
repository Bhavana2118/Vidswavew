import '../../src/css/header.css';
import { Link } from "react-router-dom";

const Tittle = () => {
  return (
<div class="atf_40">
  <div class="responsive-container-block big-cont">
    <div class="responsive-container-block blue">
    </div>
    <div class="responsive-container-block bg">
      <p class="text-blk title">
        VIDSWAVE
      </p>
      <p class="text-blk heading">
        A Colorful World of Videos – Share, Discover, and Explore.
      </p>
       
          <Link class="text-blk buttn" to="secureuploads">Upload Videos</Link>
        
    </div>
  </div>
</div>
  )
}

export default Tittle