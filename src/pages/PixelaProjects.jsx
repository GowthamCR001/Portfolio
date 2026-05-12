import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const pixelaProjects = [
    "InvoicePro",
    "zenalarm",
    "LandMart",
    "Gnana-Bindhu-App-Development",
    "Smart-Resto"
];

const PixelaProjects = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section className="page-title">
                <div className="shape"></div>
                <div className="shape right s3"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title__body">
                                <div className="page-title__main">
                                    <h4 className="title">Pixela Media Projects</h4>
                                    <ul className="breacrumb">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/project">Projects</Link></li>
                                        <li><p>Pixela Media Pvt Ltd</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-list" style={{ padding: '80px 0', minHeight: '60vh' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mb-5">
                            <h3 className="heading mb-3">Key Projects Developed</h3>
                            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '700px', margin: '0 auto' }}>
                                A selection of React websites, software solutions, and Mobile Apps developed during my time at Pixela Media Pvt Ltd.
                            </p>
                        </div>
                    </div>
                    
                    <div className="row justify-content-center">
                        {pixelaProjects.map((project, index) => (
                            <div className="col-lg-4 col-md-6 mb-4" key={index}>
                                <div className="project-link-card p-4 h-100 text-center" style={{ 
                                    background: 'rgba(255,255,255,0.03)', 
                                    borderRadius: '15px', 
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    transition: 'all 0.3s ease',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    minHeight: '120px'
                                }}>
                                    <h5 style={{ color: '#5C27FE', margin: 0, wordBreak: 'break-word' }}>
                                        {project}
                                    </h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default PixelaProjects;
