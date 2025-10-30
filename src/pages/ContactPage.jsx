import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', service: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will contact you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', message: '', service: '' });
  };

  return (
    <section className="page-section">
      <div className="page-container">
        <div className="page-header">
          <h1 className="page-title">📬 Get In Touch</h1>
          <p className="page-description">Contact 1360 Hub for consultation, training, or partnership opportunities.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info-section">
            <div className="contact-info-box">
              <h3>Contact Information</h3>
              <div className="contact-info-items">
                <div className="contact-info-item">
                  <Mail className="contact-icon" size={20} />
                  <span>Email: info@1360hub.org.za</span>
                </div>
                <div className="contact-info-item">
                  <Phone className="contact-icon" size={20} />
                  <span>Phone: +27 71 234 5670</span>
                </div>
                <div className="contact-info-item">
                  <MapPin className="contact-icon" size={20} />
                  <span>Location: Acornhoek, Mpumalanga</span>
                </div>
              </div>
            </div>

            <div className="business-hours-box">
              <h3>Business Hours</h3>
              <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
              <p>Saturday: By Appointment</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <div className="contact-form-box">
            <h3>Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              {['name','email','phone','message'].map((field,i) => (
                <div className="form-group" key={i}>
                  <label>{field === 'name' ? 'Full Name *' : field === 'email' ? 'Email *' : field === 'phone' ? 'Phone' : 'Message *'}</label>
                  {field === 'message' ? 
                    <textarea value={formData[field]} onChange={(e)=>setFormData({...formData,[field]:e.target.value})} rows="4" required className="form-textarea"></textarea> :
                    <input type={field==='email'?'email':'text'} value={formData[field]} onChange={(e)=>setFormData({...formData,[field]:e.target.value})} className="form-input" required={field!=='phone'} />}
                </div>
              ))}
              <div className="form-group">
                <label>Service Interested In</label>
                <select value={formData.service} onChange={(e)=>setFormData({...formData,service:e.target.value})} className="form-select">
                  <option value="">Select a service...</option>
                  <option value="wellness">Automotive</option>
                  <option value="training">Carpentry</option>
                  <option value="recruitment">Construction</option>
                  <option value="coaching">Electrical</option>
                  <option value="organizational">Welding</option>
                  <option value="profiling">Join the Hub</option>
                </select>
              </div>
              <button type="submit" className="form-submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
