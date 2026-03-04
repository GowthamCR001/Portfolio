import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Home = () => {
    // Create reference to store the DOM element for the animation
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Gowtham C R", "Designer", "Software Developer", "Freelancer"],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true,
            backDelay: 2000,
            startDelay: 1000,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (
        <section className="banner">
            <div className="shape right"></div>
            <div className="container big">
                <div className="row">
                    <div className="col-xl-7 col-md-7 col-sm-12">
                        <div className="banner__left">
                            <div className="block-text">
                                <h3 className="heading">Hi, I'm <span ref={el} className="s1"></span>
                                </h3>
                                <p className="desc">A passionate .NET and Front-end Developer specializing in creating intuitive, responsive user interfaces and robust backend solutions.</p>
                                <a href="/contact" className="action-btn"><span>Get Connected</span></a>
                            </div>

                            <div className="pay">
                                <h6>.NET Developer | Front-end-Developer | UI Specialist </h6>
                                <div className="list">
                                    <p>Connect:</p>
                                    <ul>
                                        <li><a href="https://www.facebook.com/share/1DpeeEsj2D/" target="_blank" rel="noopener noreferrer"><span><img src="/assets/images/facebook.png" alt="Facebook" style={{ height: '25px' }} /></span></a></li>
                                        <li><a href="https://github.com/GowthamCR001" target="_blank" rel="noopener noreferrer"><span><img src="/assets/images/github.png" alt="Github" style={{ height: '25px' }} /></span></a></li>
                                        <li><a href="https://www.linkedin.com/in/gowtham-c-r-52934124a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><span><img src="/assets/images/linkedin.png" alt="LinkedIn" style={{ height: '25px' }} /></span></a></li>
                                        <li><a href="https://www.instagram.com/____iamgowtham____" target="_blank" rel="noopener noreferrer"><span><img src="/assets/images/instagram.png" alt="Instagram" style={{ height: '25px' }} /></span></a></li>
                                        <li><a href="https://wa.me/917483160450" target="_blank" rel="noopener noreferrer"><span><img src="/assets/images/whatsapp.png" alt="WhatsApp" style={{ height: '25px' }} /></span></a></li>
                                        <li><a href="mailto:gcr.gowthamcr001@gmail.com"><span><img src="/assets/images/mail.png" alt="Mail" style={{ height: '25px' }} /></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-md-5 col-sm-12">
                        <div className="banner__right">
                            <div className="image">
                                <img src="/assets/images/layouts/profile-img1.png" alt="" />
                            </div>

                            <div className="price">
                                <div className="icon">
                                    <img src="/assets/images/icon/top-icon.gif" alt="" style={{ height: '70px', width: '100%', borderRadius: '40px' }} />
                                </div>
                                <div className="content">
                                    <p>#Designer</p>
                                    <h5>Design Strategist</h5>
                                </div>
                            </div>

                            <div className="owner">
                                <div className="image">
                                    <img src="/assets/images/icon/bottom-icon.gif" alt="" />
                                </div>
                                <div className="content">
                                    <h5>Digital Builder</h5>
                                    <p>@Coding</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
