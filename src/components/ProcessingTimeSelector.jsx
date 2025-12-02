import './ProcessingTimeSelector.css';

const ProcessingTimeSelector = ({ value, onChange, estimatedDelivery }) => {
    const options = [
        { value: 'standard', label: 'Standard processing (5-7 working days)' },
        { value: 'urgent2', label: 'Urgent 2 Working Days (Mon-Fri)' },
        { value: 'urgent1', label: 'Urgent 1 Working Day (Mon-Fri)' },
        { value: 'sameday', label: 'Same Day (4-8 Working Hours)' },
    ];

    return (
        <div className="processing-time-selector">
            <label className="selector-label">Processing Time</label>
            <div className="radio-group">
                {options.map((option) => (
                    <label key={option.value} className="radio-option">
                        <input
                            type="radio"
                            name="processingTime"
                            value={option.value}
                            checked={value === option.value}
                            onChange={(e) => onChange(e.target.value)}
                        />
                        <span className="radio-label">{option.label}</span>
                    </label>
                ))}
            </div>
            {estimatedDelivery && (
                <div className="delivery-time-box">
                    <span className="delivery-icon">⚠️</span>
                    <div className="delivery-content">
                        <strong>Estimated delivery time</strong>
                        <p>{estimatedDelivery}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProcessingTimeSelector;

