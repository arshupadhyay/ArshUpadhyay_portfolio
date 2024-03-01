import React from 'react';
import './footer.css';

const Footer = () => {
  return (
   <footer className="footer">
    <div className="footer__container container">
        <h1 className="footer__title">Arsh</h1>

        <ul className="footer__list">
            <li>
                <a href="#about" className="footer__link">About</a>
            </li>

            <li>
                <a href="#qualification" className="footer__link">Qualifications</a>
            </li>

            <li>
                <a href="#skills" className="footer__link">Skills</a>
            </li>
        </ul>

        <div className="footer__social">
        <a href="https://www.instagram.com/_arsh_1441?igsh=MWpqcTVybzZwdmFjeA%3D%3D&utm_source=qr" className="footer__social-link" target='_blank'>
            <i class="bx bxl-instagram"></i>
        </a>

        <a href="https://www.linkedin.com/in/arsh-upadhyay-701225247/" className="footer__social-link" target='_blank'>
            <i class="bx bxl-linkedin"></i>
        </a>

        <a href="#" className="footer__social-link" target='_blank'>
            <i class="bx bxl-facebook"></i>
        </a>
        </div>

        <span className="footer__copy">
            &#169; ArshUpadhyay. All rights reserved.
        </span>
    </div>
   </footer>
  );
}

export default Footer;
