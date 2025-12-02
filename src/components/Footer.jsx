import { useState } from 'react';
import './Footer.css';

const Footer = ({ faqs = [] }) => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {/* FAQ Section */}
            {faqs.length > 0 && (
                <section className="faq-section">
                    <div className="faq-container">
                        <h2 className="faq-title">Frequently asked questions</h2>

                        <div className="faq-list">
                            {faqs.map((faq, index) => (
                                <div key={index} className="faq-item">
                                    <button
                                        className="faq-question"
                                        onClick={() => toggleFaq(index)}
                                        aria-expanded={openFaq === index}
                                    >
                                        <span className="faq-number">{index + 1}.</span>
                                        <span className="faq-text">{faq.question}</span>
                                        <span className={`faq-arrow ${openFaq === index ? 'open' : ''}`}>▼</span>
                                    </button>
                                    {openFaq === index && (
                                        <div className="faq-answer">
                                            <p>{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="faq-contact-links">
                            <a href="#contact-sales" className="faq-contact-link">
                                Contact sales if you have additional questions.
                            </a>
                            <a href="#contact-support" className="faq-contact-link">
                                Contact support if you already submitted your visa application on our website.
                            </a>
                        </div>

                        <button className="back-to-top" onClick={scrollToTop}>
                            Back to top
                        </button>
                    </div>
                </section>
            )}

            {/* Footer Links Section */}
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
        </>
    );
};

export default Footer;

