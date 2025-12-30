import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import GeneratorWorkspace from '../components/includes/GeneratorWorkspace';
import '../assets/styles/HomePage.css';

// Images
import news1 from '../assets/images/1.png';
import news2 from '../assets/images/2.png';
import news3 from '../assets/images/3.png';
import clients from '../assets/images/clients.png';
import Aiaudio from '../assets/images/aiaudio.png';
import Voicechanger from '../assets/images/voicechanger.png';
import saftyImage from '../assets/images/image.png';
import saftyImage2 from '../assets/images/image2.png';
import aiImage from '../assets/images/ai.jpg';
import ent_back from '../assets/images/ent_back.jpg';

const HomePage = () => {

  // --- 1. Global Smooth Scroll Hooks ---
  const { scrollY } = useScroll();
  
  // Spring config for smooth parallax lag
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

  // Hero Text: Moves down slowly, fades out
  const heroTextYRaw = useTransform(scrollY, [0, 500], [0, 150]);
  const heroTextOpacityRaw = useTransform(scrollY, [0, 400], [1, 0]);
  const heroTextY = useSpring(heroTextYRaw, springConfig);
  const heroTextOpacity = useSpring(heroTextOpacityRaw, springConfig);

  // Hero Interface: Moves up faster, tilts slightly for 3D effect
  const heroImageYRaw = useTransform(scrollY, [0, 1000], [0, -50]);
  const heroImageRotateRaw = useTransform(scrollY, [0, 1000], [0, 5]); // Slight 3D tilt
  const heroImageY = useSpring(heroImageYRaw, springConfig);
  const heroImageRotate = useSpring(heroImageRotateRaw, springConfig);


  // --- 2. Section Refs for Parallax ---

  // Ref for Neon Art (Creators Section)
  const artRef = useRef(null);
  const { scrollYProgress: artScroll } = useScroll({
    target: artRef,
    offset: ["start end", "end start"]
  });
  // Image moves inside its container
  const artParallaxRaw = useTransform(artScroll, [0, 1], ["-10%", "10%"]); 
  const artParallax = useSpring(artParallaxRaw, springConfig);

  // Ref for Audio Viz (Developers Section)
  const devRef = useRef(null);
  const { scrollYProgress: devScroll } = useScroll({
    target: devRef,
    offset: ["start end", "end start"]
  });
  const devParallaxRaw = useTransform(devScroll, [0, 1], ["-15%", "15%"]);
  const devParallax = useSpring(devParallaxRaw, springConfig);


  // --- 3. Animation Variants (Premium Easing) ---
  const transition = { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }; // Cubic Bezier for smooth "Apple-like" feel

  const fadeInUp = {
    hidden: { opacity: 0, y: 60, filter: "blur(10px)" }, // Added blur for softer entry
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: transition 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: transition 
    }
  };

  const revealImage = {
    hidden: { clipPath: "inset(10% 10% 10% 10% round 20px)", opacity: 0 },
    visible: { 
      clipPath: "inset(0% 0% 0% 0% round 0px)", 
      opacity: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } // Slow unmask
    }
  };

  return (
    <div className="home-page-wrapper">
      <Header />
      <main>
        
        {/* --- Hero Section --- */}
        <section className="hero-section" style={{ perspective: "1000px" }}> {/* Perspective needed for 3D tilt */}
          
          {/* Parallax Wrapper for Text */}
          <motion.div 
            style={{ y: heroTextY, opacity: heroTextOpacity, willChange: "transform, opacity" }} 
            className="hero-parallax-layer"
          >
            <motion.div 
              className="hero-content"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1 className="hero-title" variants={fadeInUp}>
                THE WORLD'S MOST ICONIC<br />
                <span className="gradient-text">AI PLATFORM</span>
              </motion.h1>
              <motion.p className="hero-subtitle" variants={fadeInUp}>
                AI voice models and products powering millions of developers, creators, and enterprises. From low‑latency conversational agents to the leading AI voice generator.
              </motion.p>
              <motion.div className="hero-buttons" variants={fadeInUp}>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-primary-large">Sign Up</motion.button>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-secondary-large">Contact Sales</motion.button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Parallax Wrapper for Image (3D Tilt Effect) */}
          {/* <motion.div 
            style={{ y: heroImageY, rotateX: heroImageRotate, willChange: "transform" }} 
            className="hero-image-parallax-layer"
          > */}
            <motion.div 
              className="hero-image-container"
              initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              // transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <GeneratorWorkspace />
            </motion.div>
          {/* </motion.div> */}

          {/* <motion.div 
            className="workspace-brands"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h4 className='platform'>Experience the full Audio AI platform</h4>
            <motion.button whileHover={{ scale: 1.05 }} className="btn-signup">Sign up</motion.button>
          </motion.div> */}

          <motion.div 
            className="trusted-brands"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn} 
          >
            <h2>Trusted by leading developers and enterprises</h2>
            <div className="brand-logos">
              <img src={clients} alt="Trusted Brands" className="brands-img" />
            </div>
          </motion.div>

          <div className="dis_btns">
            <motion.button whileHover={{ scale: 1.05 }} className="btn-signup">Talk to Sales</motion.button>
            <motion.button whileHover={{ scale: 1.05 }} className="btn-login">Read Stories</motion.button>
          </div>
        </section>

        {/* --- For Creators Section --- */}
        <section className="vg-section" ref={artRef}>
          <div className="vg-inner">
            <motion.div 
              className="vg-header"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <a href="#" className="vg-subtle-link">For <span className="vg-subtle-strong">CREATORS, MEDIA &amp; ENTERTAINMENT</span></a>
              <h2 className="vg-title">
                GENERATE HIGH-QUALITY AUDIO WITH OUR AI VOICE GENERATOR
                <br />
                FOR AUDIOBOOKS, VIDEOS, AND PODCASTS
              </h2>
            </motion.div>

            <div className="vg-grid">
              <aside className="vg-left">
                <motion.ul 
                  className="vg-list"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-10%" }}
                >
                  {['AUDIOBOOKS', 'VIDEO VOICEOVERS', 'DUBBED VIDEOS', 'PODCASTS', 'MUSIC'].map((title, index) => (
                    <motion.li 
                      key={index} 
                      className="vg-card" 
                      variants={fadeInUp}
                      whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.05)" }} // Subtle hover interaction
                      transition={{ type: "tween", duration: 0.2 }}
                    >
                      <h3 className="vg-card-title">{title}</h3>
                      <p className="vg-card-desc">
                        {index === 0 && "Upload your ePub or PDF, pick your characters, direct the delivery, and publish high-quality multi-voice audiobooks."}
                        {index === 1 && "Select the ideal voice or clone your own. Generate ads, shorts, or films with our AI voice generator."}
                        {index === 2 && "Translate into 30+ languages while preserving the speaker’s voice. Dub with one click or use Dubbing Studio."}
                        {index === 3 && "Use Voice Isolator to clean recordings, or Text-to-Speech to generate short segments or full podcasts with multiple speakers."}
                        {index === 4 && "Generate studio-quality tracks instantly — any genre, any style, vocals or instrumental, using simple text prompts."}
                      </p>
                    </motion.li>
                  ))}
                </motion.ul>
              </aside>
              
              <motion.div 
                className="vg-right"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealImage}
              >
                <div className="vg-art-wrap" style={{ overflow: 'hidden', position: 'relative' }}>
                  {/* Applied Smoothed Parallax to the Image Inside */}
                  <motion.img 
                    src={aiImage} 
                    alt="AI neon art" 
                    className="vg-art"
                    style={{ y: artParallax, scale: 1.15, willChange: "transform" }} 
                  />
                </div>
                <div className="vg-footer">
                  <div className="vg-trusted-logo">TIME ↗</div>
                  <div className="vg-trusted-text">uses Studio for high-quality, long-form Text to Speech at sc...</div>
                  <button className="vg-cta">GET STARTED FREE</button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- For Developers Section --- */}
        <section className="vg2-section" ref={devRef}>
          <div className="vg2-inner">
            <motion.div 
              className="vg2-top"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="vg2-intro">
                <a href="#" className="vg2-sub">For <strong>DEVELOPERS</strong></a>
                <h2 className="vg2-heading">
                  BUILD THE MOST ADVANCED AUDIO MODELS INTO YOUR
                  PRODUCT WITH OUR APIS AND SDKS
                </h2>
              </div>
            </motion.div>

            <div className="vg2-cards-cont">
              <motion.div 
                className="vg2-cards-top"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {/* Developer Cards with Hover Lift */}
                {[
                  { title: "TEXT TO SPEECH API", body: "Independently rated the leading Text to Speech models." },
                  { title: "SPEECH TO TEXT API", body: "The most accurate ASR model. Low cost and supporting speaker diarization." },
                  { title: "VOICE CHANGER API", body: "The leading Voice Changer model. Give your users full control over delivery." }
                ].map((card, i) => (
                  <motion.article 
                    key={i} 
                    className="vg2-card" 
                    variants={fadeInUp}
                    whileHover={{ y: -10, boxShadow: "0px 20px 40px rgba(0,0,0,0.2)" }}
                  >
                    <h3 className="vg2-card-title">{card.title}</h3>
                    <p className="vg2-card-body">{card.body}</p>
                    {i === 0 && (
                      <ul className="vg2-bullets">
                        <li> <span>▌ FLASH — </span> 75ms latency for conversational usecases</li>
                        <li><span>▌ MULTILINGUAL —</span> Best lifelike consistent speech</li>
                        <li><span>▌ V3 — </span> Our most expressive model yet</li>
                      </ul>
                    )}
                    {i !== 0 && (
                       <div className="vg2-stats">
                        <div><strong>98%</strong><span>Accuracy</span></div>
                        <div><strong>$0.22</strong><span>/hour</span></div>
                      </div>
                    )}
                    {i === 2 && (
                       <div className="vg2-mini-player">
                        <div className='dis_fl'>
                          <button aria-label="play" className="vg2-play">▶</button>
                          <div className="vg2-toggle">
                            <button className="vg2-toggle-btn active">INPUT</button>
                            <button className="vg2-toggle-btn">OUTPUT</button>
                          </div>
                        </div>
                        <div>
                          <img src={Voicechanger} alt="gradient player art" className="vg2-voicechanger" />
                        </div>
                      </div>
                    )}
                  </motion.article>
                ))}
              </motion.div>
              
              <div className="vg2-cards-bottom">
                 <div className="vg2-left-large">
                       <div>
                           <h3 className="vg2-card-title small">AGENTS</h3>
                           <p className="vg2-card-body small">Build and deploy AI voice agents on web, mobile, or telephony in minutes.</p>
                           <ul className="vg2-feats">
                               <li>▌ Low latency</li>
                               <li>▌ Advanced turn taking</li>
                               <li>▌ Bring any LLM</li>
                               <li>▌ Function calling</li>
                               <li>▌ 31 languages</li>
                               <li>▌ Take phone calls</li>
                               <li>▌ 1000s of voices</li>
                           </ul>
                       </div>
                       <motion.div 
                         className="vg2-art-frame"
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true }}
                         variants={revealImage} // Use reveal mask effect
                         style={{ overflow: 'hidden' }}
                       >
                           {/* Smoothed Parallax Applied Here */}
                           <motion.img 
                             src={Aiaudio} 
                             alt="gradient player art" 
                             className="vg2-art"
                             style={{ y: devParallax, scale: 1.15, willChange: "transform" }}
                           />
                           <button className="vg2-art-center" aria-hidden>
                             <span className="vg2-wave" />
                           </button>
                       </motion.div>
                   </div>

                   <div className="vg2-art-right">
                       <aside className="vg2-right-info">
                           <h4 className="vg2-card-title small">EASY TO USE APIS THAT SCALE</h4>
                           <p className="vg2-card-body small muted">The leading AI audio models, robust, scalable and quick to integrate.</p>
                           <ul className="vg2-right-list">
                               <li>▌ PYTHON AND TYPESCRIPT SDKS — Get to production quickly</li>
                               <li>▌ GDPR & SOC II COMPLIANT — Secure and compliant</li>
                           </ul>
                           <button className="vg2-contact">Contact Sales</button>
                       </aside>
                   </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Enterprise Section --- */}
        <motion.section 
          className="vg-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="vg-inner">
            <div className="vg-header">
              <a href="#" className="vg-subtle-link">For <span className="vg-subtle-strong">ENTERPRISES</span></a>
              <h2 className="vg-title">
                Deliver new experiences and save costs <br /> for your enterprise
              </h2>
            </div>
            <div className="vg-grid">
              <aside className="vg-left">
                <motion.ul 
                  className="vg-list"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {[1,2,3,4,5,6].map((item, index) => (
                      <motion.li 
                        key={index} 
                        className="vg-card" 
                        variants={fadeInUp}
                        whileHover={{ x: 5 }}
                      >
                        <h3 className="vg-card-title">CALL CENTERS & CUSTOMER SERVICE</h3>
                        <p className="vg-card-desc">Power inbound and outbound AI calls at scale...</p>
                    </motion.li>
                  ))}
                </motion.ul>
              </aside>
              <motion.div 
                className="vg-right"
                variants={revealImage}
              >
                <div className="vg-art-wrap" style={{overflow: 'hidden'}}>
                  {/* Reuse the smoothed parallax from artRef logic or create new if needed. 
                      Since we are outside artRef context, let's keep it static or add simple scale */}
                  <motion.img 
                    src={ent_back} 
                    alt="AI neon art" 
                    className="vg-art" 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
                <div className="vg-footer">
                  <div className="vg-trusted">
                    <span className="vg-trusted-logo">TIME ↗</span>
                    <span className="vg-trusted-text">uses Studio for high-quality, long-form Text to Speech at sc...</span>
                  </div>
                  <button className="vg-cta">GET STARTED FREE</button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* --- Split Cards Section --- */}
        <section className="split-section">
          <motion.div 
            className="split-card light"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={transition}
            whileHover={{ scale: 1.02 }}
          >
            <div>
              <h3>AI safety at Explain Labs</h3>
              <p>ElevenLabs is the leader in responsible use of AI audio through Moderation, Accountability and Provenance.</p>
            </div>
            <button className="btn-pill-dark">Learn More</button>
            <div className='saftyImage'>
              <img src={saftyImage} alt="" />
            </div>
          </motion.div>
          <motion.div 
            className="split-card dark"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={transition}
            whileHover={{ scale: 1.02 }}
          >
            <div>
              <h3>Breakthrough Research</h3>
              <p>ElevenLabs was the first company to cross the threshold of making human-like text to speech.</p>
            </div>
            <button className="btn-pill-light">About Us</button>
            <div className='saftyImage2'>
              <img src={saftyImage2} alt="" />
            </div>
          </motion.div>
        </section>

        {/* --- Latest News --- */}
        <section className="news-section">
          <div className='news-head-dflx'>
            <h3>Latest Updates</h3>
            <button className="btn-pill-dark">All Updates</button>
          </div>
          <motion.div 
            className="news-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { img: news1, title: "Introducing ElevenLabs Image & Video", desc: "Within ElevenLabs, you can now bring ideas to life..." },
              { img: news2, title: "ElevenLabs Welcomes McConaug…", desc: "At ElevenLabs’ inaugural Summit, the company revealed..." },
              { img: news3, title: "Announcing Partnership with Michael C…", desc: "At today’s Summit, ElevenLabs announced a partnership..." }
            ].map((news, i) => (
              <motion.div 
                key={i} 
                className="news-card" 
                variants={fadeInUp}
                whileHover={{ y: -10 }} // Hover Lift
              >
                <img src={news.img} alt={`News ${i}`} />
                <div className="news-content">
                  <h4>{news.title}</h4>
                  <p>{news.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;