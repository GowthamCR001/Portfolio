import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
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
                            <h3 className="heading">Privacy Policy</h3>
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
                                <p>Welcome to the portfolio website of Gowtham C R ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website at https://portfolio-chi-lyart-cd90kzra51.vercel.app/.</p>
                            </div>

                            <div className="mb-4">
                                <h6 style={{ color: 'white', marginBottom: '15px' }}>2. Information We Collect</h6>
                                <p>We may collect the following types of information:</p>
                                <ul>
                                    <li><strong>Personal Identification Information:</strong> Name, email address, phone number, etc., when you fill out a contact form or professional service booking form.</li>
                                    <li><strong>Payment Information:</strong> When you use our "Professional Services" payment feature, transactions are processed securely via Razorpay. We do not store your credit/debit card details on our servers.</li>
                                    <li><strong>Log Data:</strong> We may collect information that your browser sends whenever you visit our website.</li>
                                </ul>
                            </div>

                            <div className="mb-4">
                                <h6 style={{ color: 'white', marginBottom: '15px' }}>3. How We Use Your Information</h6>
                                <p>We use the collected data for various purposes:</p>
                                <ul>
                                    <li>To provide and maintain our service.</li>
                                    <li>To notify you about changes to our service.</li>
                                    <li>To provide customer support.</li>
                                    <li>To process payments and donations.</li>
                                    <li>To gather analysis or valuable information so that we can improve our service.</li>
                                </ul>
                            </div>

                            <div className="mb-4">
                                <h6 style={{ color: 'white', marginBottom: '15px' }}>4. Data Security</h6>
                                <p>The security of your data is important to us, but remember that no method of transmission over the Internet is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.</p>
                            </div>

                            <div className="mb-4">
                                <h6 style={{ color: 'white', marginBottom: '15px' }}>5. Third-Party Services</h6>
                                <p>We use third-party services like Razorpay for payment processing and Firebase for data storage. These third parties have their own privacy policies addressing how they use such information.</p>
                            </div>

                            <div className="mb-4">
                                <h6 style={{ color: 'white', marginBottom: '15px' }}>6. Contact Us</h6>
                                <p>If you have any questions about this Privacy Policy, please contact us at gcr.gowthamcr001@gmail.com.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
