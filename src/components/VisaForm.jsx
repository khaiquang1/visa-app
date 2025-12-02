import { useState } from 'react';
import './VisaForm.css';
import VisaOptionCard from './VisaOptionCard';
import Modal from './Modal';
import FormField from './FormField';
import ProcessingTimeSelector from './ProcessingTimeSelector';
import Sidebar from './Sidebar';
import { entryPorts, visaTypes, countryCodes, faqs, expeditedFaqs } from '../data/visaData';

const VisaForm = ({ currentStep, onStepChange }) => {
  const [formData, setFormData] = useState({
    visaType: 'evisa',
    hasApplied: null,
    numberOfApplicants: 1,
    visaTypeOption: '1month-single',
    entryPort: '',
    exitPort: '',
    processingTime: 'standard',
    evisaCode: '',
    email: '',
    customerName: '',
    primaryEmail: '',
    confirmEmail: '',
    countryCode: '+84',
    phoneNumber: '',
  });

  const [showModal, setShowModal] = useState(false);
  const [isExpedited, setIsExpedited] = useState(false);

  const calculateDeliveryTime = (processingTime) => {
    const now = new Date();
    const deliveryTimes = {
      standard: { days: 6, hours: 0 },
      urgent2: { days: 2, hours: 0 },
      urgent1: { days: 1, hours: 0 },
      sameday: { days: 0, hours: 6 },
    };

    const { days, hours } = deliveryTimes[processingTime] || deliveryTimes.standard;
    const delivery = new Date(now);
    delivery.setDate(delivery.getDate() + days);
    delivery.setHours(delivery.getHours() + hours);

    const options = { 
      hour: '2-digit', 
      minute: '2-digit',
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    };
    
    const formatted = delivery.toLocaleString('en-US', options);
    const diffDays = days;
    const diffHours = hours;
    
    return `${formatted} (${diffDays} days ${diffHours} hours from now)`;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleVisaSelect = (type) => {
    if (type === 'evisa') {
      setShowModal(true);
    }
  };

  const handleModalNext = (hasApplied) => {
    setFormData(prev => ({ ...prev, hasApplied }));
    setIsExpedited(hasApplied === 'yes');
    setShowModal(false);
    if (hasApplied === 'yes') {
      onStepChange(2);
    } else {
      onStepChange(2);
    }
  };

  const handleNext = () => {
    if (currentStep === 1) {
      onStepChange(2);
    } else if (currentStep === 2) {
      onStepChange(3);
    }
  };

  const renderStep1 = () => (
    <div className="visa-options-step">
      <h1 className="form-title">Online Vietnamese Visa Application</h1>
      
      <div className="visa-cards-container">
        <VisaOptionCard
          type="Visa on arrival"
          available={false}
          features={[
            'Tourist visas (1 month)',
            'Emergency entry only',
            'Air travel only (flights)',
          ]}
          disabled
        />
        <VisaOptionCard
          type="E-visa"
          available={true}
          features={[
            'Tourist visas (1 month / 3 month)',
            'Entry types (Single / Multiple)',
            'Air, overland, cruiseship entry',
          ]}
          onSelect={() => handleVisaSelect('evisa')}
        />
      </div>

      <div className="note-box">
        <p>
          Currently, Emergency visa approval letter (visa on arrival) is issued for 30 days / single entry. 
          The service fee DOES NOT include 25 USD for stamping fee at Vietnam airport.
        </p>
      </div>

      <div className="comparison-table-section">
        <h2 className="section-title">Visa On Arrival vs E-Visa</h2>
        <p className="section-subtitle">Compare the main differences between visa on arrival and e-visa for Vietnam:</p>
        
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Major differences</th>
              <th>Visa on arrival</th>
              <th>E-Visa</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Single entry (1 month)</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Multiple entry (1 month / 3 months)</td>
              <td>Yes</td>
              <td>Yes (Effective from August 15, 2023)</td>
            </tr>
            <tr>
              <td>Standard processing</td>
              <td>3-5 working days</td>
              <td>5-7 working days</td>
            </tr>
            <tr>
              <td>Stamping fee at Vietnam airport</td>
              <td>US$25 for single entry</td>
              <td>Not required (All included)</td>
            </tr>
            <tr>
              <td>Photo requirement</td>
              <td>2 photos at Vietnam airport</td>
              <td>4*6 cm, no glasswear, recently taken</td>
            </tr>
            <tr>
              <td>Scanned passport bio page</td>
              <td>No</td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>

        <div className="note-box">
          <p>
            Notes: As of 2025, visa on arrival service is only applicable to individuals entering Vietnam 
            in emergency or urgent situations.
          </p>
        </div>
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Vietnamese E-visa Application"
      >
        <div className="modal-form">
          <p className="modal-question">Have you applied for your e-visa yet? (select one):</p>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="hasApplied"
                value="no"
                checked={formData.hasApplied === 'no'}
                onChange={(e) => handleInputChange('hasApplied', e.target.value)}
              />
              <span>NO, I have not applied for an e-visa yet</span>
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="hasApplied"
                value="yes"
                checked={formData.hasApplied === 'yes'}
                onChange={(e) => handleInputChange('hasApplied', e.target.value)}
              />
              <span>YES, I have already applied and I need to expedite my ongoing e-visa application</span>
            </label>
          </div>
          <button
            className="modal-next-button"
            onClick={() => handleModalNext(formData.hasApplied)}
            disabled={!formData.hasApplied}
          >
            NEXT
          </button>
        </div>
      </Modal>
    </div>
  );

  const renderStep2 = () => (
    <div className="application-form-step">
      <h1 className="form-title">
        {isExpedited ? 'Expedited eVisa Application Form' : 'Vietnam E-visa Application Form'}
      </h1>

      <div className="two-column-layout">
        <div className="form-container">
          <FormField
            label="Number of applicants"
            type="number"
            value={formData.numberOfApplicants}
            onChange={(e) => handleInputChange('numberOfApplicants', e.target.value)}
          />

          {!isExpedited && (
            <FormField
              label="Type of visas"
              type="select"
              value={formData.visaTypeOption}
              onChange={(e) => handleInputChange('visaTypeOption', e.target.value)}
              options={visaTypes}
              infoIcon={true}
              infoText="Select the type of visa you need"
            />
          )}

          <FormField
            label="Intended entry ports"
            type="select"
            value={formData.entryPort}
            onChange={(e) => handleInputChange('entryPort', e.target.value)}
            options={entryPorts}
            required
            infoIcon={true}
            infoText="Please ensure that you select the same port of entry that you previously chose while applying on the official e-visa website."
          />

          <FormField
            label="Intended exit ports"
            type="select"
            value={formData.exitPort}
            onChange={(e) => handleInputChange('exitPort', e.target.value)}
            options={entryPorts}
            required
            infoIcon={true}
            infoText="Please ensure that you select the same port of exit that you previously chose while applying on the official e-visa website."
          />

          {isExpedited && (
            <>
              <FormField
                label="E-Visa Code"
                type="text"
                value={formData.evisaCode}
                onChange={(e) => handleInputChange('evisaCode', e.target.value)}
                placeholder="e.g. E220731INDZ558244139"
                required
              />
              <FormField
                label="Email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="Your email address"
                required
                helperText="This is the email that you used for the e-visa application on the official e-visa website."
              />
            </>
          )}

          <ProcessingTimeSelector
            value={formData.processingTime}
            onChange={(value) => handleInputChange('processingTime', value)}
            estimatedDelivery={calculateDeliveryTime(formData.processingTime)}
          />

          <button className="next-button" onClick={handleNext}>
            NEXT STEP
          </button>

          <p className="current-time">
            (Current time in Vietnam: {new Date().toLocaleString('en-US', {
              hour: '2-digit',
              minute: '2-digit',
              timeZone: 'Asia/Ho_Chi_Minh',
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })})
          </p>
        </div>

        <Sidebar />
      </div>
    </div>
  );

  const renderStep3 = () => {
    const summary = {
      'Number of Visa:': `${formData.numberOfApplicants} Applicant${formData.numberOfApplicants > 1 ? 's' : ''}`,
      'Intended entry ports:': entryPorts.find(p => p.value === formData.entryPort)?.label || formData.entryPort,
      'Intended exit ports:': entryPorts.find(p => p.value === formData.exitPort)?.label || formData.exitPort,
      'Processing Time:': formData.processingTime === 'standard' ? 'Standard processing (5-7 working days)' :
                          formData.processingTime === 'urgent2' ? 'Urgent 2 Working Days (Mon-Fri)' :
                          formData.processingTime === 'urgent1' ? 'Urgent 1 Working Day (Mon-Fri)' :
                          'Same Day (4-8 Working Hours)',
      'Estimated delivery time': calculateDeliveryTime(formData.processingTime),
    };

    const serviceFee = formData.processingTime === 'standard' ? '$29' :
                      formData.processingTime === 'urgent2' ? '$69' :
                      formData.processingTime === 'urgent1' ? '$89' :
                      '$129';

    return (
      <div className="review-payment-step">
        <h1 className="form-title">Review & Payment</h1>

        <div className="two-column-layout">
          <div className="main-content">
            <div className="form-section">
              <h2 className="section-title">Visa Information</h2>
              <div className="applicant-badge">Applicant 1</div>
              
              {isExpedited && (
                <>
                  <FormField
                    label="E-Visa Code"
                    type="text"
                    value={formData.evisaCode}
                    onChange={(e) => handleInputChange('evisaCode', e.target.value)}
                    placeholder="e.g. E220731INDZ558244139"
                    required
                  />
                  <FormField
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Your email address"
                    required
                    helperText="This is the email that you used for the e-visa application on the official e-visa website."
                  />
                </>
              )}

              <h2 className="section-title">Contact Information</h2>
              
              <FormField
                label="Customer Name"
                type="text"
                value={formData.customerName}
                onChange={(e) => handleInputChange('customerName', e.target.value)}
                placeholder="Your Name"
                required
              />

              <div className="form-row">
                <FormField
                  label="Primary Email"
                  type="email"
                  value={formData.primaryEmail}
                  onChange={(e) => handleInputChange('primaryEmail', e.target.value)}
                  placeholder="Your email address"
                  required
                  helperText="Your most frequently used email, we will send E-visa to this email."
                />
                <FormField
                  label="Confirm Email"
                  type="email"
                  value={formData.confirmEmail}
                  onChange={(e) => handleInputChange('confirmEmail', e.target.value)}
                  placeholder="Repeat your email address"
                  required
                />
              </div>

              <FormField
                label="Mobile phone"
                type="text"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                placeholder="Your Phone Number"
                required
                helperText="This is important, we will contact you in case your email does not work."
              />

              <div className="phone-input-wrapper">
                <select
                  className="country-code-select"
                  value={formData.countryCode}
                  onChange={(e) => handleInputChange('countryCode', e.target.value)}
                >
                  {countryCodes.map(code => (
                    <option key={code.value} value={code.value}>
                      {code.label}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  className="phone-input"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  placeholder="Your Phone Number"
                />
              </div>

              <h2 className="section-title">Payment Method</h2>
              
              <div className="payment-options">
                <label className="radio-option">
                  <input type="radio" name="payment" value="card" defaultChecked />
                  <span>Credit/Debit Cards</span>
                </label>
              </div>

              <div className="captcha-box">
                <div className="captcha-placeholder">
                  <span>🤖</span>
                  <span>Click to start verification</span>
                </div>
                <p className="captcha-label">FriendlyCaptcha</p>
              </div>

              <div className="secure-payment-badge">
                <span>✓</span>
                <span>Safe & Secure Payment</span>
              </div>

              <button className="submit-button">
                🔒 SUBMIT PURCHASE
              </button>
            </div>
          </div>

          <Sidebar summary={summary} totalFee={`${serviceFee} US`} />
        </div>
      </div>
    );
  };

  return (
    <div className="visa-form">
      {currentStep === 1 && renderStep1()}
      {currentStep === 2 && renderStep2()}
      {currentStep === 3 && renderStep3()}
    </div>
  );
};

export default VisaForm;

