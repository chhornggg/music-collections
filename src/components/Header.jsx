import React from "react";
import musicLogo from "../images/music-logo.png";

export default function Header() {
  return (
    <div className="logo">
      <img src={musicLogo} alt="music logo" />
      <h1>music collection</h1>
    </div>
  );
}
