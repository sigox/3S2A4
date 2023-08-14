import './App.css';
import StepProgess from './components/StepProgess';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import ProgressControl from './components/ProgressControl';

export default function App() {
  return (
    <div>
      <section class="register-container col col-lg-6 col-sm-12" data-phase="1" data-total-price="0">          
        <StepProgess />
        <section class="form-container col col-12">
          <Step1 />
          <Step2 />
          <Step3 />
        </section>
      </section>
      <ProgressControl />
    </div>
  );
}