import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    useEffect(() => {
        // Close mobile menu on route change
        const mobileButton = document.querySelector('.mobile-button');
        const mobileNav = document.querySelector('#main-nav-mobi');

        if (mobileButton && mobileButton.classList.contains('active')) {
            mobileButton.classList.remove('active');
        }

        if (mobileNav) {
            // Using jQuery if available for smooth transition as per original theme
            if (window.$) {
                window.$('#main-nav-mobi').slideUp();
            } else {
                mobileNav.style.display = 'none';
            }
        }
    }, [location.pathname]);

    return (
        <header id="header_main" className="header">
            <div className="container big">
                <div className="row">
                    <div className="col-12">
                        <div className="header__body">
                            <div className="header__logo" style={{ marginTop: '20px' }}>
                                <Link to="/">
                                    <img id="site-logo" src="/assets/images/logo/Gcr-logo.png"
                                        alt="Peson" width="auto" height="80"
                                        data-retina="/assets/images/logo/logo@2x.png" data-width="auto"
                                        data-height="80" />
                                </Link>
                            </div>

                            <div className="header__right">
                                <nav id="main-nav" className="main-nav">
                                    <ul id="menu-primary-menu" className="menu">
                                        <li className="menu-item">
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link to="/project">Project</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link to="/skill">Skill</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link to="/certificate">Certificate</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link to="/resume">Resume</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link to="/about">About me</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link to="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </nav>
                                <div className="mobile-button"><span></span></div>
                            </div>

                            <div className="header__action">
                                <Link to="/support" className="action-btn"><span>Tip for a Coffee</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
