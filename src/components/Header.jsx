import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram, MessageCircle, Mail } from 'lucide-react';

const Header = ({ currentPage, setCurrentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Nav labels: About + trade pages
  const navItems = [
    'About',
    'Automotive',
    'Carpentry',
    'Construction',
    'Electrical',
    'Welding'
  ];

  const handleNavClick = (item) => {
    const key = item.toLowerCase();
    setCurrentPage(key);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Use Imgur logo URL
  const logoUrl = 'https://i.imgur.com/ujeBXVr.png';

  return (
    <>
      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: white;
          transition: box-shadow 0.3s ease;
        }
        
        .header.scrolled {
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        .nav-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 1rem 2rem;
        }
        
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo-wrapper {
          cursor: pointer;
          display: flex;
          align-items: center;
        }
        
        .logo-img {
          height: 50px;
          width: auto;
        }
        
        .desktop-nav {
          display: none;
          align-items: center;
          gap: 2rem;
        }
        
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex;
          }
        }
        
        .nav-link {
          background: none;
          border: none;
          color: #374151;
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          padding: 0.5rem 0;
          position: relative;
          transition: color 0.3s ease;
        }
        
        .nav-link:hover {
          color: #059669;
        }
        
        .nav-link.active {
          color: #059669;
          font-weight: 600;
        }
        
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: #059669;
        }
        
        .social-icons {
          display: flex;
          gap: 0.75rem;
          align-items: center;
          margin-left: 1rem;
          padding-left: 1rem;
          border-left: 1px solid #e5e7eb;
        }
        
        .social-icon {
          color: #059669;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
        }
        
        .social-icon:hover {
          color: #047857;
          transform: translateY(-2px);
        }
        
        .cta-button {
          padding: 0.625rem 1.5rem;
          background: #059669;
          color: white;
          border: none;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-left: 1rem;
        }
        
        .cta-button:hover {
          background: #047857;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(5, 150, 105, 0.3);
        }
        
        .mobile-menu-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          color: #374151;
          cursor: pointer;
          padding: 0.5rem;
        }
        
        @media (min-width: 768px) {
          .mobile-menu-toggle {
            display: none;
          }
        }
        
        .mobile-menu {
          display: flex;
          flex-direction: column;
          padding: 1rem 0;
          border-top: 1px solid #e5e7eb;
          margin-top: 1rem;
        }
        
        @media (min-width: 768px) {
          .mobile-menu {
            display: none;
          }
        }
        
        .mobile-menu-item {
          background: none;
          border: none;
          padding: 0.75rem 1rem;
          text-align: left;
          color: #374151;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .mobile-menu-item:hover {
          background: #f0fdf4;
          color: #059669;
        }
        
        .mobile-menu-item.active {
          color: #059669;
          background: #f0fdf4;
          font-weight: 600;
        }
        
        .cta-mobile {
          margin-top: 0.5rem;
          background: #059669;
          color: white;
          text-align: center;
          border-radius: 0.5rem;
          font-weight: 600;
        }
        
        .cta-mobile:hover {
          background: #047857;
        }
        
        .mobile-social-icons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          padding: 1rem 0;
          border-top: 1px solid rgba(5, 150, 105, 0.2);
          margin-top: 0.5rem;
        }
      `}</style>

      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <nav className="nav-container" role="navigation" aria-label="Main navigation">
          <div className="nav-content">
            <div
              className="logo-wrapper"
              onClick={() => { setCurrentPage('about'); setMobileMenuOpen(false); }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') { setCurrentPage('about'); setMobileMenuOpen(false); } }}
              aria-label="Go to About"
            >
              <img src={logoUrl} alt="1360 Local Economy Hub Logo" className="logo-img" />
            </div>

            <div className="desktop-nav" aria-hidden={mobileMenuOpen}>
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`nav-link ${currentPage === item.toLowerCase() ? 'active' : ''}`}
                  aria-current={currentPage === item.toLowerCase() ? 'page' : undefined}
                >
                  {item}
                </button>
              ))}

              {/* Social Media Icons */}
              <div className="social-icons">
                <a 
                  href="https://www.facebook.com/share/1N4nQXAEqw/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://chat.whatsapp.com/G41jvtdG9qt4vK90bdGn8o?mode=wwt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={20} />
                </a>
                {/* <a 
                  href="https://tiktok.com/@yourhandle" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon disabled"
                  aria-label="TikTok"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com/yourhandle" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a> */}
                <a 
                  href="mailto:info@vcdsa.co.za" 
                  className="social-icon"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>

              <button
                onClick={() => handleNavClick('contact')}
                className="cta-button"
                aria-label="Get started"
              >
                Hire our talent
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen((s) => !s)}
              className="mobile-menu-toggle"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="mobile-menu" role="menu" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`mobile-menu-item ${currentPage === item.toLowerCase() ? 'active' : ''}`}
                  role="menuitem"
                >
                  {item}
                </button>
              ))}

              <button
                onClick={() => handleNavClick('contact')}
                className="mobile-menu-item cta-mobile"
                role="menuitem"
              >
                Hire our talent
              </button>

              {/* Social Media Icons - Mobile */}
              <div className="mobile-social-icons">
                <a 
                  href="https://www.facebook.com/share/1N4nQXAEqw/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
                <a 
                  href="https://chat.whatsapp.com/G41jvtdG9qt4vK90bdGn8o?mode=wwt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={24} />
                </a>
                <a 
                  href="https://tiktok.com/@yourhandle" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="TikTok"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com/yourhandle" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a 
                  href="mailto:info@1360hub.co.za" 
                  className="social-icon"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;