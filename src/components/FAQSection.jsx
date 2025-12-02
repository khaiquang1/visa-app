import { useState } from 'react';
import './FAQSection.css';

const FAQSection = ({ faqs = [] }) => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (faqs.length === 0) return null;

  return (
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
  );
};

export default FAQSection;

