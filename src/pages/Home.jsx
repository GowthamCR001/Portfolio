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

            {/* Added Services Section for Razorpay Compliance */}
            <div className="container mt-5 pt-5" id="business-services">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <div className="block-text">
                            <h6 className="sub-heading"><span>Business Offerings</span></h6>
                            <h3 className="heading">Professional Services</h3>
                            <p className="desc mb-5">I provide end-to-end digital solutions for businesses and individuals. From UI/UX design to full-stack development, I help bring your vision to life with precision and quality.</p>
                        </div>
                    </div>
                </div>
                <div className="row g-4">
                    {[
                        { title: 'Web Development', desc: 'Custom React, .NET, and Full-stack web applications tailored to your business needs.', icon: '🌐' },
                        { title: 'UI/UX Design', desc: 'Modern, intuitive design systems and prototypes using Figma and Adobe XD.', icon: '🎨' },
                        { title: 'API Integration', desc: 'Connecting your applications with third-party services and robust backend systems.', icon: '🔌' },
                        { title: 'Technical Consulting', desc: 'Architecture reviews, performance optimization, and technology stack guidance.', icon: '💡' }
                    ].map((service, index) => (
                        <div className="col-md-6 col-lg-3" key={index}>
                            <div className="service-item p-4 text-center" style={{ 
                                background: 'rgba(255,255,255,0.03)', 
                                borderRadius: '20px', 
                                border: '1px solid rgba(255,255,255,0.05)',
                                height: '100%'
                            }}>
                                <div style={{ fontSize: '40px', marginBottom: '20px' }}>{service.icon}</div>
                                <h5 style={{ color: 'white', marginBottom: '15px' }}>{service.title}</h5>
                                <p style={{ fontSize: '14px', opacity: 0.7 }}>{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-5">
                    <a href="/services" className="action-btn"><span>View Service Pricing & Hire</span></a>
                </div>
            </div>
        </section>
    );
};

export default Home;
