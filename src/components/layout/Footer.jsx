import React from 'react';
  import logoImage from '../../assets/images/logo-footer.png';
  import footerImage from '../../assets/images/EXPLANLABS.png';

const Footer = () => {
  const footerLinks = {
    Research: ['Text to Speech (TTS)', 'Speech to Text', 'Realtime Speech to Text', 'Voice Changer', 'Text to Sound Effects', 'Voice Cloning', 'Voice Isolator', 'AI Music Generator'],
    Products: ['Studio', 'Agents Platform', 'Dubbing Studio', 'Voice Library', 'Image & Video', 'Audio Native', 'API', 'Voiceover Studio', 'ElevenReader', 'Mobile App'],
    Solutions: ['For Enterprise', 'For Teams', 'For Developers', 'For Startups', 'For Students', 'Retail and E-Commerce', 'Telecommunications', 'Financial Services', 'Technology', 'Customer Support', 'AI Voice Agents'],
    'Earn As': ['Affiliate', 'Voice Actor', 'Data Partner', 'Commercial Partner', 'Text to Sound Effects', 'Voice Cloning', 'Voice Isolator', 'AI Music Generator'],
    Resources: ['API Reference', 'Product Guides', 'Help Centre', 'Languages', 'Webinars', 'Discord', 'Voice Isolator', 'AI Music Generator'],
    Company: ['About', 'Safety', 'Careers', 'Blog', 'Impact Program', 'Brand and Press Kit', 'Iconic Marketplace', 'Modern Slavery Policy', 'CCPA Notice']
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
                     <div className="logo">
             <img src={logoImage} alt="Explain Labs" className="logo-img" />
           </div>
          </div>

          <div className="footer-cta">
            <h3>Reach Everyone With Explain Labs</h3>
            <button className="footer-signup-btn">Sign up</button>
          </div>
        </div>

        {/* <div className="footer-links-grid">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="footer-column">
              <h4>{category}</h4>
              <ul>
                {links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}

        <div className="footer-bottom">
          <div>© 2025 Explain Labs</div>
          <div className="social-links">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">YouTube</a>
          </div>
        </div>
</div>


      <div>
             <img src={footerImage} alt="Explain Labs" className="logo-img" />

      </div>

      
    </footer>
  );
};

export default Footer;