
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const ProfilePage = () => {
    const { currentUser, updateProfile, uploadProfilePicture, loading } = useAuth();
    const navigate = useNavigate();

    const [isEditing, setIsEditing] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (!loading && !currentUser) {
            navigate('/');
        }

        if (currentUser) {
            setFormData({
                name: currentUser.name || '',
                phone: currentUser.profile?.phone || '',
                address: currentUser.profile?.address || ''
            });
        }
    }, [currentUser, loading, navigate]);

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setIsUploading(true);
        setStatus({ type: '', message: '' });

        const result = await uploadProfilePicture(file);
        setIsUploading(false);

        if (result.success) {
            setStatus({ type: 'success', message: result.message });
        } else {
            setStatus({ type: 'error', message: result.message });
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        setStatus({ type: '', message: '' });

        const result = await updateProfile({
            name: formData.name,
            phone: formData.phone,
            address: formData.address
        });

        setSaving(false);
        if (result.success) {
            setStatus({ type: 'success', message: result.message });
            setIsEditing(false);
        } else {
            setStatus({ type: 'error', message: result.message });
        }
    };

    if (loading) return <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>Loading...</div>;
    if (!currentUser) return null;

    return (
        <div className="profile-page" style={{ paddingTop: '120px', paddingBottom: '80px', backgroundColor: '#f9f9f9', minHeight: '80vh' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <div className="section-header" style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <span className="section-subtitle">My Account</span>
                        <h2>My Profile</h2>
                    </div>
                    <Link to="/orders" className="btn btn-gold" style={{ fontSize: '13px', padding: '10px 20px' }}>
                        <i className="fas fa-shopping-bag" style={{ marginRight: '8px' }}></i> View My Orders
                    </Link>
                </div>

                <div className="profile-card">
                    <div className="profile-header">
                        <div className="avatar-container">
                            <div className="profile-avatar">
                                {currentUser.avatarUrl ? (
                                    <img src={currentUser.avatarUrl} alt="Avatar" />
                                ) : (
                                    currentUser.name.charAt(0).toUpperCase()
                                )}
                            </div>
                            <label htmlFor="avatar-upload" className="edit-avatar-btn">
                                <i className={`fas ${isUploading ? 'fa-spinner fa-spin' : 'fa-camera'}`}></i>
                                <input
                                    type="file"
                                    id="avatar-upload"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    style={{ display: 'none' }}
                                    disabled={isUploading}
                                />
                            </label>
                        </div>
                        <div className="profile-info-text">
                            <h3>{currentUser.name}</h3>
                            <p className="profile-email">{currentUser.email}</p>
                            <span className="member-since">Member since {new Date(currentUser.$createdAt).toLocaleDateString()}</span>
                        </div>
                    </div>

                    {!isEditing ? (
                        <div className="profile-details">
                            <div className="profile-details-grid">
                                <div className="detail-item">
                                    <strong>Phone Number</strong>
                                    <p>{currentUser.profile?.phone || 'Not provided'}</p>
                                </div>
                                <div className="detail-item">
                                    <strong>Delivery Address</strong>
                                    <p>{currentUser.profile?.address || 'Not provided'}</p>
                                </div>
                            </div>
                            <button
                                className="btn btn-dark-edit"
                                onClick={() => setIsEditing(true)}
                            >
                                <i className="fas fa-edit"></i> Edit Profile Information
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            {status.message && (
                                <div style={{
                                    padding: '15px', marginBottom: '25px', borderRadius: '12px', textAlign: 'left',
                                    backgroundColor: status.type === 'error' ? '#fff0f0' : '#f0fff4',
                                    color: status.type === 'error' ? '#d32f2f' : '#2e7d32',
                                    fontSize: '14px', borderLeft: `5px solid ${status.type === 'error' ? '#d32f2f' : '#2e7d32'}`
                                }}>
                                    <div style={{ fontWeight: '700', marginBottom: '5px' }}>
                                        <i className={`fas ${status.type === 'error' ? 'fa-exclamation-triangle' : 'fa-check-circle'}`} style={{ marginRight: '10px' }}></i>
                                        {status.type === 'error' ? 'Error Detail:' : 'Success!'}
                                    </div>
                                    <div style={{ opacity: 0.9 }}>{status.message}</div>
                                </div>
                            )}

                            <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', fontWeight: '600', color: '#555' }}>Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        style={{ width: '100%', padding: '12px 15px', border: '1px solid #eee', borderRadius: '10px', backgroundColor: '#f9fafb' }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', fontWeight: '600', color: '#555' }}>Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+252..."
                                        style={{ width: '100%', padding: '12px 15px', border: '1px solid #eee', borderRadius: '10px', backgroundColor: '#f9fafb' }}
                                    />
                                </div>
                            </div>

                            <div className="form-group" style={{ marginBottom: '30px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', fontWeight: '600', color: '#555' }}>Default Shipping Address</label>
                                <textarea
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    rows="3"
                                    placeholder="City, District, Street..."
                                    style={{ width: '100%', padding: '12px 15px', border: '1px solid #eee', borderRadius: '10px', backgroundColor: '#f9fafb', resize: 'none' }}
                                ></textarea>
                            </div>

                            <div className="form-actions" style={{ display: 'flex', gap: '15px' }}>
                                <button
                                    type="submit"
                                    className="btn btn-gold"
                                    disabled={saving}
                                    style={{ flex: 2, borderRadius: '12px' }}
                                >
                                    {saving ? 'Saving...' : 'Save Changes'}
                                </button>
                                <button
                                    type="button"
                                    className="btn"
                                    onClick={() => { setIsEditing(false); setStatus({ type: '', message: '' }); }}
                                    style={{ flex: 1, backgroundColor: '#eee', color: '#333', borderRadius: '12px', border: 'none' }}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
