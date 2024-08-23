import React from 'react'
import { Container } from 'react-bootstrap'
import './topbar.css'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter, FaGoogle, FaPinterestP, FaAngleDown  } from "react-icons/fa";
import { PiLineVertical } from "react-icons/pi";

const TopBar: React.FC = () => {
  return (
    <div className="topbar">
      <Container fluid className="d-flex justify-content-between align-items-center">
        <div className="topbar-left">
          <span className='span1'>(000)999-898-999</span>
          <PiLineVertical className="vertical-line" />
          <span>info@trisog.com</span>
        </div>
        <div className="topbar-right">
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><FaGoogle /></a>
          <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer"><FaPinterestP /></a>
          <PiLineVertical className="vertical-line" />
          <span>EUR<FaAngleDown /></span>
        </div>
      </Container>
    </div>
  )
}

export default TopBar;
