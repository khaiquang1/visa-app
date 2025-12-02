import './Sidebar.css';

const Sidebar = ({ summary, totalFee }) => {
    return (
        <aside className="sidebar">
            <div className="sidebar-content">
                {summary && (
                    <div className="summary-section">
                        <h3 className="sidebar-title">Summary</h3>
                        <div className="summary-list">
                            {Object.entries(summary).map(([key, value]) => (
                                <div key={key} className="summary-item">
                                    <span className="summary-label">{key}:</span>
                                    <span className="summary-value">{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {totalFee && (
                    <div className="total-fee-section">
                        <h3 className="total-fee-title">TOTAL SERVICE FEE:</h3>
                        <div className="total-fee-amount">{totalFee}</div>
                        <p className="total-fee-note">
                            This fee is for expedited service only and NOT include US$25 e-visa fees on the government website.
                        </p>
                    </div>
                )}

                <div className="trust-badges">
                    <div className="trust-badge">
                        <div className="badge-header">
                            <span className="badge-rating">Excellent 4.8</span>
                            <span className="badge-stars">★★★★★</span>
                        </div>
                        <span className="badge-source">Trustpilot</span>
                    </div>

                    <div className="trust-badge">
                        <div className="badge-icon">🔒</div>
                        <div className="badge-content">
                            <strong>SSL SECURE PAYMENT</strong>
                            <p>Your information is protected by 128-bit SSL encryption</p>
                        </div>
                    </div>

                    <div className="trust-badge">
                        <div className="badge-icon guarantee">100%</div>
                        <div className="badge-content">
                            <strong>100% MONEY BACK GUARANTEE</strong>
                            <p>We offer full refund for the service fee if your application is declined.</p>
                        </div>
                    </div>

                    <div className="trust-badge">
                        <div className="badge-content">
                            <strong>Recommended on New York Times</strong>
                            <p>
                                My Vietnam Visa is featured on many forums, news websites and recommended by fellow travelers.{' '}
                                <a href="#testimonials" className="testimonial-link">
                                    Check out our customers' testimonials!
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {summary && (
                    <div className="confidence-section">
                        <h3 className="sidebar-title">Book with confidence</h3>
                        <ul className="confidence-list">
                            <li>✓ 99% On Time Delivery</li>
                            <li>✓ 15+ Years of Experience</li>
                            <li>✓ Secure Payment</li>
                            <li>✓ Prompt Customer Support</li>
                        </ul>
                    </div>
                )}
            </div>
        </aside>
    );
};

export default Sidebar;

