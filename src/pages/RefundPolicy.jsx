import React, { useEffect } from 'react';

const RefundPolicy = () => {
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
        <section className="legal-section" style={{ padding: '120px 0', minHeight: '100vh', background: '#090a1a', color: 'rgba(255,255,255,0.8)' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="block-text center" data-aos="fade-up">
                            <h6 className="sub-heading"><span>Legal</span></h6>
                            <h3 className="heading">Refund & Cancellation Policy</h3>
                            <p className="mb-30">Last Updated: March 27, 2026</p>
                        </div>

                        <div className="content-box" data-aos="fade-up" style={{
                            background: 'rgba(255,255,255,0.03)',
                            padding: '40px',
                            borderRadius: '20px',
                            border: '1px solid rgba(255,255,255,0.05)'
                        }}>
                            <div className="mb-4">
                                <h6 style={{ color: 'white', marginBottom: '15px' }}>1. Introduction</h6>
                                <p>Thank you for collaborating on your project. This Refund & Cancellation Policy explains the terms related to professional services and project milestone payments made through our website.</p>
                            </div>

                            <div className="mb-4">
                                <h6 style={{ color: 'white', marginBottom: '15px' }}>2. Refund Policy</h6>
                                <p>Payments made for professional services or project milestones are generally non-refundable once the work for that milestone has commenced or been completed.</p>
                                <p>If you believe a transaction was made in error (e.g., accidental double charge), please contact us within 24 hours of the payment with your transaction details. We will review each case individually and, if verified, attempt to process a refund within 5-7 business days through the original payment method.</p>
                            </div>

                            <div className="mb-4">
                                <h6 style={{ color: 'white', marginBottom: '15px' }}>3. Cancellation Policy</h6>
                                <p>Clients may cancel a project booking at any time; however, payments already made for completed milestones or initial setup fees are non-refundable. Once a milestone payment is processed, it signifies acceptance of the deliverables for that stage.</p>
                            </div>

                            <div className="mb-4">
                                <h6 style={{ color: 'white', marginBottom: '15px' }}>4. Payment Disputes</h6>
                                <p>In the event of a dispute or unauthorized use of a payment method, please contact your bank or payment provider immediately. We are committed to resolving payment issues fairly and transparently.</p>
                            </div>

                            <div className="mb-4">
                                <h6 style={{ color: 'white', marginBottom: '15px' }}>5. Contact for Support</h6>
                                <p>If you have any questions or concerns regarding a payment, please reach out to us:</p>
                                <ul>
                                    <li><strong>Email:</strong> gcr.gowthamcr001@gmail.com</li>
                                    <li><strong>Location:</strong> Hassan, Karnataka, India</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RefundPolicy;
