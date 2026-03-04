import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Resume = () => {
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
            <section className="roadmap">
                <img src="/assets/images/background/line.png" alt="" className="img-line" />
                <div className="shape"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-text center">
                                <h6 className="sub-heading"><span>Resume</span></h6>
                                <h3 className="heading wow" data-splitting>The Journey of <br /> Education</h3>
                            </div>

                            <div className="roadmap__main" data-aos="fade-up" data-aos-duration="2000">
                                <div className="roadmap-box">
                                    <div className="time">2025 - present</div>
                                    <div className="content">
                                        <h5 className="title">Pixela Media Pvt. Ltd.</h5>
                                        <p className="text">Team Lead and Software Developer. Lead web application development with ASP.NET Core MVC and
                                            SQL Server. Design UI/UX with Figma and mentor teams for client projects.</p>
                                    </div>
                                </div>

                                <div className="roadmap-box right">
                                    <div className="time">2023 - 2024</div>
                                    <div className="content">
                                        <h5 className="title">Dendron IT Solutions Pvt. Ltd.</h5>
                                        <p className="text">Software Developer role focused on web application development and client project delivery, contributing to various software projects.</p>
                                    </div>
                                </div>
                                <div className="roadmap-box">
                                    <div className="time">2021 - 2023</div>
                                    <div className="content">
                                        <h5 className="title">Master of Computer Applications (MCA)</h5>
                                        <p className="text">Completed MCA from Bangalore Institute of Technology, located in Bangalore, Karnataka.</p>
                                    </div>
                                </div>
                                <div className="roadmap-box right">
                                    <div className="time">2018 - 2021</div>
                                    <div className="content">
                                        <h5 className="title">Bachelor of Science in Computer Science</h5>
                                        <p className="text">Completed B.Sc in Computer Science from Government Science College, located in Hassan, Karnataka.</p>
                                    </div>
                                </div>
                                <div className="roadmap-box">
                                    <div className="time">2017 - 2018</div>
                                    <div className="content">
                                        <h5 className="title">Pre-University Course - 2nd PUC</h5>
                                        <p className="text">Completed 12th standard from Hassan Public PU College, located in Hassan, Karnataka.</p>
                                    </div>
                                </div>
                                <div className="roadmap-box right">
                                    <div className="time">2016 - 2017</div>
                                    <div className="content">
                                        <h5 className="title">Pre-University Course - 1st PUC</h5>
                                        <p className="text">Completed 11th standard from Brilliant PU College, located in Hassan, Karnataka.</p>
                                    </div>
                                </div>
                                <div className="roadmap-box">
                                    <div className="time">2016</div>
                                    <div className="content">
                                        <h5 className="title">Secondary School Leaving Certificate (SSLC)</h5>
                                        <p className="text">Completed 10th standard from Elite School, located in Hassan, Karnataka.</p>
                                    </div>
                                </div>
                                <div className="icon"></div>
                                <div className="icon bottom"></div>
                            </div>
                            <div className="button">
                                <Link to="#" className="action-btn"><span>View Full detailed</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="portfolio">
                <div className="shape"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-text center">
                                <h6 className="sub-heading"><span>Professional Portfolio</span></h6>
                                <h3 className="heading wow" data-splitting>Explore My Professional <br /> Journey & Expertise</h3>
                            </div>
                        </div>
                        <div className="col-xl-12 col-md-12">
                            <div className="portfolio__left">
                                <iframe
                                    src="/assets/images/GowthamCRResume1.pdf"
                                    width="100%"
                                    height="650px"
                                    title="Gowtham's Professional Resume"
                                ></iframe>
                                <div className="portfolio-note">
                                    <p>View or download my detailed resume to explore my technical skills, project experience, and
                                        professional achievements in software development.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Resume;
