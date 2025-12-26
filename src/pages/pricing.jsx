import React, { useState } from 'react';
import '../assets/styles/PricingPage.css';
import { FaCheck, FaPlus, FaMinus } from 'react-icons/fa';
// 1. Import Framer Motion modules
import { motion, AnimatePresence } from 'framer-motion';

// Import layout components
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

// Import Image
import pricingImage from '../assets/images/pricing.jpg';

const PricingPage = () => {
  const [openFaq, setOpenFaq] = useState(1);
  const [billingPeriod, setBillingPeriod] = useState('monthly'); // 'monthly' | 'yearly'

  // === Animation Variants ===
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  // FAQ Accordion Variants
  const accordionVariants = {
    collapsed: { 
      opacity: 0, 
      height: 0, 
      paddingTop: 0,
      paddingBottom: 0,
      overflow: 'hidden',
      transition: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] } // Smooth easing
    },
    open: { 
      opacity: 1, 
      height: 'auto',
      // Assuming your CSS has padding for .faq-answer, we let it naturally exist here.
      // If animation is jerky, we might need to explicitly animate padding here based on your CSS values.
      // For now, assuming 'auto' handles it decently with overflow hidden.
      transition: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }
    }
  };

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

  // === Plans data ===
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

      <Header />

      {/* 2. Animated Header elements */}
      <motion.div 
        className="pricing-header"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h1 variants={fadeInUp}>Pricing</motion.h1>
        <motion.p className="subtitle" variants={fadeInUp}>Plans built for creators and business of all sizes</motion.p>
        <motion.div className="breadcrumbs" variants={fadeInUp}>Home &gt; Pricing</motion.div>
      </motion.div>

      <main className="main-content">
        {/* 3. Animated Toggle Container fade in */}
        <motion.div 
          className='toggle-cont'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div style={{ display: 'inline-flex', borderRadius: 999, padding: 4, gap: 10 }}>
            {/* 4. Converted to motion.button for smooth background transition and tap effect */}
            <motion.button className='toggle-price'
              onClick={() => setBillingPeriod('monthly')}
              aria-pressed={billingPeriod === 'monthly'}
              whileTap={{ scale: 0.97 }}
              animate={{ 
                background: billingPeriod === 'monthly' ? '#000' : '#99999933',
                color: billingPeriod === 'monthly' ? '#fff' : '#262627',
              }}
              transition={{ duration: 0.3 }}
              style={{
                padding: '6px 14px',
                borderRadius: 50,
                border: 'none',
                // background handled by animate prop now
                fontWeight: billingPeriod === 'monthly' ? 700 : 400,
                // color handled by animate prop now
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              Monthly Billed
            </motion.button>
            <motion.button className='toggle-price'
              onClick={() => setBillingPeriod('yearly')}
              aria-pressed={billingPeriod === 'yearly'}
              whileTap={{ scale: 0.97 }}
              animate={{ 
                background: billingPeriod === 'yearly' ? '#000' : '#99999933',
                color: billingPeriod === 'monthly' ? '#262627' : '#fff',
              }}
              transition={{ duration: 0.3 }}
              style={{
                padding: '6px 14px',
                borderRadius: 50,
                border: 'none',
                // background handled by animate prop now
                fontWeight: billingPeriod === 'yearly' ? 700 : 500,
                 // color handled by animate prop now
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              Yearly Billed
            </motion.button>
          </div>
        </motion.div>

        {/* 5. Pricing Grid Staggered entry. Key added to re-trigger animation on toggle */}
        <motion.div 
          className="pricing-grid"
          key={billingPeriod}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {currentPlans.map((plan) => (
            // 6. Animated Card entry and Hover effect
            <motion.div 
              key={plan.id} 
              className={`pricing-card ${plan.highlight ? 'highlight' : ''}`}
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
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

                  {plan.title === 'Creator' && billingPeriod === 'monthly' && (
                    <p className="dummy-text">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
                    </p>
                  )}
                </ul>

                {/* 7. Animated CTA Button */}
                <motion.button 
                  className="card-cta"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Get Started <span className="arrow">›</span>
                </motion.button>
              </div>
            </motion.div>
          ))}

          {currentPlans.some(p => p.highlight) && (
            <div className="card-header-absolute">Most Popular</div>
          )}

        </motion.div>

        {/* FAQ Section */}
        <div className="faq-section">
          {/* 8. FAQ Image Slide-in */}
          <motion.div 
            className="faq-image"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src={pricingImage} alt="Abstract Visualization" />
            <div className="faq-label">
              <p className='faq-one'>F</p>
              <p className='faq-two'>A</p>
              <p className='faq-three'>Q</p>
            </div>
          </motion.div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                >
                  <span>{faq.question}</span>
                  {/* 9. Animated Icon rotation */}
                  <motion.span animate={{ rotate: openFaq === index ? 180 : 0 }}>
                     {openFaq === index ? <FaMinus size={12}/> : <FaPlus size={12}/>}
                  </motion.span>
                </button>
                
                {/* 10. Smooth Accordion Animation using AnimatePresence */}
                <AnimatePresence initial={false}>
                  {openFaq === index && (
                    <motion.div 
                      className="faq-answer"
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={accordionVariants}
                    >
                      {/* Wrap inner text to ensure smooth height calculation */}
                      <div> 
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

      </main>

      <Footer />

    </div>
  );
};

export default PricingPage;