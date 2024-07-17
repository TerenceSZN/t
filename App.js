import React, { useState } from 'react';
import './App.css';
import logo from './Images/HOPE BRIDGE LOGO.png';

function App() {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [formMessage, setFormMessage] = useState('');

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validatePhone = (phone) => {
        const re = /^\d{10}$/;
        return re.test(phone);
    };

    const submitForm = () => {
        setFormMessage('');
        if (!validateEmail(email)) {
            setFormMessage('Please enter a valid email address.');
            return;
        }

        if (!validatePhone(phone)) {
            setFormMessage('Please enter a valid phone number.');
            return;
        }

        setFormMessage('Thank you for signing up! We will contact you soon.');
        setEmail('');
        setPhone('');
        setMessage('');
    };

    return (
        <div className="App">
            <header>
                <img src={logo} className="main" alt="Hope Bridge Logo" />
                <nav className="navigation">
                    <div className="container-signuppage">
                        <ul className="navigation-items">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="aboutUs.html">About Us</a></li>
                            <li><a href="volunteerpage.html">Volunteer</a></li>
                            <li><a href="prep.html">Preparedness</a></li>
                            <li><a href="donate.html">Donate</a></li>
                        </ul>
                    </div>
                </nav>
            </header>

            <div className="card">
                <p className="heading">Sign Up</p>
                <div className="input-div">
                    <input
                        type="text"
                        className="input"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-div">
                    <input
                        className="input"
                        type="text"
                        id="phone"
                        placeholder="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="input-div">
                    <input
                        className="input"
                        type="text"
                        id="message"
                        placeholder="Message (Optional)"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <div className="button-div">
                    <button className="submit" onClick={submitForm}>Submit</button>
                </div>
                <div id="formMessage" style={{ marginTop: '1rem', color: formMessage.includes('Thank you') ? 'green' : 'red' }}>
                    {formMessage}
                </div>
            </div>
            <footer className="footer-volunteerpage">
                <div className="container">
                    <div className="item">254 Madaraka Avenue, Nairobi, Kenya | Phone: 0722 12345 | Email: info@hopebridge.org</div>
                    <div className="item">Address: P.O Box 12345-00100 Nairobi, Kenya</div>
                    <div className="item">&copy; 2024 Hope Bridge Kenya. All Rights Reserved.</div>
                </div>
            </footer>
        </div>
    );
}

export default App;
