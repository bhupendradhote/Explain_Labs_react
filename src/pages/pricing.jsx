import React, { useState } from 'react';
import '../assets/styles/PricingPage.css';
import { FaCheck, FaPlus, FaMinus } from 'react-icons/fa';

// Import layout components
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

// Import Image
import pricingImage from '../assets/images/pricing.jpg';

const PricingPage = () => {
  const [openFaq, setOpenFaq] = useState(1);

  const faqs = [
    {
      question: 'WHAT IS USAGE-BASED BILLING?',
      answer: 'Usage-based billing allows you to pay only for what you use beyond your plan limits.'
    },
    {
      question: 'HOW DO TEXT CHARACTERS AND CREDITS WORK?',
      answer: 'For Our V1 English, V1 Multilingual And V2 Multilingual Models One Text Character Will Cost You 1 Credit. We Have Implemented Discounts To Our V2 Flash/Turbo English And V2.5 Flash/Turbo Multilingual Models Where You Will Now Pay Between 0.5 And 1 Credit Per Text Character. The Exact Price Will Depend On Your Price Plan.'
    },
    {
      question: 'CAN I PAUSE MY SUBSCRIPTION?',
      answer: 'Yes, you can pause your subscription at any time from your account settings.'
    },
    {
      question: 'WHAT IS USAGE-BASED BILLING?',
      answer: 'Usage-based billing ensures flexibility for heavy users.'
    }
  ];

  return (
    <div className="pricing-page-container">
      
      {/* 1. Header Component */}
      <Header />

      {/* Main Content */}
      <div className="pricing-header">
        <h1>Pricing</h1>
        <p className="subtitle">Plans built for creators and business of all sizes</p>
        <div className="breadcrumbs">Home &gt; Pricing</div>
      </div>

      <main className="main-content">

        {/* Pricing Cards Grid */}
        <div className="pricing-grid">

          {/* --- Free Card --- */}
          <div className={`pricing-card`}>
            <div className="card-content">
              <div className="card-header-row">
                <h3>Free</h3>
                <span className="old-price">$22</span>
              </div>

              <p className="card-desc">For Creators Making Premium Content For Global Audiences</p>
              <p className="card-credits ma-b">10k Credits/Month</p>

              <div className="price-row">
                <span className="price">$0</span>
                <span className="period">Per Month</span>
              </div>

              <ul className="features-list">
                <li>
                  <div className="check-icon">
                    <FaCheck size={8} />
                  </div>
                  <span>Everything in Starter, Plus</span>
                </li>
                <li>
                  <div className="check-icon">
                    <FaCheck size={8} />
                  </div>
                  <span>Professional Voice Cloning</span>
                </li>

                {/* <p className="dummy-text">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
                </p> */}
              </ul>

              <button className="card-cta">
                Get Started <span className="arrow">›</span>
              </button>
            </div>
          </div>
        <div className="card-header-absolute">
            Most Popular
          </div>
          {/* --- Creator Card (highlighted / most popular) --- */}
          <div className={`pricing-card highlight`}>

            <div className="card-content">
              <div className="card-header-row">
                <h3>Creator</h3>
                <span className="old-price">$22</span>
              </div>

              <p className="card-desc">For Creators Making Premium Content For Global Audiences</p>
              <p className="card-credits">100k Credits/Month</p>

              <span className="promo-badge">First Month 50% Off</span>

              <div className="price-row">
                <span className="price">$11</span>
                <span className="period">Per Month</span>
              </div>

              <ul className="features-list">
                <li>
                  <div className="check-icon">
                    <FaCheck size={8} />
                  </div>
                  <span>Everything in Starter, Plus</span>
                </li>
                <li>
                  <div className="check-icon">
                    <FaCheck size={8} />
                  </div>
                  <span>Professional Voice Cloning</span>
                </li>
                <li>
                  <div className="check-icon">
                    <FaCheck size={8} />
                  </div>
                  <span>Usage Based Billing For Additional Credits</span>
                </li>
                <li>
                  <div className="check-icon">
                    <FaCheck size={8} />
                  </div>
                  <span>Higher Quality Audio 192 Kbps</span>
                </li>

                <p className="dummy-text">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
                </p>
              </ul>

              <button className="card-cta">
                Get Started <span className="arrow">›</span>
              </button>
            </div>
          </div>

          {/* --- Pro Card --- */}
          <div className={`pricing-card`}>
            <div className="card-content">
              <div className="card-header-row">
                <h3>Pro</h3>
              </div>

              <p className="card-desc">For Creators Ramping Up Their Content Production</p>
              <p className="card-credits ma-b">500k Credits/Month</p>

              <div className="price-row">
                <span className="price">$99</span>
                <span className="period">Per Month</span>
              </div>

              <ul className="features-list">
                <li>
                  <div className="check-icon">
                    <FaCheck size={8} />
                  </div>
                  <span>Everything in Creator, Plus</span>
                </li>
                <li>
                  <div className="check-icon">
                    <FaCheck size={8} />
                  </div>
                  <span>300 Minutes Of High-Quality Text To Speech</span>
                </li>
                <li>
                  <div className="check-icon">
                    <FaCheck size={8} />
                  </div>
                  <span>1,100 Minutes Of Agents</span>
                </li>

                {/* <p className="dummy-text">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
                </p> */}
              </ul>

              <button className="card-cta">
                Get Started <span className="arrow">›</span>
              </button>
            </div>
          </div>

        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <div className="faq-image">
            <img src={pricingImage} alt="Abstract Visualization" />
            <div className="faq-label">
              <p className='faq-one'>F</p>
              <p className='faq-two'>A</p>
              <p className='faq-three'>Q</p>
            </div>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                >
                  <span>{faq.question}</span>
                  {openFaq === index ? <FaMinus size={12}/> : <FaPlus size={12}/>}
                </button>
                {openFaq === index && (
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </main>

      {/* 2. Footer Component */}
      <Footer />

    </div>
  );
};

export default PricingPage;
