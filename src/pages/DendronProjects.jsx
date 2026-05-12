import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const dendronProjects = [
    "vaibavandhraruchulu.com", "anilinsurancehub.com", "annapurnapharma.co.in", 
    "Coffeegudi.com", "shepurinnovations.com", "anandpucollegedvg.com", 
    "dharamsinghpuc.com", "dvsvidyasamsthe.org", "gnanabindhu.com", 
    "gogreenfoundation.co.in", "srsfgc.com", "hassanuniversity.ac.in", 
    "hoysaleshwaradegreecollege.com", "jainmotocorp.com", "mspucdvg.com", 
    "mbpucollege.com", "nageshedu.com", "nuthanschool.in", "pacepue.com", 
    "sahyadrihealth.com", "sahyadrihassan.com", "targetpuc.com", "vemanapu.com", 
    "wempowersolutions.com", "akashadeepa.com", "admorp.in", "anmoleducation.com", 
    "anmolsciencepucollege.com", "bhoomikaschool.com", "ccchsn.com", 
    "tanyahospital.com", "hotelpalika.com", "idealtechnoschool.com", "ilsglobal.in", 
    "jainbajaj.com", "mistyslope.com", "scholarshassan.com", "shankheshwarnke.com", 
    "shorinkaiindia.com", "skfishland.com", "srinidhigoldcompany.com", 
    "urbanhandsbharath.com", "unitedphosphates.com"
];

const DendronProjects = () => {
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
                                    <h4 className="title">Dendron IT Solution Projects</h4>
                                    <ul className="breacrumb">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/project">Projects</Link></li>
                                        <li><p>Dendron IT Solution</p></li>
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
                            <h3 className="heading mb-3">Websites Developed</h3>
                            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '700px', margin: '0 auto' }}>
                                A comprehensive list of the 32+ static and dynamic websites developed during my tenure at Dendron IT Solution.
                            </p>
                        </div>
                    </div>
                    
                    <div className="row">
                        {dendronProjects.map((domain, index) => (
                            <div className="col-lg-4 col-md-6 mb-4" key={index}>
                                <div className="project-link-card p-4 h-100" style={{ 
                                    background: 'rgba(255,255,255,0.03)', 
                                    borderRadius: '15px', 
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    transition: 'all 0.3s ease',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}>
                                    <span style={{ color: 'white', fontSize: '15px', fontWeight: '500', wordBreak: 'break-all' }}>
                                        {domain}
                                    </span>
                                    <a 
                                        href={`https://${domain}`} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        style={{ 
                                            background: 'rgba(92, 39, 254, 0.1)', 
                                            color: '#5C27FE', 
                                            padding: '8px 15px', 
                                            borderRadius: '8px',
                                            fontSize: '13px',
                                            fontWeight: 'bold',
                                            marginLeft: '15px',
                                            whiteSpace: 'nowrap'
                                        }}
                                    >
                                        Visit
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default DendronProjects;
