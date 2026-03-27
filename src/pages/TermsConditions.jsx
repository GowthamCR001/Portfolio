import React, { useEffect } from 'react';

const TermsConditions = () => {
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
                            <h3 className="heading">Terms & Conditions</h3>
                            <p className="mb-30">Last Updated: March 27, 2026</p>
                        </div>

                        <div className="content-box" data-aos="fade-up" style={{
                            background: 'rgba(255,255,255,0.03)',
                            padding: '40px',
                            borderRadius: '20px',
                            border: '1px solid rgba(255,255,255,0.05)'
                        }}>
                            <div className="mb-4">
                                <h6 style={{ color: 'white', marginBottom: '15px' }}>1. Use of Website</h6>
                                <p>By accessing this website, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.</p>
                            </div>

                            <div className="mb-4">
                                <h6 style={{ color: 'white', marginBottom: '15px' }}>2. Intellectual Property</h6>
                                <p>All content, including projects, designs, and code displayed on this website, are the property of Gowtham C R unless otherwise stated. You may not reproduce, distribute, or use this content without prior written permission.</p>
                            </div>

                            <div className="mb-4">
                                <h6 style={{ color: 'white', marginBottom: '15px' }}>3. User Conduct</h6>
                                <p>You agree to use this website only for lawful purposes. You must not use this website in a way that causes damage, disruption, or harm to the website, our systems, or other users.</p>
                            </div>

                            <div className="mb-4">
                                <h6 style={{ color: 'white', marginBottom: '15px' }}>4. Payment Terms</h6>
                                <p>The "Professional Services" payment feature allows clients to pay for software development, technical consultations, and project milestones. All payments are processed through Razorpay. By making a payment, you warrant that you are 18 years of age or older and have the legal right to use the payment method provided.</p>
                            </div>

                            <div className="mb-4">
                                <h6 style={{ color: 'white', marginBottom: '15px' }}>5. Limitation of Liability</h6>
                                <p>Gowtham C R will not be liable for any direct, indirect, incidental, or consequential damages arising out of your use or inability to use the website.</p>
                            </div>

                            <div className="mb-4">
                                <h6 style={{ color: 'white', marginBottom: '15px' }}>6. Changes to Terms</h6>
                                <p>We reserve the right to update these Terms and Conditions at any time. Changes will be posted on this page, and your continued use of the website will signify your acceptance of the updated terms.</p>
                            </div>

                            <div className="mb-4">
                                <h6 style={{ color: 'white', marginBottom: '15px' }}>7. Contact Us</h6>
                                <p>If you have any questions about these Terms, please contact us at gcr.gowthamcr001@gmail.com.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TermsConditions;
