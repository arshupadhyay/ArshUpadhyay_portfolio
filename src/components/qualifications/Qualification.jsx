import React from 'react';
import './qualification.css'

const Qualification = () => {
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className="qualification__button qualification__active button--flex">
                    <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
                    Education
                </div>

                
            </div>

            <div className="qualification__sections">
                <div className="qualification__content">
                    <div className="qualification__data">
                        <div>
                            <h3 className="quaalification__title">10th SSC</h3>
                            <span className="qualification__subtitle">SVEM School, Ankleshwar</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>2017-2018
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div> 

                    <div className="qualification__data">
                        <div></div>

                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                            
                        <div>
                            <h3 className="quaalification__title">12th HSC</h3>
                            <span className="qualification__subtitle">Advait VidhyaNiketan,Bharuch</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>2020-2021
                            </div>
                        </div>
                    </div> 

                    <div className="qualification__data">
                        <div>
                            <h3 className="quaalification__title">B.tech(Computer Science Engg)</h3>
                            <span className="qualification__subtitle">Charusat University, Nadiad, Gujarat, India</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>2021 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div> 

                </div> 
                <div className="qualification__data experience__data">
                    <div className="qualification__button button--flex">
                        <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
                        Experience
                    </div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                            
                        <div>
                            <h3 className="quaalification__title">Web Development Intern</h3>
                            <span className="qualification__subtitle">DevKruti Tech - PHP Developer</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>2023-2024
                            </div>
                        </div>
                </div>   


                
            </div> 
        </div>
    </section>
  );
}

export default Qualification;
 