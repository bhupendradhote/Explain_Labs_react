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
  const [billingPeriod, setBillingPeriod] = useState('monthly'); // 'monthly' | 'yearly'

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

  // === Plans data: 3 monthly + 3 yearly (separate objects) ===
  const monthlyPlans = [
    {
      id: 'free-monthly',
      title: 'Free',
      oldPrice: '$22',
      price: '$0',
      periodLabel: 'Per Month',
      desc: 'For Creators Making Premium Content For Global Audiences',
      credits: '10k Credits/Month',
      features: [
        'Everything in Starter, Plus',
        'Professional Voice Cloning'
      ],
      highlight: false,
      promoBadge: ''
    },
    {
      id: 'creator-monthly',
      title: 'Creator',
      oldPrice: '$22',
      price: '$11',
      periodLabel: 'Per Month',
      desc: 'For Creators Making Premium Content For Global Audiences',
      credits: '100k Credits/Month',
      features: [
        'Everything in Starter, Plus',
        'Professional Voice Cloning',
        'Usage Based Billing For Additional Credits',
        'Higher Quality Audio 192 Kbps'
      ],
      highlight: true,
      promoBadge: 'First Month 50% Off'
    },
    {
      id: 'pro-monthly',
      title: 'Pro',
      oldPrice: '',
      price: '$99',
      periodLabel: 'Per Month',
      desc: 'For Creators Ramping Up Their Content Production',
      credits: '500k Credits/Month',
      features: [
        'Everything in Creator, Plus',
        '300 Minutes Of High-Quality Text To Speech',
        '1,100 Minutes Of Agents'
      ],
      highlight: false,
      promoBadge: ''
    }
  ];

  const yearlyPlans = [
    {
      id: 'free-yearly',
      title: 'Free',
      oldPrice: '$0',
      price: '$0',
      periodLabel: 'Per Year',
      desc: 'Annual Free tier for light users',
      credits: '120k Credits/Year',
      features: [
        'Everything in Starter, Plus',
        'Community Support'
      ],
      highlight: false,
      promoBadge: ''
    },
    {
      id: 'creator-yearly',
      title: 'Creator',
      oldPrice: '$132',
      price: '$99',
      periodLabel: 'Per Year',
      desc: 'Best value for creators (billed yearly)',
      credits: '1.2M Credits/Year',
      features: [
        'Everything in Starter, Plus',
        'Professional Voice Cloning',
        'Usage Based Billing For Additional Credits',
        'Higher Quality Audio 192 Kbps'
      ],
      highlight: true,
      promoBadge: 'Save 25% Annually'
    },
    {
      id: 'pro-yearly',
      title: 'Pro',
      oldPrice: '$1188',
      price: '$999',
      periodLabel: 'Per Year',
      desc: 'For teams and high-volume creators',
      credits: '6M Credits/Year',
      features: [
        'Everything in Creator, Plus',
        'Large Team Seats',
        'Priority Support'
      ],
      highlight: false,
      promoBadge: ''
    }
  ];

  const currentPlans = billingPeriod === 'monthly' ? monthlyPlans : yearlyPlans;

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
{/* Billing toggle - minimal markup so existing CSS/UI doesn't change */}
        <div className='toggle-cont'>
          <div style={{ display: 'inline-flex', borderRadius: 999, padding: 4, background: 'rgba(0,0,0,0.04)' }}>
            <button className='toggle-price'
              onClick={() => setBillingPeriod('monthly')}
              aria-pressed={billingPeriod === 'monthly'}
              style={{
                padding: '6px 10px',
                borderRadius: 6,
                border: 'none',
                background: billingPeriod === 'monthly' ? 'transparent' : 'transparent',
                fontWeight: billingPeriod === 'monthly' ? 700 : 500,
                cursor: 'pointer'
              }}
            >
              Monthly Billed
            </button>
            <button className='toggle-price'
              onClick={() => setBillingPeriod('yearly')}
              aria-pressed={billingPeriod === 'yearly'}
              style={{
                padding: '6px 10px',
                borderRadius: 6,
                border: 'none',
                background: billingPeriod === 'yearly' ? 'transparent' : 'transparent',
                fontWeight: billingPeriod === 'yearly' ? 700 : 500,
                cursor: 'pointer'
              }}
            >
              Yearly Billed
            </button>
          </div>
        </div>
        {/* Pricing Cards Grid (rendered from data) */}
        <div className="pricing-grid">
          {currentPlans.map((plan) => (
            <div key={plan.id} className={`pricing-card ${plan.highlight ? 'highlight' : ''}`}>
              {plan.promoBadge && <span className="promo-badge">{plan.promoBadge}</span>}

              <div className="card-content">
                <div className="card-header-row">
                  <h3>{plan.title}</h3>
                  {plan.oldPrice && <span className="old-price">{plan.oldPrice}</span>}
                </div>

                <p className="card-desc">{plan.desc}</p>
                <p className="card-credits ma-b">{plan.credits}</p>

                <div className="price-row">
                  <span className="price">{plan.price}</span>
                  <span className="period">{plan.periodLabel}</span>
                </div>

                <ul className="features-list">
                  {plan.features.map((f, i) => (
                    <li key={i}>
                      <div className="check-icon"><FaCheck size={8} /></div>
                      <span>{f}</span>
                    </li>
                  ))}

                  {/* keep dummy text where it exists for Creator monthly as before */}
                  {plan.title === 'Creator' && billingPeriod === 'monthly' && (
                    <p className="dummy-text">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
                    </p>
                  )}
                </ul>

                <button className="card-cta">
                  Get Started <span className="arrow">›</span>
                </button>
              </div>
            </div>
          ))}

          {/* Keep the Most Popular label in the same place so UI/CSS doesn't need changing.
              We'll render it once if the currently visible plans contain a highlighted plan. */}
          {currentPlans.some(p => p.highlight) && (
            <div className="card-header-absolute">Most Popular</div>
          )}

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
