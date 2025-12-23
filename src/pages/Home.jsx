import React from 'react';
import { FaPlay, FaCheck, FaArrowRight } from 'react-icons/fa';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import GeneratorWorkspace from '../components/includes/GeneratorWorkspace';
import '../assets/styles/HomePage.css';
// import heroInterface from '../assets/images/Frame60.png';
import news1 from '../assets/images/1.png';                      
import news2 from '../assets/images/2.png';                      
import news3 from '../assets/images/3.png';   
import clients from '../assets/images/clients.png'; 
import Aiaudio from '../assets/images/aiaudio.png';
import Aiaudioicon from '../assets/images/audioicon.png';
import Voicechanger from '../assets/images/voicechanger.png';
import saftyImage from '../assets/images/image.png';
import saftyImage2 from '../assets/images/image2.png';



const HomePage = () => {
return (
<div className="home-page-wrapper">
<Header />
<main>
	{/* --- Hero Section --- */}
	<section className="hero-section">
		<div className="hero-content">
			<h1 className="hero-title">
				THE WORLD'S MOST ICONIC<br />
				<span className="gradient-text">AI PLATFORM</span>
			</h1>
			<p className="hero-subtitle">
				AI voice models and products powering millions of developers, creators, and enterprises. From  low‑latency conversational agents to the leading AI voice generator for voiceovers and audiobooks.
			</p>
			<div className="hero-buttons">
				<button className="btn-primary-large">Sign Up</button>
				<button className="btn-secondary-large">
				Contact Sales
				</button>
			</div>
		</div>
		<div className="hero-image-container">
			{/* <img src={heroInterface} alt="Dashboard Interface" className="hero-img" /> */}
			<GeneratorWorkspace />
		</div>
		<div className="workspace-brands">
			<h4 className='platform'>Experience the full Audio AI platform</h4>
			<button className="btn-signup">Sign up</button>
		</div>
		<div className="trusted-brands">
			<h2>Trusted by leading developers and enterprises</h2>
			<div className="brand-logos">
				<img src={clients} alt="Trusted Brands" className="brands-img" />
			</div>
		</div>
		<div className="dis_btns">
			<button className="btn-signup">Talk to Sales</button>
			<button className="btn-login">Read Stories</button>
		</div>
	</section>
	{/* JSX: paste this into your React component file.
	Note: CSS for these classname selectors is provided below.
	*/}
	<section className="vg-section">
		<div className="vg-inner">
			<div className="vg-header">
				<a href="#" className="vg-subtle-link">For <span className="vg-subtle-strong">CREATORS, MEDIA &amp; ENTERTAINMENT</span></a>
				<h2 className="vg-title">
					GENERATE HIGH-QUALITY AUDIO WITH OUR AI VOICE GENERATOR
					<br />
					FOR AUDIOBOOKS, VIDEOS, AND PODCASTS
				</h2>
			</div>
			<div className="vg-grid">
				<aside className="vg-left">
					<ul className="vg-list">
						<li className="vg-card">
							<h3 className="vg-card-title">AUDIOBOOKS</h3>
							<p className="vg-card-desc">
								Upload your ePub or PDF, pick your characters, direct the delivery, and publish high-quality multi-voice audiobooks.
							</p>
						</li>
						<li className="vg-card">
							<h3 className="vg-card-title">VIDEO VOICEOVERS</h3>
							<p className="vg-card-desc">
								Select the ideal voice or clone your own. Generate ads, shorts, or films with our AI voice generator.
							</p>
						</li>
						<li className="vg-card">
							<h3 className="vg-card-title">DUBBED VIDEOS</h3>
							<p className="vg-card-desc">
								Translate into 30+ languages while preserving the speaker’s voice. Dub with one click or use Dubbing Studio.
							</p>
						</li>
						<li className="vg-card">
							<h3 className="vg-card-title">PODCASTS</h3>
							<p className="vg-card-desc">
								Use Voice Isolator to clean recordings, or Text-to-Speech to generate short segments or full podcasts with multiple speakers.
							</p>
						</li>
						<li className="vg-card">
							<h3 className="vg-card-title">MUSIC</h3>
							<p className="vg-card-desc">
								Generate studio-quality tracks instantly — any genre, any style, vocals or instrumental, using simple text prompts.
							</p>
						</li>
					</ul>
				</aside>
				<div className="vg-right">
					<div className="vg-art-wrap">
						<img
							src="src/assets/images/ai.jpg"
							alt="AI neon art"
							className="vg-art"
							/>
					</div>
					<div className="vg-footer">
							<div className="vg-trusted-logo">TIME ↗</div>
							<div className="vg-trusted-text">uses Studio for high-quality, long-form Text to Speech at sc...</div>

						<button className="vg-cta">GET STARTED FREE</button>
					</div>
				</div>
			</div>
		</div>
	</section>
	
	<section className="vg2-section">
		<div className="vg2-inner">
			<div className="vg2-top">
				<div className="vg2-intro">
					<a href="#" className="vg2-sub">For <strong>DEVELOPERS</strong></a>
					<h2 className="vg2-heading">
						BUILD THE MOST ADVANCED AUDIO MODELS INTO YOUR
						PRODUCT WITH OUR APIS AND SDKS
					</h2>
				</div>
			</div>
			<div className="vg2-cards-cont">
			<div className="vg2-cards-top">
				<article className="vg2-card">
					<h3 className="vg2-card-title">TEXT TO SPEECH API</h3>
					<p className="vg2-card-body">
						Independently rated the leading Text to Speech models. Choose Multilingual v2 for lifelike consistent speech; eleven_v3 for emotionally rich and expressive speech; or Flash v2.5 for the lowest latency. All support 29+ languages.
					</p>
					<ul className="vg2-bullets">
						<li> <span>▌ FLASH — </span> 75ms latency for conversational usecases</li>
						<li><span>▌ MULTILINGUAL —</span> Best lifelike consistent speech</li>
						<li><span>▌ V3 — </span> Our most expressive model yet</li>
					</ul>
				</article>
				<article className="vg2-card">
					<h3 className="vg2-card-title">SPEECH TO TEXT API</h3>
					<p className="vg2-card-body">
						The <u>most accurate ASR model</u>. Low cost and supporting speaker diarization and character level timestamps.
					</p>
					<div className="vg2-stats">
						<div><strong>98%</strong><span>Accuracy</span></div>
						<div><strong>$0.22</strong><span>/hour on the business plan</span></div>
					</div>
				</article>
				<article className="vg2-card">
					<h3 className="vg2-card-title">VOICE CHANGER API</h3>
					<p className="vg2-card-body">
						The leading <u>Voice Changer</u> model. Give your users full control over delivery of timing, inflection and emotion through voice control.
					</p>
					<div className="vg2-stats">
						<div><strong>98%</strong><span>Accuracy</span></div>
						<div><strong>$0.22</strong><span>/hour on the business plan</span></div>
					</div>
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
				</article>
				</div>
				<div className="vg2-cards-bottom">
					<div className="vg2-left-large">
						<div>
								<h3 className="vg2-card-title small">AGENTS</h3>
							<p className="vg2-card-body small">
								Build and deploy AI voice agents on web, mobile, or telephony in minutes with low latency and full configurability.
							</p>
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
					<div className="vg2-art-frame">
							<img src={Aiaudio} alt="gradient player art" className="vg2-art" />

							<button className="vg2-art-center" aria-hidden>
							<span className="vg2-wave" />
							</button>
						</div>
					</div>

					

					<div className="vg2-art-right">
						
						<aside className="vg2-right-info">
							<h4 className="vg2-card-title small">EASY TO USE APIS THAT SCALE</h4>
							<p className="vg2-card-body small muted">
								The leading AI audio models, robust, scalable and quick to integrate.
							</p>
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
	{/* JSX: paste this into your React component file.
	Note: CSS for these classname selectors is provided below.
	*/}
	<section className="vg-section">
	<div className="vg-inner">
	<div className="vg-header">
	<a href="#" className="vg-subtle-link">For <span className="vg-subtle-strong">For  &amp; enterprises</span></a>
	<h2 className="vg-title">
	Deliver new experiences and save costs <br /> for your enterprise
	</h2>
	</div>
	<div className="vg-grid">
	<aside className="vg-left">
	<ul className="vg-list">
	<li className="vg-card">
	<h3 className="vg-card-title">CALL CENTERS & CUSTOMER SERVICE</h3>
	<p className="vg-card-desc">
	Power inbound and outbound AI calls at scale, for customer support, customer service, and sales. Deliver higher quality interactions at a lower cost.
	</p>
	</li>
	<li className="vg-card">
	<h3 className="vg-card-title">AI ASSISTANTS</h3>
	<p className="vg-card-desc">
	Give voice to your AI assistants. Get to production in days not weeks with low-latency and ultra-realistic interactions. Scale with full control over the LLM.
	</p>
	</li>
	<li className="vg-card">
	<h3 className="vg-card-title">EDUCATION TECHNOLOGY</h3>
	<p className="vg-card-desc">
	Build more engaging experiences with Conversational AI. Take learning to a new level and support 29+ languages with the highest quality voices.
	</p>
	</li>
	<li className="vg-card">
	<h3 className="vg-card-title">MEDIA CREATION TOOLS</h3>
	<p className="vg-card-desc">
	Build AI audio into your media creation platform. Give your users the highest-quality voices, control over delivery with voice changer, and royalty-free sound effects.
	</p>
	</li>
	</ul>
	</aside>
	<div className="vg-right">
	<div className="vg-art-wrap">
	<img
		src="src/assets/images/ent_back.jpg"
		alt="AI neon art"
		className="vg-art"
		/>
	</div>
	<div className="vg-footer">
	<div className="vg-trusted">
	<span className="vg-trusted-logo">TIME ↗</span>
	<span className="vg-trusted-text">uses Studio for high-quality, long-form Text to Speech at sc...</span>
	</div>
	<button className="vg-cta">GET STARTED FREE</button>
	</div>
	</div>
	</div>
	</div>
	</section>
	{/* --- Split Cards Section --- */}
	<section className="split-section">
		<div className="split-card light">
			<div>
				<h3>AI safety at Explain Labs</h3>
				<p>ElevenLabs is the leader in responsible use of AI audio
				through Moderation, Accountability and Provenance.</p>
			</div>
			<button className="btn-pill-dark">Learn More</button>
			<div className='saftyImage'>
		<img src={saftyImage} alt="" />

			</div>

		</div>
		<div className="split-card dark">
			<div>
				<h3>Breakthrough Research</h3>
				<p>ElevenLabs was the first company to cross the threshold of
				making human-like text to speech.</p>
			</div>
			<button className="btn-pill-light">About Us</button>
			<div className='saftyImage2'>
		<img src={saftyImage2} alt="" />

			</div>
		</div>
	</section>
	{/* --- Latest News --- */}
	<section className="news-section">
	<div className='news-head-dflx'>
		<h3>Latest Updates</h3>
		<button class="btn-pill-dark">All Updates</button>
	</div>
	<div className="news-grid">
	<div className="news-card">
	{/* Using the imported variable here */}
	<img src={news1} alt="News 1" />
	<div className="news-content">
	<h4>Introducing ElevenLabs Image & Video</h4>
	<p>Within ElevenLabs, you can now bring ideas to life in one complete creative workflow. Use leading models like Veo, Sora, Kling, Wan and Seedance to create high-quality visuals, then bring them to life with the best voices, music, and sound effects from ElevenLabs.</p>
	</div>
	</div>
	<div className="news-card">
	{/* Using the imported variable here */}
	<img src={news2} alt="News 2" />
	<div className="news-content">
	<h4>ElevenLabs Welcomes McConaug…</h4>
	<p>At ElevenLabs’ inaugural Summit, the company revealed that Academy Award-winning actor Matthew McConaughey has been a part of ElevenLabs story for years – as an investor, early supporter, and now, as a customer.</p>
	</div>
	</div>
	<div className="news-card">
	{/* Using the imported variable here */}
	<img src={news3} alt="News 3" />
	<div className="news-content">
	<h4>Announcing Partnership with  Michael C…</h4>
	<p>At today’s Summit, ElevenLabs announced a partnership with British cultural icon and award- winning actor Sir Michael Caine. Caine’s voice will be available on the ElevenReader app, and on the newly launched Iconic Marketplace.</p>
	</div>
	</div>
	</div>
	</section>
</main>
{/* 2. Footer Component Call */}
<Footer />
</div>
);
};
export default HomePage;