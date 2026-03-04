import React, { useEffect } from 'react';

const Skill = () => {
    useEffect(() => {
        // Handle splitting and AOS refresh on mount
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
            <section className="speciality">
                <div className="shape right"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-text center">
                                <h6 className="sub-heading"><span>Technical Expertise</span></h6>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="speciality-box" data-aos="fade-up" data-aos-duration="2000">
                                <div className="icon">
                                    <img src="/assets/images/skill/c-sharp.png" alt="C#" style={{ height: '75px' }} />
                                </div>
                                <h5 className="title">C# <br /> Development</h5>
                                <p>Build robust applications using C# with modern .NET features and OOP principles</p>
                                <h3 className="number">01</h3>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="speciality-box" data-aos="fade-up" data-aos-duration="2400">
                                <div className="icon">
                                    <img src="/assets/images/skill/java.png" alt="Java" style={{ height: '75px' }} />
                                </div>
                                <h5 className="title">Java Programming</h5>
                                <p>Develop backend systems using Java and Spring Framework for enterprise applications</p>
                                <h3 className="number">02</h3>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="speciality-box" data-aos="fade-up" data-aos-duration="2800">
                                <div className="icon">
                                    <img src="/assets/images/skill/bootstrap.png" alt="Bootstrap" style={{ height: '75px' }} />
                                </div>
                                <h5 className="title">Bootstrap Framework</h5>
                                <p>Create responsive websites with Bootstrap 5 for modern, mobile-first interfaces</p>
                                <h3 className="number">03</h3>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="speciality-box" data-aos="fade-up" data-aos-duration="3000">
                                <div className="icon">
                                    <img src="/assets/images/skill/figma.png" alt="Figma" style={{ height: '75px' }} />
                                </div>
                                <h5 className="title">Figma UI/UX Design</h5>
                                <p>Design intuitive interfaces using Figma for prototyping and user experience</p>
                                <h3 className="number">04</h3>
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
                                <h6 className="sub-heading"><span>MY TECH STACK</span></h6>
                                <h3 className="heading wow" data-splitting>Development Stack</h3>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6">
                            <div className="portfolio__left">
                                <div className="portfolio-box" data-aos="fade-right" data-aos-duration="2000">
                                    <div className="step">Core Framework</div>
                                    <div className="icon">
                                        <img src="/assets/images/skill/ASP.NET.png" alt="ASP.NET Core" style={{ height: '75px', borderRadius: '20px' }} />
                                    </div>
                                    <div className="content">
                                        <h5 className="title">ASP.NET Core MVC</h5>
                                        <p>Build enterprise web apps with clean architecture and dynamic Razor views</p>
                                    </div>
                                </div>
                                <div className="portfolio-box" data-aos="fade-right" data-aos-duration="2200">
                                    <div className="step">API Development</div>
                                    <div className="icon">
                                        <img src="/assets/images/skill/postman-apis.png" alt="Postman APIs" style={{ height: '75px', borderRadius: '20px' }} />
                                    </div>
                                    <div className="content">
                                        <h5 className="title">Postman + REST APIs</h5>
                                        <p>Design and test REST APIs with authentication and seamless integrations</p>
                                    </div>
                                </div>
                                <div className="portfolio-box" data-aos="fade-right" data-aos-duration="2400">
                                    <div className="step">Frontend Logic</div>
                                    <div className="icon">
                                        <img src="/assets/images/skill/js.png" alt="JavaScript" style={{ height: '75px', borderRadius: '20px' }} />
                                    </div>
                                    <div className="content">
                                        <h5 className="title">JavaScript</h5>
                                        <p>Add interactive features using ES6+ for enhanced user experiences</p>
                                    </div>
                                </div>
                                <div className="portfolio-box" data-aos="fade-right" data-aos-duration="2600">
                                    <div className="step">Version Control</div>
                                    <div className="icon">
                                        <img src="/assets/images/skill/github.png" alt="GitHub" style={{ height: '75px', borderRadius: '20px' }} />
                                    </div>
                                    <div className="content">
                                        <h5 className="title">GitHub</h5>
                                        <p>Manage code repositories with Git, CI/CD, and team collaboration</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-md-6">
                            <div className="portfolio__right">
                                <div className="image" data-aos="fade-left" data-aos-duration="2000">
                                    <img src="/assets/images/skill-img1.png" alt="Development Environment" style={{ width: '100%', borderRadius: '30px' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skill;
