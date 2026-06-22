import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Certificate = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    const openModal = (imgSrc) => {
        setSelectedImg(imgSrc);
    };

    const closeModal = () => {
        setSelectedImg(null);
    };
    useEffect(() => {
        if (window.AOS) {
            window.AOS.init({
                duration: 2000,
                once: true
            });
            window.AOS.refresh();
        }
    }, []);

    const certificates = [
        { id: 1, img: "/assets/images/certificate/certificate01.png", title: "TechieAid", subtitle: "Internship Full stack Development", delay: "0" },
        { id: 2, img: "/assets/images/certificate/certificate02.png", title: "Simplilearn SkillUp", subtitle: "Generative AI", delay: "100" },
        { id: 3, img: "/assets/images/certificate/certificate03.png", title: "Simplilearn SkillUp", subtitle: "RAG Course for beginners", delay: "200" },
        { id: 4, img: "/assets/images/certificate/certificate04.png", title: "Great Learning Academy", subtitle: "OOPs in Java", delay: "300" },
        { id: 5, img: "/assets/images/certificate/certificate05.png", title: "Simplilearn SkillUp", subtitle: "Programming with Python 3.X", delay: "400" },
    ];

    return (
        <section className="team">
            <div className="container">
                <div className="row">

                    <div className="block-text center">
                        <h6 className="sub-heading"><span>Certificate</span></h6>
                        <h3 className="heading wow" data-splitting>That Showcase Our <br /> Expertise</h3>
                    </div>
                    <div className="col-12 mt-4">
                        <div className="row">
                            {/* Big Certificate */}
                            <div className="col-12 col-lg-5 mb-4">
                                <div className="team-box h-100 d-flex flex-column" data-aos="fade-up" data-aos-duration="2000">
                                    <div className="image flex-grow-1 d-flex align-items-center justify-content-center" onClick={() => openModal(certificates[0].img)} style={{ cursor: 'pointer', overflow: 'hidden' }}>
                                        <img
                                            src={certificates[0].img}
                                            alt={`${certificates[0].title} Certificate`}
                                            style={{
                                                width: '100%',
                                                height: 'auto',
                                                objectFit: 'cover',
                                                display: 'block'
                                            }}
                                        />
                                    </div>
                                    <div className="content mt-auto" style={{ textAlign: 'center', padding: '20px' }}>
                                        <Link to="#" className="h4 name">{certificates[0].title}</Link>
                                        <p className="postion" style={{ fontSize: '1.2rem' }}>{certificates[0].subtitle}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Other 4 Certificates */}
                            <div className="col-12 col-lg-7">
                                <div className="row">
                                    {certificates.slice(1).map((cert) => (
                                        <div key={cert.id} className="col-12 col-sm-6 mb-4">
                                            <div className="team-box h-100 d-flex flex-column" data-aos="fade-up" data-aos-duration="2000" data-aos-delay={cert.delay}>
                                                <div className="image flex-grow-1 d-flex align-items-center justify-content-center" onClick={() => openModal(cert.img)} style={{ cursor: 'pointer', overflow: 'hidden' }}>
                                                    <img
                                                        src={cert.img}
                                                        alt={`${cert.title} Certificate`}
                                                        style={{
                                                            width: '100%',
                                                            height: 'auto',
                                                            objectFit: 'cover',
                                                            display: 'block'
                                                        }}
                                                    />
                                                </div>
                                                <div className="content mt-auto" style={{ textAlign: 'center', padding: '15px' }}>
                                                    <Link to="#" className="h6 name">{cert.title}</Link>
                                                    <p className="postion" style={{ fontSize: '0.9rem' }}>{cert.subtitle}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Popup */}
            {selectedImg && (
                <>
                    <style>
                        {`
                            @keyframes fadeIn {
                                from { opacity: 0; transform: scale(0.9); }
                                to { opacity: 1; transform: scale(1); }
                            }
                        `}
                    </style>
                    <div className="modal-overlay" onClick={closeModal} style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 9999,
                        cursor: 'zoom-out'
                    }}>
                        <div className="modal-content" style={{
                            position: 'relative',
                            maxWidth: '90%',
                            maxHeight: '90%',
                            animation: 'fadeIn 0.3s ease-in-out'
                        }} onClick={(e) => e.stopPropagation()}>
                            <img src={selectedImg} alt="Certificate Popup" style={{
                                width: '100%',
                                height: 'auto',
                                maxHeight: '90vh',
                                borderRadius: '10px',
                                boxShadow: '0 0 30px rgba(255, 255, 255, 0.3)',
                                objectFit: 'contain'
                            }} />
                            <button onClick={closeModal} style={{
                                position: 'absolute',
                                top: '-50px',
                                right: '0',
                                background: 'none',
                                border: 'none',
                                color: 'white',
                                fontSize: '40px',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                lineHeight: '1'
                            }}>&times;</button>
                        </div>
                    </div>
                </>
            )}
        </section>
    );
};


export default Certificate;
