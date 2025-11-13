import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, MessageCircle, Mail } from 'lucide-react';
import HeaderRobotic from './HeaderRobotic';

const Header = ({ currentPage, setCurrentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Automotive', 'Carpentry', 'Construction', 'Electrical', 'Welding'];

  const handleNavClick = (item) => {
    setCurrentPage(item.toLowerCase());
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const logoUrl = 'https://i.imgur.com/I5SXjfk_d.png?maxwidth=520&shape=thumb&fidelity=high';
  const logoUrlR = 'https://i.imgur.com/moP8IOp.png';

  return (
    <>
      <style>{`
        :root {
          --yellow: #F6B81A;
          --green-light: #3E7B44;
          --green-dark: #194E38;
          --text-green: #0E4734;
        }

        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: linear-gradient(135deg, var(--green-dark) 0%, var(--text-green) 100%);
          backdrop-filter: blur(12px);
          border-bottom: 3px solid rgba(194, 92, 13, 0.3);
          transition: all 0.3s ease;
        }
        .header.scrolled {
          box-shadow: 0 10px 40px rgba(246, 184, 26, 0.4);
        }

        .nav-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 1rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
        }

        /* LOGOS */
        .logos-group {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .logo-link {
          display: block;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          padding: 4px;
        }
        .logo-link:hover {
          transform: translateY(-4px) scale(1.05);
          filter: drop-shadow(0 10px 25px rgba(14, 71, 52, 0.2));
        }
        .logo-link:active {
          transform: translateY(-2px) scale(1.02);
        }

        .logo-img {
          height: 70px;
          width: auto;
          display: block;
          transition: all 0.3s ease;
        }

        @media (max-width: 767px) {
          .logo-img {
            height: 60px;
          }
          .logos-group {
            gap: 1rem;
          }
        }

        /* NAVIGATION */
        .desktop-nav {
          display: none;
          align-items: center;
          gap: 0.5rem;
          flex: 1;
          justify-content: flex-end;
        }
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex;
          }
        }

        .nav-link {
          background: none;
          border: none;
          color: white;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          padding: 0.6rem 1rem;
          border-radius: 8px;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
        }
        .nav-link:hover {
          color: var(--text-green);
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }
        .nav-link.active {
          color: var(--yellow);
          font-weight: 700;
          background: var(--green-dark);
        }

        /* SOCIAL ICONS */
        .social-icons {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          padding-left: 1rem;
          margin-left: 1rem;
          border-left: 2px solid rgba(25, 78, 56, 0.3);
        }
        .social-icon {
          color: var(--green-dark);
          transition: all 0.3s ease;
          padding: 8px;
          border-radius: 12px;
          display: flex;
          text-decoration: none;
        }
        .social-icon:hover {
          color: white;
          background: var(--green-dark);
          transform: translateY(-3px) rotate(5deg);
        }

        /* CTA BUTTON */
        .cta-button {
          padding: 0.75rem 1.8rem;
          background: var(--green-dark);
          color: var(--yellow);
          border: 2px solid var(--green-dark);
          border-radius: 9999px;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          margin-left: 1rem;
          box-shadow: 0 10px 30px rgba(25, 78, 56, 0.3);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .cta-button:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 20px 50px rgba(25, 78, 56, 0.5);
          background: var(--text-green);
          color: white;
        }

        /* MOBILE */
        .mobile-toggle {
          display: flex;
          background: none;
          border: none;
          color: var(--text-green);
          cursor: pointer;
          padding: 0.5rem;
        }
        @media (min-width: 768px) {
          .mobile-toggle {
            display: none;
          }
        }

        .mobile-menu {
          display: flex;
          flex-direction: column;
          padding: 1rem 0;
          border-top: 2px solid rgba(246, 184, 26, 0.2);
          margin-top: 1rem;
        }
        @media (min-width: 768px) {
          .mobile-menu {
            display: none;
          }
        }

        .mobile-item {
          background: none;
          border: none;
          padding: 0.85rem 1rem;
          text-align: left;
          color: var(--text-green);
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 8px;
        }
        .mobile-item:hover {
          background: linear-gradient(135deg, rgba(246, 184, 26, 0.1), rgba(62, 123, 68, 0.1));
          color: var(--green-light);
        }
        .mobile-item.active {
          color: var(--green-light);
          background: linear-gradient(135deg, rgba(246, 184, 26, 0.15), rgba(62, 123, 68, 0.15));
          font-weight: 600;
        }

        .mobile-cta {
          margin-top: 0.5rem;
          background: var(--green-dark);
          color: white;
          text-align: center;
          border-radius: 8px;
          font-weight: 700;
          padding: 0.75rem;
        }
        .mobile-cta:hover {
          background: var(--text-green);
        }

        .mobile-socials {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          padding: 1rem 0;
          border-top: 2px solid rgba(246, 184, 26, 0.2);
          margin-top: 0.5rem;
        }
      `}</style>

      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <nav className="nav-container">
          {/* LOGOS */}
          <div className="logos-group">
            <button
              className="logo-link"
              onClick={() => {
                setCurrentPage('about');
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              aria-label="1360 Local Economy Hub"
            >
              <img
                src={logoUrl}
                alt="1360 Local Economy Hub"
                className="logo-img"
              />
            </button>

            <button
              className="logo-link"
              onClick={() => {
                setCurrentPage('robotics');
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              aria-label="1360 Robotics Hub"
            >
              <img
                src={logoUrlR}
                alt="1360 Robotics Hub"
                className="logo-img"
              />
            </button>
          </div>

          {/* DESKTOP NAV */}
          <div className="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`nav-link ${currentPage === item.toLowerCase() ? 'active' : ''}`}
              >
                {item}
              </button>
            ))}

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
            >
              Hire our talent
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`mobile-item ${currentPage === item.toLowerCase() ? 'active' : ''}`}
              >
                {item}
              </button>
            ))}

            <button
              onClick={() => handleNavClick('contact')}
              className="mobile-item mobile-cta"
            >
              Hire our talent
            </button>

            <div className="mobile-socials">
              <a
                href="https://www.facebook.com/share/1N4nQXAEqw/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://chat.whatsapp.com/G41jvtdG9qt4vK90bdGn8o?mode=wwt"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <MessageCircle size={24} />
              </a>
              <a href="mailto:info@vcdsa.co.za" className="social-icon">
                <Mail size={24} />
              </a>
            </div>
          </div>
        )}
      </header>

      {currentPage === 'robotics' && (
        <HeaderRobotic currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}
    </>
  );
};

export default Header;