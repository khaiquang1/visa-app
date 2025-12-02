import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-links-row">
                    <div className="footer-links-primary">
                        <a href="#about" className="footer-link">About us</a>
                        <a href="#contact" className="footer-link">Contact us</a>
                        <a href="#feedback" className="footer-link">Feedback</a>
                        <a href="#airport" className="footer-link">Airport fast-track</a>
                        <a href="#faqs" className="footer-link">FAQs</a>
                    </div>
                </div>
                <div className="footer-links-row">
                    <div className="footer-links-secondary">
                        <a href="#disclaimer" className="footer-link-secondary">Disclaimer</a>
                        <a href="#terms" className="footer-link-secondary">Terms & Conditions</a>
                        <a href="#cookies" className="footer-link-secondary">Cookie Policy</a>
                        <a href="#privacy" className="footer-link-secondary">Privacy Policy</a>
                    </div>
                    <div className="footer-copyright">
                        © 2025 MyVietnamVisa.com
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

