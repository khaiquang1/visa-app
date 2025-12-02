import './ProgressIndicator.css';

const ProgressIndicator = ({ currentStep }) => {
    const steps = [
        { id: 1, label: 'Visa Options', completed: currentStep >= 1 },
        { id: 2, label: 'Applicant Details', completed: currentStep >= 2 },
        { id: 3, label: 'Review & Payment', completed: currentStep >= 3 },
    ];

    return (
        <div className="progress-indicator">
            <div className="progress-container">
                {steps.map((step, index) => (
                    <div key={step.id} className="progress-step-wrapper">
                        <div className={`progress-step ${step.completed ? 'completed' : ''} ${currentStep === step.id ? 'current' : ''}`}>
                            {step.completed ? (
                                <div className="checkmark">✓</div>
                            ) : (
                                <div className="step-number">{step.id}</div>
                            )}
                            <span className="step-label">{step.label}</span>
                        </div>
                        {index < steps.length - 1 && (
                            <div className={`progress-line ${step.completed ? 'completed' : ''}`}></div>
                        )}
                    </div>
                ))}
                {currentStep >= 3 && <div className="final-checkmark">✓</div>}
            </div>
        </div>
    );
};

export default ProgressIndicator;

