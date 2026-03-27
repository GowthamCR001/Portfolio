import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { ref, push, onValue, query, limitToLast } from "firebase/database";

const Services = () => {
    const [payments, setPayments] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        amount: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Predefined service amounts
    const serviceOptions = [500, 1000, 2500, 5000];

    useEffect(() => {
        if (window.AOS) {
            window.AOS.init({ duration: 2000, once: true });
            window.AOS.refresh();
        }

        // Fetch recent project payments from Firebase
        const paymentsRef = query(ref(db, 'project_payments'), limitToLast(5));
        const unsubscribe = onValue(paymentsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const list = Object.entries(data).map(([id, val]) => ({
                    id,
                    ...val
                })).reverse();
                setPayments(list);
            }
        });

        return () => unsubscribe();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const selectAmount = (amt) => {
        setFormData(prev => ({ ...prev, amount: amt.toString() }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.amount) {
            alert("Please provide your name and the service amount.");
            return;
        }

        setIsSubmitting(true);

        try {
            // 1. Create Order via our Serverless Function
            const orderRes = await fetch('/api/create-order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    amount: formData.amount,
                    currency: 'INR',
                    receipt: `receipt_${Date.now()}`
                })
            });

            if (!orderRes.ok) throw new Error('Order creation failed');
            const orderData = await orderRes.json();

            // 2. Configure Razorpay Options
            const options = {
                key: import.meta.env.VITE_RAZORPAY_KEY_ID,
                amount: orderData.amount,
                currency: orderData.currency,
                name: "Gowtham C R",
                description: "Payment for Professional Software Services",
                order_id: orderData.id,
                prefill: {
                    name: formData.name,
                },
                theme: {
                    color: "#5C27FE"
                },
                handler: async function (response) {
                    // 3. Verify Payment
                    const verifyRes = await fetch('/api/verify-payment', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature
                        })
                    });

                    const verifyData = await verifyRes.json();

                    if (verifyData.status === 'success') {
                        // 4. Record in Firebase
                        await push(ref(db, 'project_payments'), {
                            name: formData.name,
                            amount: formData.amount,
                            message: formData.message || "Project Milestone",
                            timestamp: Date.now()
                        });

                        alert("Thank you! Your payment for services has been received successfully.");
                        setFormData({ name: '', amount: '', message: '' });
                    } else {
                        alert("Payment verification failed. Please contact support.");
                    }
                    setIsSubmitting(false);
                },
                modal: {
                    ondismiss: function () {
                        setIsSubmitting(false);
                    }
                }
            };

            const rzp = new window.Razorpay(options);
            rzp.open();

        } catch (error) {
            console.error("Payment Error:", error);
            alert("Process failed to start. Please try again later.");
            setIsSubmitting(false);
        }
    };

    return (
        <section className="services-section" style={{ padding: '120px 0', minHeight: '100vh', background: '#090a1a' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        {/* Header Section */}
                        <div className="block-text center" data-aos="fade-up">
                            <h6 className="sub-heading"><span>Collaboration</span></h6>
                            <h3 className="heading">Professional Services</h3>
                            <p className="mb-30" style={{ maxWidth: '700px', margin: '0 auto 30px' }}>
                                Hire me for custom web development, UI/UX design, or technical consultations.
                                Use this portal to securely pay for project milestones and professional services.
                            </p>
                        </div>

                        <div className="row mt-12">
                            {/* Payment Form */}
                            <div className="col-lg-12" data-aos="fade-right">
                                <div className="payment-card" style={{
                                    background: 'rgba(255,255,255,0.03)',
                                    padding: '40px',
                                    borderRadius: '30px',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                                }}>
                                    <h4 style={{ color: 'white', marginBottom: '30px', textAlign: 'center' }}>Project Payment Details</h4>
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-12 mb-4">
                                                <label style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '10px', display: 'block' }}>Client Name / Company</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    className="form-control"
                                                    placeholder="Enter your name"
                                                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', height: '50px' }}
                                                />
                                            </div>
                                            <div className="col-md-12 mb-4">
                                                <label style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '10px', display: 'block' }}>Service Amount (₹)</label>
                                                <div className="d-flex gap-2 mb-3 flex-wrap">
                                                    {serviceOptions.map(amt => (
                                                        <button
                                                            key={amt}
                                                            type="button"
                                                            onClick={() => selectAmount(amt)}
                                                            style={{
                                                                background: formData.amount === amt.toString() ? '#5C27FE' : 'rgba(255,255,255,0.1)',
                                                                border: '1px solid rgba(255,255,255,0.1)',
                                                                color: 'white',
                                                                padding: '8px 20px',
                                                                borderRadius: '10px',
                                                                cursor: 'pointer',
                                                                transition: 'all 0.3s'
                                                            }}
                                                        >
                                                            ₹{amt}
                                                        </button>
                                                    ))}
                                                </div>
                                                <input
                                                    type="number"
                                                    name="amount"
                                                    value={formData.amount}
                                                    onChange={handleInputChange}
                                                    className="form-control"
                                                    placeholder="Or enter custom amount"
                                                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', height: '50px' }}
                                                />
                                            </div>
                                            <div className="col-12 mb-4">
                                                <label style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '10px', display: 'block' }}>Project Description / Message</label>
                                                <textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    className="form-control"
                                                    rows="4"
                                                    placeholder="E.g. Payment for Web Design Milestone 1"
                                                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}
                                                ></textarea>
                                            </div>
                                            <div className="col-5">
                                                <button
                                                    type="submit"
                                                    className="action-btn w-100"
                                                    disabled={isSubmitting}
                                                    style={{ height: '60px', fontSize: '18px', fontWeight: 'bold' }}
                                                >
                                                    <span>{isSubmitting ? "Processing..." : "Proceed to Project Payment"}</span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    <p className="mt-4 text-center" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>
                                        Secure transaction powered by Razorpay. Built for professional business services.
                                    </p>
                                </div>
                            </div>

                            {/* Info Section */}
                            <div className="col-lg-12 mt-5 mt-lg-0" data-aos="fade-left">
                                <div style={{ paddingLeft: '20px' }}>
                                    <h4 style={{ color: 'white', marginBottom: '20px' }}>Professional Offerings</h4>
                                    <ul style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.8' }}>
                                        <li className="mb-3">✅ Custom Web Application Development</li>
                                        <li className="mb-3">✅ UI/UX Design & Prototyping</li>
                                        <li className="mb-3">✅ Bug Fixing & Performance Optimization</li>
                                        <li className="mb-3">✅ Technical Consultation & Mentorship</li>
                                        <li className="mb-3">✅ API Integration & Backend Support</li>
                                    </ul>

                                    <div className="mt-5">
                                        <h4 style={{ color: 'white', marginBottom: '20px' }}>Success Metrics</h4>
                                        <div className="history" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                                            {payments.length > 0 ? (
                                                payments.map((p) => (
                                                    <div key={p.id} className="mb-3 p-3" style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <strong style={{ color: 'white' }}>{p.name}</strong>
                                                            <span style={{ color: '#5C27FE', fontWeight: 'bold' }}>₹{p.amount}</span>
                                                        </div>
                                                        <p style={{ fontSize: '13px', margin: '5px 0 0', opacity: 0.6 }}>{p.message}</p>
                                                    </div>
                                                ))
                                            ) : (
                                                <p style={{ opacity: 0.5 }}>Awaiting next project milestone...</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
