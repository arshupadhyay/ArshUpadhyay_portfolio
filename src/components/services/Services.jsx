import React, {useState} from 'react';
import './services.css';


const Services = () => {
    const [toggleState,setToggleIndex] = useState(0);

    const toggleTab = (index) =>{
        setToggleIndex(index);
    }
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I offer?</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Product <br/> Designer</h3>
                </div>

                <span className="services__button" onClick={()=> toggleTab(1)}>View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className= {toggleState ===1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=> toggleTab(0)}></i>

                        <h3 className="services__modal-title">Product Designer</h3>
                        <p className="services__modal-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aperiam repudiandae et! Odio consequuntur magni culpa sequi quidem, provident esse.</p>
                        <ul className="servoces__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Product <br/> Designer</p>

                            </li>


                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Web page development</p>
                                
                            </li>


                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I create ux element interactions</p>
                                
                            </li>


                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I can build admin panels for your company.</p>
                                
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Ui/Ux <br/> Designer</h3>
                </div>

                <span className="services__button" onClick={()=> toggleTab(2)}>View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className= {toggleState ===2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=> toggleTab(0)}></i>

                        <h3 className="services__modal-title">Ui/Ux Designer</h3>
                        <p className="services__modal-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aperiam repudiandae et! Odio consequuntur magni culpa sequi quidem, provident esse.</p>
                        <ul className="servoces__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I develop user interfaces</p>

                            </li>


                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Web page development</p>
                                
                            </li>


                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I create ux element interactions</p>
                                
                            </li>


                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I can build admin panels for your company.</p>
                                
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Visual <br/> Designer</h3>
                </div>

                <span className="services__button" onClick={()=> toggleTab(3)}>View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className= {toggleState ===3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=> toggleTab(0)}></i>

                        <h3 className="services__modal-title">Visual Designer</h3>
                        <p className="services__modal-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aperiam repudiandae et! Odio consequuntur magni culpa sequi quidem, provident esse.</p>
                        <ul className="servoces__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I develop user interfaces</p>

                            </li>


                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Web page development</p>
                                
                            </li>


                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I create ux element interactions</p>
                                
                            </li>


                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I can build admin panels for your company.</p>
                                
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
