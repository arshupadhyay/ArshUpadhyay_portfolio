import React from 'react';
import './scrollup.css';

const ScrollUp = () => {
   window.addEventListener("scroll", function() {
    const scrollUp = document.getElementsByClassName("scrollup")[0];
    if (this.scrollY >= 350) {
      scrollUp.classList.add("show-scroll");
    } else {
      scrollUp.classList.remove("show-scroll");
    }
   });
   
  return (
    <a href="#" className="scrollup">
        <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
}

export default ScrollUp;
