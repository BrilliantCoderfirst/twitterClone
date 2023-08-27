import React from "react";
import {
  FaRegCheckCircle,
  FaComment,
  FaRegChartBar,
  FaHeart,
  FaLeaf,
} from "react-icons/fa";
import ProfilePhoto from '../images/profileImage.jpg';
import PostImage from '../images/post.webp';
const Posts = () => {
  return (
    <div className="postss">
      <div className="postss__first">
        <div className="posts__first__img">
          <img src={ProfilePhoto} alt="profile img" />
        </div>
        <div className="posts__first__name">
          <strong>Albert Joy</strong> <FaRegCheckCircle className="verify" />
        </div>
        <div className="posts__first__username">
          @albertjoy001 <span>12m</span>
        </div>
      </div>
      <div className="postss__details">
        <div className="postss__details__msg">
          India's Chandrayaan-3 has landed near the Moon's south pole. The
          successful Moon mission has made India the fourth country to achieve a
          soft landing on the lunar surface after the US, China, and the
          erstwhile Soviet Union, and the first to land a craft near the Moon's
          south pole. <br /> The lander Vikram captured several images of the
          lunar surface during the power descent. The images show a portion of
          the landing site, the lander's metal leg and its shadow. The rover
          Pragyan rolled out from the lander some hours after the successful
          touchdown. India became the first nation to land a craft near the
          Moon's South Pole, a historic triumph for the nation and the world.
          The unmanned Chandrayaan-3 touched down at 6:04 pm as mission control
          technicians cheered wildly and embraced their colleagues.
        </div>
        <div className="postss__details__img">
          <img src={PostImage} alt="post" />
        </div>
        <div className="reactions">
          <span>
            <FaComment className="re" /> 450
          </span>
          <span>
            <FaRegChartBar className="re" /> 563
          </span>
          <span>
            <FaHeart className="re" /> 94500
          </span>
          <span>
            <FaLeaf className="re" /> 5940
          </span>
        </div>
      </div>
    </div>
  );
};

export default Posts;
