import './FormField.css';

const FormField = ({
    label,
    type = 'text',
    value,
    onChange,
    placeholder,
    options = [],
    required = false,
    infoIcon = false,
    infoText = '',
    error = '',
    helperText = '',
    ...props
}) => {
    const renderInput = () => {
        if (type === 'select') {
            return (
                <select
                    className={`form-input ${error ? 'error' : ''}`}
                    value={value}
                    onChange={onChange}
                    required={required}
                    {...props}
                >
                    <option value="">{placeholder || 'Select...'}</option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            );
        }

        if (type === 'number') {
            return (
                <input
                    type="number"
                    className={`form-input ${error ? 'error' : ''}`}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    min="1"
                    {...props}
                />
            );
        }

        if (type === 'date') {
            return (
                <input
                    type="date"
                    className={`form-input ${error ? 'error' : ''}`}
                    value={value}
                    onChange={onChange}
                    required={required}
                    {...props}
                />
            );
        }

        return (
            <input
                type={type}
                className={`form-input ${error ? 'error' : ''}`}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                {...props}
            />
        );
    };

    return (
        <div className="form-field">
            <label className="form-label">
                {label}
                {required && <span className="required">*</span>}
                {infoIcon && (
                    <span className="info-icon" title={infoText}>
                        ℹ️
                    </span>
                )}
            </label>
            {renderInput()}
            {helperText && <p className="helper-text">{helperText}</p>}
            {error && <p className="error-text">{error}</p>}
        </div>
    );
};

export default FormField;

