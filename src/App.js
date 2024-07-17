import React, { useEffect } from 'react';
import './App.css';
import logo from './Images/HOPE BRIDGE LOGO.png';
import backgroundImage from './Images/Volunteer.jpeg';

const VolunteerPage = () => {
    useEffect(() => {
        // Smooth scrolling for navigation links
        document.querySelectorAll('.navigation-items a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Scroll-to-top button functionality
        const handleScroll = () => {
            const scrollToTopButton = document.getElementById('scrollToTopButton');
            if (window.scrollY > 300) {
                scrollToTopButton.style.display = 'block';
            } else {
                scrollToTopButton.style.display = 'none';
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Content animations on scroll
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.main-content section').forEach(section => {
            observer.observe(section);
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <header>
                <img src={logo} className="main" alt="Hope Bridge Logo" />
                <nav className="navigation">
                    <ul className="navigation-items">
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about-us">About us</a></li>
                        <li><a href="/preparedness">Preparedness</a></li>
                        <li><a href="/donate">Donate</a></li>
                    </ul>
                </nav>
            </header>
            <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="header-content">
                    <h1>Volunteer with Us</h1>
                    <p>Join us in helping make a difference in the community</p>
                    <a href="/sign-up" className="btn">Sign Up</a>
                </div>
            </div>
            <div className="main-content">
                <section className="about">
                    <h2>About Volunteering</h2>
                    <p>Hope Bridge Kenya focuses on aiding those in need and is always on the lookout for like-minded individuals.</p>
                    <p>We highly value volunteers who are altruistic and motivated by a genuine desire to help others without seeking personal rewards.</p>
                </section>
                <section className="requirements">
                    <h2>Key Requirements</h2>
                    <ul>
                        <li>Adhere to the Hope Bridge Kenya code of conduct.</li>
                        <li>Act with integrity and honesty at all times.</li>
                        <li>Engage in all necessary training provided by the organization.</li>
                        <li>Honor the rights, beliefs, and opinions of those we serve.</li>
                    </ul>
                </section>
            </div>
            <footer className="footer-volunteerpage">
                <div className="container">
                    <div className="item">254 Madaraka Avenue, Nairobi, Kenya | Phone: 0722 12345 | Email: info@hopebridge.org</div>
                    <div className="item">Address: P.O Box 12345-00100 Nairobi, Kenya</div>
                    <div className="item">&copy; 2024 Hope Bridge Kenya. All Rights Reserved.</div>
                </div>
            </footer>
            <button id="scrollToTopButton" onClick={scrollToTop}>Top</button>
        </div>
    );
};

export default VolunteerPage;
