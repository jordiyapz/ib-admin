import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from '@mui/icons-material';
import { Link } from 'react-router-dom'


export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/"><span className="logo">ReactAdmin</span></Link>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_960_720.png" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
