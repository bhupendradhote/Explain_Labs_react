import React, { useState } from 'react';
import '../assets/styles/PricingPage.css';
import { FaCheck, FaPlus, FaMinus } from 'react-icons/fa';

// Import layout components
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

// Import Image
import pricingImage from '../assets/images/pricing.jpg';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('yearly');
  const [openFaq, setOpenFaq] = useState(1);

  const plans = [
    {
      name: 'Free',
      description: 'For Creators Making Premium Content For Global Audiences',
      credits: '10k Credits/Month',
      price: '$0',
      period: 'Per Month',
      features: ['Everything in Starter, Plus', 'Professional Voice Cloning'],
      cta: 'Get Started',
      highlight: false
    },
    {
      name: 'Creator',
      description: 'For Creators Making Premium Content For Global Audiences',
      credits: '100k Credits/Month',
      price: '$11',
      oldPrice: '$22',
      period: 'Per Month',
      badge: 'First Month 50% Off',
      features: [
        'Everything in Starter, Plus',
        'Professional Voice Cloning',
        'Usage Based Billing For Additional Credits',
        'Higher Quality Audio 192 Kbps'
      ],
      cta: 'Get Started',
      highlight: true,
      popular: true
    },
    {
      name: 'Pro',
      description: 'For Creators Ramping Up Their Content Production',
      credits: '500k Credits/Month',
      price: '$99',
      period: 'Per Month',
      features: [
        'Everything in Creator, Plus',
        '300 Minutes Of High-Quality Text To Speech',
        '1,100 Minutes Of Agents'
      ],
      cta: 'Get Started',
      highlight: false
    }
  ];

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
            {/* Header Section */}
        <div className="pricing-header">
          <h1>Pricing</h1>
          <p className="subtitle">Plans built for creators and business of all sizes</p>
          <div className="breadcrumbs">Home &gt; Pricing</div>

          
        </div>
      <main className="main-content">
        
  
{/* Toggle */}
          <div className="toggle-container">
            <div className="toggle-bg">
              <button 
                onClick={() => setBillingCycle('monthly')}
                className={`toggle-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
              >
                Monthly Billed
              </button>
              <button 
                onClick={() => setBillingCycle('yearly')}
                className={`toggle-btn ${billingCycle === 'yearly' ? 'active dark' : ''}`}
              >
                Yearly Billed
              </button>
            </div>
          </div>
        {/* Pricing Cards Grid */}
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`pricing-card ${plan.highlight ? 'highlight' : ''}`}
            >
              {plan.popular && (
                <div className="popular-badge">Most Popular</div>
              )}
              
              <div className="card-content">
                <div className="card-header-row">
                  <h3>{plan.name}</h3>
                  {plan.oldPrice && <span className="old-price">{plan.oldPrice}</span>}
                </div>
                
                <p className="card-desc">{plan.description}</p>
                <p className="card-credits">{plan.credits}</p>

                {plan.badge && (
                  <span className="promo-badge">{plan.badge}</span>
                )}

                <div className="price-row">
                  <span className="price">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>

                <ul className="features-list">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <div className="check-icon">
                        <FaCheck size={8} />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                  {plan.highlight && (
                    <p className="dummy-text">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
                    </p>
                  )}
                </ul>

                <button className="card-cta">
                  {plan.cta} <span className="arrow">›</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
            <div className="faq-image">
                <img 
                    src={pricingImage} 
                    alt="Abstract Visualization" 
                />
                 <div className="faq-label">FAQ</div>
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