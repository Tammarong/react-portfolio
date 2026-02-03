import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../assets/styles/Main.scss';
import profile from '../assets/images/images1.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profile} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Tammarong" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.instagram.com/k___3np/" target="_blank" rel="noreferrer"><InstagramIcon/></a>
          </div>
          <h1>Tammarong Ken</h1>
          <p>Junoir Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Tammarong" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="" target="_blank" rel="noreferrer"><InstagramIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;