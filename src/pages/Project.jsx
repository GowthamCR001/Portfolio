import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

const Project = () => {
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

            <section className="bloglist">
                <div className="container">
                    <div className="row">
                        {projectsData.map((proj) => (
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
                                        <p className="text text-justify">{proj.description.substring(0, 150)}...</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Project;
