import minus from './icons/minus.svg';
import plus from './icons/plus.svg';
import './App.css';
import StepProgess from './components/StepProgess';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import ProgressControl from './components/ProgressControl';

export default function App() {
  return (
    <main class="site-main">
      <div class="main-container">
        <section class="register-container col col-lg-6 col-sm-12" data-phase="1" data-total-price="0">
          <h2 class="register-title col col-12">結帳</h2>
          <StepProgess />
          <section class="form-container col col-12">
            <Step1 />
            <Step2 />
            <Step3 />
          </section>
        </section>
        <section class="cart-container col col-lg-5 col-sm-12">
          <h3 class="cart-title">購物籃</h3>
          <section class="product-list col col-12" data-total-price="0">
            <div class="product-container col col-12" data-count="0" data-price="3999">
              <img class="img-container"src="./images/product-1.jpg" alt="" />
              <div class="product-info">
                <div class="product-name">破壞補丁修身牛仔褲</div>
                <div class="product-control-container">
                  <div class="product-control">
                    <img src={minus} class="product-action minus" alt="" />
                    <span class="product-count">0</span>
                    <img src={plus} class="product-action plus" alt="" />
                  </div>
                </div>
                <div class="price">$0</div>
              </div>
            </div>
            <div class="product-container col col-12" data-count="0" data-price="1299">
              <img class="img-container" src="./images/product-2.jpg" alt="" />
              <div class="product-info">
                <div class="product-name">刷色直筒牛仔褲</div>
                <div class="product-control-container">
                  <div class="product-control">
                    <img src={minus} class="product-action minus" alt="" />
                    <span class="product-count">0</span>
                    <img src={plus} class="product-action plus" alt="" />
                  </div>
                </div>
                <div class="price">$0</div>
              </div>
            </div>
          </section>
          <section class="cart-info shipping col col-12">
            <div class="text">運費</div>
            <div class="price">免費</div>
          </section>
          <section class="cart-info total col col-12">
            <div class="text">小計</div>
            <div class="price">$0</div>
          </section>
        </section>
        <ProgressControl />
      </div>
    </main>
  );
}