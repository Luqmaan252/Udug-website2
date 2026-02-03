import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const LoginModal = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState('login');
    const { login, register } = useAuth();

    // Login State
    const [loginEmail, setLoginEmail] = useState('baarri252@gmail.com');
    const [loginPassword, setLoginPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const [loginSuccess, setLoginSuccess] = useState('');

    // Register State
    const [regName, setRegName] = useState('');
    const [regEmail, setRegEmail] = useState('');
    const [regPhone, setRegPhone] = useState('');
    const [regPassword, setRegPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [regError, setRegError] = useState('');
    const [regSuccess, setRegSuccess] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoginError('');
        setLoginSuccess('');

        if (!loginEmail || !loginPassword) {
            setLoginError('Please fill in all fields');
            return;
        }

        setIsLoading(true);
        try {
            const result = await login(loginEmail, loginPassword);
            if (result.success) {
                setLoginSuccess(result.message);
                setTimeout(() => {
                    onClose();
                    setLoginSuccess('');
                    setLoginPassword('');
                }, 1000);
            } else {
                setLoginError(result.message);
            }
        } catch (err) {
            setLoginError('An unexpected error occurred.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setRegError('');
        setRegSuccess('');

        if (!regName || !regEmail || !regPhone || !regPassword || !confirmPassword) {
            setRegError('Please fill in all fields');
            return;
        }

        if (!isValidEmail(regEmail)) {
            setRegError('Please enter a valid email address');
            return;
        }

        if (regPassword !== confirmPassword) {
            setRegError('Passwords do not match');
            return;
        }

        if (regPassword.length < 8) {
            setRegError('Password must be at least 8 characters');
            return;
        }

        setIsLoading(true);
        try {
            const result = await register(regName, regEmail, regPhone, regPassword);
            if (result.success) {
                setRegSuccess(result.message);
                setTimeout(() => {
                    setActiveTab('login');
                    // DO NOT pre-fill fields, let user type them fresh to ensure no state mix-up
                    setLoginEmail(regEmail);
                    setRegSuccess('');
                    setRegName('');
                    setRegEmail('');
                    setRegPhone('');
                    setRegPassword('');
                    setConfirmPassword('');
                    setLoginPassword(''); // Ensure password field is clear
                }, 1500);
            } else {
                setRegError(result.message);
            }
        } catch (err) {
            setRegError('An unexpected error occurred.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={`login-modal ${isOpen ? 'active' : ''}`}>
            <div className="login-header">
                <h3>Login / Register</h3>
                <div className="close-login" onClick={onClose}>
                    <i className="fas fa-times"></i>
                </div>
            </div>

            <div className="login-tabs">
                <button
                    className={`login-tab ${activeTab === 'login' ? 'active' : ''}`}
                    onClick={() => setActiveTab('login')}
                >
                    Login
                </button>
                <button
                    className={`login-tab ${activeTab === 'register' ? 'active' : ''}`}
                    onClick={() => setActiveTab('register')}
                >
                    Register
                </button>
            </div>

            <div className="login-body">
                <form className={`login-form ${activeTab === 'login' ? 'active' : ''}`} onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="your-email@example.com"
                            value={loginEmail}
                            onChange={(e) => { setLoginEmail(e.target.value); setLoginError(''); }}
                            disabled={isLoading}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={loginPassword}
                            onChange={(e) => { setLoginPassword(e.target.value); setLoginError(''); }}
                            disabled={isLoading}
                        />
                    </div>
                    {loginSuccess && <div className="success-message" style={{ display: 'block' }}>{loginSuccess}</div>}
                    {loginError && <div className="error-message" style={{ display: 'block' }}>{loginError}</div>}

                    <button type="submit" className="form-btn" disabled={isLoading}>
                        {isLoading ? 'Processing...' : 'Login to Account'}
                    </button>

                    <div className="social-login">
                        <p>Or login with:</p>
                        <div className="social-buttons">
                            <button type="button" className="social-btn google">
                                <i className="fab fa-google"></i> Google
                            </button>
                            <button type="button" className="social-btn facebook">
                                <i className="fab fa-facebook-f"></i> Facebook
                            </button>
                        </div>
                    </div>
                </form>

                <form className={`register-form ${activeTab === 'register' ? 'active' : ''}`} onSubmit={handleRegister}>
                    <div className="form-group">
                        <label htmlFor="reg-name">Full Name</label>
                        <input type="text" id="reg-name" placeholder="Enter your full name"
                            value={regName} onChange={(e) => { setRegName(e.target.value); setRegError(''); }}
                            disabled={isLoading}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="reg-email">Email Address</label>
                        <input type="email" id="reg-email" placeholder="your-email@example.com"
                            value={regEmail} onChange={(e) => { setRegEmail(e.target.value); setRegError(''); }}
                            disabled={isLoading}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="reg-phone">Phone Number</label>
                        <input type="tel" id="reg-phone" placeholder="+252 61 000 0000"
                            value={regPhone} onChange={(e) => { setRegPhone(e.target.value); setRegError(''); }}
                            disabled={isLoading}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="reg-password">Password</label>
                        <input type="password" id="reg-password" placeholder="Create a password (min. 8 characters)"
                            value={regPassword} onChange={(e) => { setRegPassword(e.target.value); setRegError(''); }}
                            disabled={isLoading}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="reg-confirm-password">Confirm Password</label>
                        <input type="password" id="reg-confirm-password" placeholder="Confirm your password"
                            value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value); setRegError(''); }}
                            disabled={isLoading}
                        />
                    </div>

                    {regSuccess && <div className="success-message" style={{ display: 'block' }}>{regSuccess}</div>}
                    {regError && <div className="error-message" style={{ display: 'block' }}>{regError}</div>}

                    <button type="submit" className="form-btn" disabled={isLoading}>
                        {isLoading ? 'Creating Account...' : 'Create Account'}
                    </button>

                    <div className="social-login">
                        <p>Or register with:</p>
                        <div className="social-buttons">
                            <button type="button" className="social-btn google">
                                <i className="fab fa-google"></i> Google
                            </button>
                            <button type="button" className="social-btn facebook">
                                <i className="fab fa-facebook-f"></i> Facebook
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginModal;
