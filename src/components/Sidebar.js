import React from "react";
import {
  FaTwitter,
  FaHome,
  FaHashtag,
  FaRegBell,
  FaRegEnvelope,
  FaRegBookmark,
  FaClipboardList,
  FaUserAlt,
  FaMehBlank,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <Link to="/twitterClone">
          <li>
            <a href="#">
              <FaTwitter className="icons logo" />
            </a>
          </li>
        </Link>
        <Link to="/twitterClone">
          <li>
            <a href="">
              <FaHome className="icons logo" />
              Home
            </a>
          </li>
        </Link>
        <Link to="/twitterClone">
          <li>
            <a href="">
              <FaHashtag className="icons" /> Explore
            </a>
          </li>
        </Link>
        <Link to="/twitterClone">
          <li>
            <a href="">
              <FaRegBell className="icons" /> Notifications
            </a>
          </li>
        </Link>
        <Link to="/twitterClone">
          <li>
            <a href="">
              <FaRegEnvelope className="icons" /> Messages
            </a>
          </li>
        </Link>
        <Link to="/twitterClone">
          <li>
            <a href="">
              <FaRegBookmark className="icons" /> Bookmarks
            </a>
          </li>
        </Link>
        <Link to="/twitterClone">
          <li>
            <a href="">
              <FaClipboardList className="icons" /> Lists
            </a>
          </li>
        </Link>
        <Link to="/twitterClone">
          <li>
            <a href="">
              <FaUserAlt className="icons" /> Profile
            </a>
          </li>
        </Link>
        <Link to="/twitterClone">
          <li>
            <a href="">
              <FaMehBlank className="icons" /> More
            </a>
          </li>
        </Link>
        <Link to="/twitterClone">
          <div className="sidebar__Btn">
            <a href="">Profile</a>
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
