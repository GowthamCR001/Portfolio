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

    return (
        <section className="team">
            <div className="container">
                <div className="row">

                    <div className="block-text center">
                        <h6 className="sub-heading"><span>Certificate</span></h6>
                        <h3 className="heading wow" data-splitting>That Showcase Our <br /> Expertise</h3>
                    </div>
                    <div className="col-3">
                        <div className="swiper team-swiper">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="team-box" data-aos="fade-up" data-aos-duration="2000">
                                        <div className="image" onClick={() => openModal("/assets/images/certificate/certificate1.png")} style={{ cursor: 'pointer', overflow: 'hidden', height: 'auto' }}>
                                            <img
                                                src="/assets/images/certificate/certificate1.png"
                                                alt="TechieAid Certificate"
                                                style={{
                                                    width: '100%',
                                                    height: 'auto',
                                                    objectFit: 'cover',
                                                    display: 'block'
                                                }}
                                            />
                                        </div>
                                        <div className="content" style={{ textAlign: 'center' }}>
                                            <Link to="#" className="h5 name">TechieAid</Link>
                                            <p className="postion">Internship Full stack Develope</p>
                                        </div>
                                    </div>
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
