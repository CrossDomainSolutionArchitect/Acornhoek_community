import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
  const logoUrl = 'https://i.imgur.com/I5SXjfk.png';

  return (
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

            <button
              onClick={() => handleNavClick('contact')}
              className="cta-button"
              aria-label="Get started"
            >
              Get Started
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
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
