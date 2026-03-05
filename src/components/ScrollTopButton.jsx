import React, { useState, useEffect } from 'react';

const ScrollTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show or hide the button based on scroll position
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <a
            id="scroll-top"
            className={isVisible ? 'show' : ''}
            onClick={scrollToTop}
            style={{
                cursor: 'pointer',
                display: isVisible ? 'block' : 'none' // Explicitly handle visibility if CSS doesn't hide it
            }}
        >
            <span className="icon-arrow-top"></span>
        </a>
    );
};

export default ScrollTopButton;
