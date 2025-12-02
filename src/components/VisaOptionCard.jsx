import './VisaOptionCard.css';

const VisaOptionCard = ({ type, available, features, onSelect, disabled }) => {
    return (
        <div className={`visa-option-card ${available ? 'available' : 'unavailable'} ${disabled ? 'disabled' : ''}`}>
            <div className="card-header">
                <div className="card-icon">📘</div>
                <div className="card-status">
                    {available ? (
                        <>
                            <span className="status-icon available">✓</span>
                            <span className="status-text available">Available</span>
                        </>
                    ) : (
                        <>
                            <span className="status-icon unavailable">✗</span>
                            <span className="status-text unavailable">Not Available</span>
                        </>
                    )}
                </div>
            </div>

            <h3 className="card-title">{type}</h3>

            <ul className="card-features">
                {features.map((feature, index) => (
                    <li key={index} className={`feature-item ${available ? 'available' : 'unavailable'}`}>
                        {available ? '✓' : '☐'} {feature}
                    </li>
                ))}
            </ul>

            <button
                className={`card-button ${available ? 'available' : 'unavailable'}`}
                onClick={onSelect}
                disabled={disabled || !available}
            >
                {available ? 'APPLY NOW' : 'NOT AVAILABLE'}
            </button>
        </div>
    );
};

export default VisaOptionCard;

