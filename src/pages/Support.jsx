import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { ref, push, onValue, query, limitToLast } from "firebase/database";

const Support = () => {
    const [supporters, setSupporters] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        amount: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        if (window.AOS) {
            window.AOS.init({
                duration: 2000,
                once: true
            });
            window.AOS.refresh();
        }

        // Real-time listener for supporters
        const supportersRef = query(ref(db, 'supporters'), limitToLast(10));
        const unsubscribe = onValue(supportersRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const list = Object.entries(data).map(([key, value]) => ({
                    id: key,
                    ...value
                })).reverse(); // Show latest first
                setSupporters(list);
            } else {
                setSupporters([]);
            }
        });

        return () => unsubscribe();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.amount) return;

        // Razorpay expects amount in paise (1 INR = 100 paise)
        const amountInPaise = parseInt(formData.amount) * 100;

        const options = {
            key: "rzp_test_SJW5T5mHS22MDz", // TODO: Replace with your actual Razorpay Key ID
            amount: amountInPaise,
            currency: "INR",
            name: "Gowtham C R",
            description: "Support my work",
            image: "/assets/images/logo/Gcr-logo.png",
            handler: async function (response) {
                // This callback runs only AFTER a successful payment
                setIsSubmitting(true);
                try {
                    await push(ref(db, 'supporters'), {
                        name: formData.name,
                        amount: formData.amount,
                        message: formData.message,
                        payment_id: response.razorpay_payment_id,
                        date: new Date().toLocaleDateString('en-IN', {
                            day: '2-digit',
                            month: 'long',
                            year: 'numeric'
                        })
                    });
                    setFormData({ name: '', amount: '', message: '' });
                    setShowSuccess(true);
                    setTimeout(() => setShowSuccess(false), 5000);
                } catch (error) {
                    console.error("Error saving supporter:", error);
                }
                setIsSubmitting(false);
            },
            prefill: {
                name: formData.name,
            },
            theme: {
                color: "#5C27FE"
            }
        };

        try {
            const rzp1 = new window.Razorpay(options);
            rzp1.open();
        } catch (error) {
            console.error("Razorpay failed to load:", error);
            alert("Razorpay is not loaded. Please check your internet connection.");
        }
    };

    return (
        <section className="support-section" style={{ padding: '100px 0', minHeight: '100vh', background: '#090a1a' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-12 text-center">
                        <div className="block-text center" data-aos="fade-up">
                            <h6 className="sub-heading"><span>Support My Work</span></h6>
                            <h3 className="heading">Buy Me a Coffee ☕</h3>
                            <p className="desc" style={{ marginBottom: '40px', color: 'rgba(255,255,255,0.7)' }}>
                                If you find my work helpful, consider tipping. Your support helps me keep building and learning!
                            </p>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-8" data-aos="zoom-in">
                                <div className="form-box" style={{
                                    background: 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
                                    backdropFilter: 'blur(10px)',
                                    padding: '50px 40px',
                                    borderRadius: '30px',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    textAlign: 'left',
                                    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                                    width: '100%',
                                }}>
                                    <h4 style={{ color: 'white', marginBottom: '30px', textAlign: 'center' }}>Enter Tip Details</h4>
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-7 mb-4">
                                                <label style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '10px', display: 'block' }}>Your Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    placeholder="Enter your name"
                                                    required
                                                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', height: '50px' }}
                                                />
                                            </div>
                                            <div className="col-md-5 mb-4">
                                                <label style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '10px', display: 'block' }}>Amount (₹)</label>
                                                <input
                                                    type="number"
                                                    name="amount"
                                                    min="1"
                                                    value={formData.amount}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    placeholder="e.g. 100"
                                                    required
                                                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', height: '50px' }}
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-5">
                                            <label style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '10px', display: 'block' }}>Message (Optional)</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows="3"
                                                className="form-control"
                                                placeholder="Say something nice..."
                                                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}
                                            ></textarea>
                                        </div>
                                        <button
                                            type="submit"
                                            className="action-btn"
                                            disabled={isSubmitting}
                                            style={{ width: '100%', border: 'none', height: '55px' }}
                                        >
                                            <span style={{ width: '100%', textAlign: 'center' }}>
                                                {isSubmitting ? 'Recording Payment...' : 'Proceed to Pay'}
                                            </span>
                                        </button>
                                        {showSuccess && (
                                            <p style={{ color: '#00ffd1', marginTop: '20px', textAlign: 'center', fontSize: '16px' }}>
                                                ✨ Thank you! Your tip has been recorded in the hall of fame.
                                            </p>
                                        )}
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* Real-time Supporters List */}
                        <div className="supporters-list" data-aos="fade-up" style={{ marginTop: '100px' }}>
                            <h4 className="heading" style={{ marginBottom: '50px' }}>Hall of Fame ❤️</h4>
                            <div className="row">
                                {supporters.length > 0 ? (
                                    supporters.map((supporter) => (
                                        <div key={supporter.id} className="col-12 col-md-6 mb-4">
                                            <div className="supporter-box" style={{
                                                background: 'rgba(255,255,255,0.03)',
                                                padding: '30px',
                                                borderRadius: '20px',
                                                borderLeft: '6px solid #5C27FE',
                                                textAlign: 'left',
                                                transition: 'all 0.3s ease',
                                                cursor: 'default',
                                                boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                                            }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(0)';
                                                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                                }}
                                            >
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                                                    <h6 style={{ color: 'white', margin: 0, fontSize: '20px' }}>{supporter.name}</h6>
                                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                                        <span style={{
                                                            background: 'linear-gradient(264.28deg, #DEC7FF -38.2%, #5C27FE 103.12%)',
                                                            padding: '5px 18px',
                                                            borderRadius: '25px',
                                                            fontSize: '15px',
                                                            fontWeight: 'bold',
                                                            color: 'white',
                                                            marginBottom: '5px'
                                                        }}>₹{supporter.amount}</span>
                                                    </div>
                                                </div>
                                                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '16px', marginBottom: '12px', fontStyle: 'italic' }}>
                                                    "{supporter.message || 'Fueling the mission!'}"
                                                </p>
                                                <div style={{
                                                    color: 'rgba(255,255,255,0.4)',
                                                    fontSize: '13px',
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    borderTop: '1px solid rgba(255,255,255,0.05)',
                                                    paddingTop: '12px'
                                                }}>
                                                    <span style={{ display: 'flex', alignItems: 'center' }}>
                                                        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" style={{ marginRight: '6px' }}>
                                                            <path d="M8 0a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm0 14.5a6.5 6.5 0 1 1 6.5-6.5 6.5 6.5 0 0 1-6.5 6.5zM8.5 4h-1v5l4.25 2.5.5-.85-3.75-2.15z" />
                                                        </svg>
                                                        {supporter.date}
                                                    </span>
                                                    <span style={{ fontSize: '11px', opacity: 0.6 }}>ID: {supporter.payment_id?.slice(-8)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-12 text-center">
                                        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '18px' }}>No tips yet. Be the first to join the Hall of Fame!</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Support;
