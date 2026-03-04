import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    useEffect(() => {
        if (window.AOS) {
            window.AOS.init({
                duration: 2000,
                once: true
            });
            window.AOS.refresh();
        }
    }, []);

    return (
        <>
            <section className="about s2">
                <div className="shape"></div>
                <div className="shape right"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-text center pd-0">
                                <h6 className="sub-heading"><span>About Me</span></h6>
                                <h3 className="heading pd">Gowtham C R</h3>
                            </div>
                            <div className="about__main center" data-aos="fade-up" data-aos-duration="3000">
                                <img src="/assets/images/about-us.png" alt="Gowtham C R" style={{ borderRadius: '100px' }} />
                                <p className="mb-17">
                                    I’m a Software Developer and Designer driven by curiosity, discipline, and the passion to build
                                    real-time, impactful digital products. Born and raised in Hassan, my middle-class roots shaped
                                    my mindset — value time, stay consistent, and never stop learning.
                                </p>
                                <p className="mb-30">
                                    Standing 5.11 with a strong mindset, I believe clarity of thought beats shortcuts. I enjoy
                                    turning complex problems into clean, scalable software and intuitive UI designs. Beyond tech,
                                    I express creativity through detailed drawings and sketches. I’m a chess player who loves
                                    strategy, a sports enthusiast who enjoys badminton and cricket, and someone who believes
                                    mental stability, focus, and discipline are the real superpowers in life. I don’t just build
                                    software — I build experiences with purpose.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about">
                <div className="shape"></div>
                <div className="container">
                    <div className="row rev">
                        <div className="col-xl-6 col-md-12">
                            <div className="about__right">
                                <div className="images">
                                    <img className="img1" src="/assets/images/about-img/potfolio-about2.png" alt="" />
                                    <img className="img2" src="/assets/images/about-img/potfolio-about4.png" alt="" />
                                    <img className="img3" src="/assets/images/about-img/potfolio-about3.png" alt="" />
                                    <img className="img4" src="/assets/images/about-img/potfolio-about1.png" alt="" />
                                    <img className="img5" src="/assets/images/about-img/potfolio-about5.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="block-text">
                                <h6 className="sub-heading"><span>Who I Am</span></h6>
                                <h3 className="heading wow" data-splitting>
                                    Building Software with Logic, Design & Purpose
                                </h3>
                                <p className="mb-17 text-justify">
                                    I’m a developer who believes great software is not just written — it’s thoughtfully crafted.
                                    From backend logic to frontend experience, I focus on performance, usability, and real-world
                                    impact.
                                </p>
                                <p className="mb-26 text-justify">
                                    My journey started with curiosity and self-belief. Growing up in Hassan taught me resilience,
                                    patience, and respect for time. Whether it’s coding, designing, sketching, or playing chess,
                                    I approach everything with strategy and focus. I’m constantly evolving, learning new
                                    technologies, and pushing my limits to build products that matter in the real world.
                                </p>
                                <Link to="/about" className="action-btn"><span>Explore My Journey</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project s2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-text center">
                                <h6 className="sub-heading"><span>Creative Works</span></h6>
                                <h3 className="heading">My Gallery</h3>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="project-box">
                                <div className="image">
                                    <a href="https://www.figma.com/proto/PyEvpp5hQDYinu755vZYP6/Foody?page-id=0%3A1&node-id=1-2&t=ohG5DE43UJjUET1Y-1" target="_blank" rel="noreferrer">
                                        <img src="/assets/images/work/Works1.png" alt="" />
                                    </a>
                                </div>
                                <div className="content">
                                    <a href="https://www.figma.com/proto/PyEvpp5hQDYinu755vZYP6/Foody?page-id=0%3A1&node-id=1-2&t=ohG5DE43UJjUET1Y-1" target="_blank" rel="noreferrer" className="h5 title">Digital Illustrations</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="project-box">
                                <div className="image">
                                    <a href="https://www.figma.com/proto/vJzzhIc1z5xrmjfpDd8nZf/plant?page-id=0%3A1&node-id=1-2&t=iOo3yG9UUiKVFS0N-1" target="_blank" rel="noreferrer">
                                        <img src="/assets/images/work/Works2.png" alt="" />
                                    </a>
                                </div>
                                <div className="content">
                                    <a href="https://www.figma.com/proto/vJzzhIc1z5xrmjfpDd8nZf/plant?page-id=0%3A1&node-id=1-2&t=iOo3yG9UUiKVFS0N-1" target="_blank" rel="noreferrer" className="h5 title">Creative UI Concepts</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="project-box">
                                <div className="image">
                                    <Link to="/skill"><img src="/assets/images/work/Works3.jpg" alt="" /></Link>
                                </div>
                                <div className="content">
                                    <Link to="/skill" className="h5 title">Sketch & Art Studies</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="project-box">
                                <div className="image">
                                    <a href="https://www.figma.com/proto/EVJQOKmejO0ASgSiIPJmNB/Boxchampy?page-id=0%3A1&node-id=2-6&t=haZziaKmbhRJdor7-1" target="_blank" rel="noreferrer">
                                        <img src="/assets/images/work/work4.png" alt="" />
                                    </a>
                                </div>
                                <div className="content">
                                    <a href="https://www.figma.com/proto/EVJQOKmejO0ASgSiIPJmNB/Boxchampy?page-id=0%3A1&node-id=2-6&t=haZziaKmbhRJdor7-1" target="_blank" rel="noreferrer" className="h5 title">Design Experiments</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonials">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="testimonials__main">
                                <div className="block-text center">
                                    <h6 className="sub-heading"><span>Mindset</span></h6>
                                    <h3 className="heading wow" data-splitting>
                                        What Defines Me
                                    </h3>
                                </div>

                                <div className="swiper testimonials-swiper">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="box-testimonial center">
                                                <p className="text">
                                                    “Discipline, time management, and mental strength are my foundation.
                                                    I believe consistency beats talent when talent stops working.”
                                                </p>
                                                <div className="info">
                                                    <h5 className="name">Strong Mindset</h5>
                                                    <p>Core Value</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="swiper-slide">
                                            <div className="box-testimonial center">
                                                <p className="text">
                                                    “I don’t chase shortcuts. I focus on learning, building, and improving
                                                    every single day.”
                                                </p>
                                                <div className="info">
                                                    <h5 className="name">Growth Driven</h5>
                                                    <p>Daily Habit</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="swiper-slide">
                                            <div className="box-testimonial center">
                                                <p className="text">
                                                    “Whether it’s software, design, or life — strategy, patience, and
                                                    clarity always win.”
                                                </p>
                                                <div className="info">
                                                    <h5 className="name">Strategic Thinker</h5>
                                                    <p>Chess Player Mindset</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section from about.html footer */}
            <section className="footer-cta" style={{ padding: '60px 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer__main" style={{ padding: '0', background: 'transparent' }}>
                                <div className="block-text center">
                                    <h3 className="heading">Let’s Build Something Real</h3>
                                    <p style={{ maxWidth: '700px', margin: '0 auto 30px' }}>
                                        Got an idea, a project, or just vibing with my work?
                                        Drop a message, connect with me, or buy me a coffee ☕ — let’s talk.
                                    </p>
                                </div>
                                <div className="center">
                                    <Link to="/contact" className="action-btn"><span>Say Hello</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
