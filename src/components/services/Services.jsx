import React, {useState} from 'react';
import './services.css';


const Services = () => {
    const [toggleState,setToggleIndex] = useState(0);

    const toggleTab = (index) =>{
        setToggleIndex(index);
    }
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">What I've built?</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Js <br/> Games</h3>
                </div>

                <span className="services__button" onClick={()=> toggleTab(1)}>View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className= {toggleState ===1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=> toggleTab(0)}></i>

                        <h3 className="services__modal-title">Miniature JS games</h3>
                        <p className="services__modal-description">Games(Web App) made using javascript.</p>
                        <ul className="servoces__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Snakes <br/>Game </p>

                            </li>


                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Tic-Tac-Toe</p>
                                
                            </li>


                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Wheel of fortune</p>
                                
                            </li>


                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Number Guessing game, etc...</p>
                                
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Web <br/> Development</h3>
                </div>

                <span className="services__button" onClick={()=> toggleTab(2)}>View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className= {toggleState ===2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=> toggleTab(0)}></i>

                        <h3 className="services__modal-title">Web Development</h3>
                        <p className="services__modal-description">Projects related to website creation and maintanence.</p>
                        <ul className="servoces__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"><a href='https://github.com/arshupadhyay'>Algorithm Visualizer: Tech Stack- Reactjs <i class="uil uil-github"></i></a></p>

                            </li>


                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"><a href='https://github.com/arshupadhyay/Crud'>Crud Operations: Tech Stack- PHP <i class="uil uil-github"></i></a></p>
                                
                            </li>


                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"><a href='https://github.com/arshupadhyay/iNote.io'>Note.io -Note taking app: <p>Tech Stack:MERN ThunderClient JWT for Authentication<i class="uil uil-github"></i></p></a></p>
                                
                            </li>


                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"><a href='https://github.com/arshupadhyay/blogExpress'>Blog_express- Blog website template <p>Tech Stack:MERN ThunderClient<i class="uil uil-github"></i></p></a></p>
                                
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">AI/ML<br/> Projects</h3>
                </div>

                <span className="services__button" onClick={()=> toggleTab(3)}>View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className= {toggleState ===3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=> toggleTab(0)}></i>

                        <h3 className="services__modal-title">AI/ML Projects</h3>
                        <p className="services__modal-description">Projects and Certifications based on the Data and training models.</p>
                        <ul className="servoces__modal-services grid">

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"><a href='https://github.com/arshupadhyay/Traffic-Sign-Detection-using-CNN-and-Transfer-Learning-Models'>Indian Traffic Sign Recognition System : <i class="uil uil-github"></i></a></p>

                            </li>
                                <p style={{fontSize: '15px'}}>It uses transfer Learning and CNN models to train the data of 5,000 images related to indian traffic signs.</p>
                                <p>-Total of 85 classes of images related to Traffic Signs.</p>
                                <p>-89% of training accuracy</p>
                                <p>-Published a research paper on it in the Intl. Springer Conference, Banglore.</p>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Data Analyst Certification by (TeachNook)IIT Bhuvneshwar</p>

                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
}

export default Services;
