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

    const amountOptions = [10, 20, 30, 50];

    useEffect(() => {
        if (window.AOS) {
            window.AOS.init({
                duration: 2000,
                once: true
            });
            window.AOS.refresh();
        }

        const supportersRef = query(ref(db, 'supporters'), limitToLast(10));
        const unsubscribe = onValue(supportersRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const list = Object.entries(data).map(([key, value]) => ({
                    id: key,
                    ...value
                })).reverse();
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

    const selectAmount = (amt) => {
        setFormData({ ...formData, amount: amt.toString() });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.amount) return;

        setIsSubmitting(true);

        try {
            // Step 1: Create order on backend
            const orderRes = await fetch('/api/create-order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount: formData.amount })
            });

            if (!orderRes.ok) throw new Error('Order creation failed');
            const orderData = await orderRes.json();

            // Step 2: Open Razorpay checkout
            const options = {
                key: import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_SJW5T5mHS22MDz",
                amount: orderData.amount,
                currency: orderData.currency,
                name: "Gowtham C R",
                description: "Voluntary donation to support software development",
                order_id: orderData.id,
                image: "/assets/images/logo/Gcr-logo.png",
                handler: async function (response) {
                    // Step 3: Verify payment on backend
                    try {
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
                            // Step 4: Save to Database
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
                        } else {
                            alert("Payment verification failed. Please contact support.");
                        }
                    } catch (error) {
                        console.error("Verification failed:", error);
                        alert("Error verifying payment.");
                    } finally {
                        setIsSubmitting(false);
                    }
                },
                prefill: {
                    name: formData.name,
                },
                theme: {
                    color: "#5C27FE"
                },
                modal: {
                    ondismiss: function () {
                        setIsSubmitting(false);
                    }
                }
            };

            const rzp1 = new window.Razorpay(options);
            rzp1.open();

        } catch (error) {
            console.error("Payment flow failed:", error);
            alert("Payment failed to start. " + error.message);
            setIsSubmitting(false);
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
                            <p className="desc" style={{ marginBottom: '20px', color: 'rgba(255,255,255,0.7)' }}>
                                If you find my work helpful, consider tipping. Your support helps me keep building open-source projects, learning new technologies, and maintaining this portfolio.
                            </p>
                            <p className="desc" style={{ marginBottom: '40px', color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>
                                This is a voluntary donation/tip feature. No physical goods or services are being sold. By proceeding, you agree to our <a href="/terms-conditions" style={{ color: '#5C27FE' }}>Terms</a> and <a href="/refund-policy" style={{ color: '#5C27FE' }}>Refund Policy</a>.
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
                                            <div className="col-md-12 mb-12">
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
                                            <div className="col-md-12 mb-12 mt-4">
                                                <label style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '10px', display: 'block' }}>Amount (₹)</label>
                                                <div className="d-flex gap-2 mb-2 flex-wrap">
                                                    {amountOptions.map(amt => (
                                                        <button
                                                            key={amt}
                                                            type="button"
                                                            onClick={() => selectAmount(amt)}
                                                            style={{
                                                                background: formData.amount === amt.toString() ? '#5C27FE' : 'rgba(255,255,255,0.1)',
                                                                border: '1px solid rgba(255,255,255,0.2)',
                                                                borderRadius: '10px',
                                                                color: 'white',
                                                                padding: '8px 15px',
                                                                fontSize: '14px',
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
                                                {isSubmitting ? 'Processing...' : 'Proceed to Pay'}
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
