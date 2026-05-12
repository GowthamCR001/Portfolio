import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

const Project = () => {
    const [activeTab, setActiveTab] = useState('All');

    const categories = ['All', 'Web Development', 'App Development', 'Others'];

    const filteredProjects = activeTab === 'All'
        ? projectsData
        : projectsData.filter(proj => proj.category === activeTab);

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
                                    <h4 className="title">Projects</h4>
                                    <ul className="breacrumb">
                                        <li><Link to="/">Home</Link></li>
                                        <li><p>Projects</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="experience-summary" style={{ padding: '60px 0', background: 'rgba(255, 255, 255, 0.02)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="exp-card p-4 h-100" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column' }}>
                                <h5 style={{ color: '#5C27FE', marginBottom: '15px' }}>Dendron IT Solution</h5>
                                <p style={{ color: 'white', opacity: 0.8, fontSize: '16px', lineHeight: '1.6', flexGrow: 1 }}>
                                    I have developed <strong>32+ static and dynamic websites</strong>, delivering responsive designs and scalable solutions tailored to diverse client requirements.
                                </p>
                                <div className="mt-4">
                                    <Link to="/dendron-projects" className="action-btn" style={{ padding: '10px 25px' }}><span>View More</span></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="exp-card p-4 h-100" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column' }}>
                                <h5 style={{ color: '#5C27FE', marginBottom: '15px' }}>Pixela Media Pvt Ltd</h5>
                                <p style={{ color: 'white', opacity: 0.8, fontSize: '16px', lineHeight: '1.6', flexGrow: 1 }}>
                                    I have built <strong>5+ websites in React</strong>, developed <strong>2+ software solutions</strong>, and engineered <strong>5+ App developments</strong> (with 1 App currently Live).
                                </p>
                                <div className="mt-4">
                                    <Link to="/pixela-projects" className="action-btn" style={{ padding: '10px 25px' }}><span>View More</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bloglist" style={{ paddingTop: '60px' }}>
                <div className="container">
                    <div className="row mb-50">
                        <div className="col-12 text-center">
                            <div className="project-tabs">
                                {categories.map(category => (
                                    <button
                                        key={category}
                                        className={`tab-btn ${activeTab === category ? 'active' : ''}`}
                                        onClick={() => setActiveTab(category)}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {filteredProjects.map((proj) => (
                            <div key={proj.id} className="col-md-4 col-sm-12 mb-30">
                                <div className="blog-box-2">
                                    <div className="image">
                                        <Link to={`/project/${proj.id}`}>
                                            <img src={proj.mainImage} alt={proj.title} />
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <div className="meta ">
                                            <Link to={`/project/${proj.id}`}>
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2.9375 0.75V2.0625M9.0625 0.75V2.0625M0.75 9.9375V3.375C0.75 3.0269 0.888281 2.69306 1.13442 2.44692C1.38056 2.20078 1.7144 2.0625 2.0625 2.0625H9.9375C10.2856 2.0625 10.6194 2.20078 10.8656 2.44692C11.1117 2.69306 11.25 3.0269 11.25 3.375V9.9375M0.75 9.9375C0.75 10.2856 0.888281 10.6194 1.13442 10.8656C1.38056 11.1117 1.7144 11.25 2.0625 11.25H9.9375C10.2856 11.25 10.6194 11.1117 10.8656 10.8656C11.1117 10.6194 11.25 10.2856 11.25 9.9375M0.75 9.9375V5.5625C0.75 5.2144 0.888281 4.88056 1.13442 4.63442C1.38056 4.38828 1.7144 4.25 2.0625 4.25H9.9375C10.2856 4.25 10.6194 4.38828 10.8656 4.63442C11.1117 4.88056 11.25 5.2144 11.25 5.5625V9.9375" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                {proj.date}
                                            </Link>
                                        </div>
                                        <Link to={`/project/${proj.id}`} className="title">{proj.title}</Link>
                                        <div className="badge mb-2" style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '10px', display: 'inline-block' }}>{proj.category}</div>
                                        <p className="text text-justify">{proj.description.substring(0, 150)}...</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style>{`
                .project-tabs {
                    display: flex;
                    justify-content: center;
                    gap: 15px;
                    flex-wrap: wrap;
                    margin-bottom: 40px;
                }
                .tab-btn {
                    padding: 12px 28px;
                    border: 2px solid #e0e0e0;
                    background: #fff;
                    color: #444;
                    font-weight: 600;
                    border-radius: 50px;
                    cursor: pointer;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    font-size: 15px;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
                }
                .tab-btn:hover {
                    border-color: #615CFD;
                    color: #615CFD;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
                }
                .tab-btn.active {
                    background: linear-gradient(135deg, #615CFD, #827dfd);
                    border-color: transparent;
                    color: #fff;
                    box-shadow: 0 10px 20px rgba(97, 92, 253, 0.3);
                    transform: translateY(-2px);
                }
                .badge {
                    margin-top: 10px;
                    margin-bottom: 15px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                .mb-50 {
                    margin-bottom: 50px;
                }
            `}</style>
        </>
    );
};

export default Project;

