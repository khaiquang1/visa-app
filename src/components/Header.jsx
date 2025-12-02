import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo-section">
                    <div className="logo-icon">🌏</div>
                    <span className="logo-text">MYVIETNAMVISA</span>
                </div>
                <button className="help-button">Help</button>
            </div>
        </header>
    );
};

export default Header;

