import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProgressIndicator from './components/ProgressIndicator';
import VisaForm from './components/VisaForm';
import Footer from './components/Footer';
import { faqs, expeditedFaqs } from './data/visaData';

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleStepChange = (step) => {
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Header />
      <ProgressIndicator currentStep={currentStep} />
      <main className="main-content">
        <div className="content-container">
          <div className="form-wrapper">
            <VisaForm currentStep={currentStep} onStepChange={handleStepChange} />
          </div>
        </div>
      </main>
      <Footer faqs={currentStep === 1 ? faqs : expeditedFaqs} />
    </div>
  );
}

export default App;
