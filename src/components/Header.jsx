import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header id="header_main" class="header">
            <div class="container big">
                <div class="row">
                    <div class="col-12">
                        <div class="header__body">
                            <div class="header__logo" style={{ marginTop: '20px' }}>
                                <Link to="/">
                                    <img id="site-logo" src="/assets/images/logo/Gcr-logo.png"
                                        alt="Peson" width="auto" height="80"
                                        data-retina="/assets/images/logo/logo@2x.png" data-width="auto"
                                        data-height="80" />
                                </Link>
                            </div>

                            <div class="header__right">
                                <nav id="main-nav" class="main-nav">
                                    <ul id="menu-primary-menu" class="menu">
                                        <li class="menu-item">
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li class="menu-item">
                                            <Link to="/project">Project</Link>
                                        </li>
                                        <li class="menu-item">
                                            <Link to="/skill">Skill</Link>
                                        </li>
                                        <li class="menu-item">
                                            <Link to="/certificate">Certificate</Link>
                                        </li>
                                        <li class="menu-item">
                                            <Link to="/resume">Resume</Link>
                                        </li>
                                        <li class="menu-item">
                                            <Link to="/about">About me</Link>
                                        </li>
                                        <li class="menu-item">
                                            <Link to="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </nav>
                                <div class="mobile-button"><span></span></div>
                            </div>

                            <div class="header__action">
                                <Link to="/support" class="action-btn"><span>Tip for a Coffee</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
