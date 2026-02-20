import { useState, useEffect, useRef } from 'react'
import './App.css'
import heroBg from './assets/pexels-ironic-695657.jpg'
import profileImg from './assets/IMG_4458.JPG'
import { db } from './firebase'
import { collection, getDocs } from 'firebase/firestore'
import { SiFirebase, SiKotlin, SiFlutter, SiDart, SiDjango, SiPostgresql, SiPython, SiDocker, SiAmazonwebservices, SiFlask } from 'react-icons/si'
import { FaBrain, FaCubes, FaLink, FaMobile, FaServer, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { IoLogoReact, IoMail } from 'react-icons/io5'
import { FaXTwitter } from 'react-icons/fa6'


function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeTesti, setActiveTesti] = useState(0)
  const [qualTab, setQualTab] = useState('experience')
  const [reviews, setReviews] = useState([])
  const testiTrackRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsSnap = await getDocs(collection(db, 'reviews'))
        const reviewsData = reviewsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        setReviews(reviewsData)
      } catch (err) {
        console.error('Error fetching reviews:', err)
      }
    }
    fetchReviews()
  }, [])

  return (
    <>
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-inner">
          <a href="#" className="navbar-logo">
            <span className="logo-cloud">☁</span> RK
          </a>
          <ul className={`navbar-links ${menuOpen ? 'navbar-links-open' : ''}`}>
            <li><a href="#" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li><a href="#qualifications" onClick={() => setMenuOpen(false)}>Experience</a></li>
            <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Reviews</a></li>
          </ul>
          <a href="mailto:rahulkr99222@gmail.com" className="navbar-cta">Hire Me</a>
          <button className={`hamburger ${menuOpen ? 'hamburger-active' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>

        <div className="hero-content">
          <h1 className="hero-title">Rahul Kumar</h1>
          <p className="hero-subtitle">Mobile App Developer &amp; Backend Engineer</p>
          <div className="scroll-indicator">
            <span className="chevron">&#xBB;</span>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="about" id="about">
        {/* Decorative clouds */}
        <div className="cloud cloud-top-right">☁</div>
        <div className="cloud cloud-bottom-left">☁</div>

        <h2 className="about-heading">about me</h2>
        <div className="about-heading-line"></div>

        <div className="about-main">
          {/* Left: Profile Photo */}
          <div className="about-photo-wrapper">
            <div className="about-photo-card">
              <div className="about-photo-placeholder">
                <img src={profileImg} alt="Rahul Kumar" className="about-photo-img" />
              </div>
              <div className="about-badge">
                <span className="badge-icon">✓</span>
                <div className="badge-text">
                  <span className="badge-label">AVAILABLE FOR</span>
                  <span className="badge-value">New Projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Info */}
          <div className="about-info">
            <h3 className="about-role">
              Flutter App Developer &amp;<br />
              <span className="about-role-highlight">Backend Engineer</span>
            </h3>
            <p className="about-description">
              Specializing in building scalable cross-platform mobile applications using{' '}
              <strong>Flutter</strong> and robust backend systems using{' '}
              <strong>Python and Flask</strong>. I focus on creating seamless user
              experiences with high-performance architecture.
            </p>

            {/* Skill Cards */}
            <div className="about-cards">
              <div className="about-card">
                <div className="about-card-icon">🎓</div>
                <h4>Qualification</h4>
                <p> B.Tech CSE student</p>
              </div>
              <div className="about-card">
                 <div className="about-card-icon">&lt;/&gt;</div>
                <h4>DEVELOPER</h4>
                <p>Cross-platform focus with Flutter</p>
              </div>
              <a href="https://nevixdev.netlify.app/" target="_blank" rel="noopener noreferrer" className="about-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="about-card-icon">💼</div>
                <h4>FREELANCER</h4>
                <p>Available for freelance projects</p>
                <span className="about-card-view">nevixdev.netlify.app ↗</span>
              </a>
            </div>

            {/* Buttons */}
            <div className="about-buttons">
              <a href="https://drive.google.com/file/d/1dxhffwaNT2hXsjyGkyxs5ChOOhv6rWRX/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <span className="btn-icon">🔗</span> my LinkedIn
              </a>
              <a href="#" className="btn btn-outline">
                <span className="btn-icon">⬇</span> download CV
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="about-divider"></div>
        <div className="about-stats">
          <div className="stat">
            <span className="stat-number">15+</span>
            <span className="stat-label">PROJECTS COMPLETED</span>
          </div>
          <div className="stat">
            <span className="stat-number">{reviews.length}+</span>
            <span className="stat-label">HAPPY CLIENTS</span>
          </div>
          <div className="stat">
            <span className="stat-number">1+</span>
            <span className="stat-label">YEARS EXPERIENCE</span>
          </div>
        </div>
      </section>

      {/* Technical Proficiency Section */}
      <section className="skills" id="skills">
        <h2 className="skills-heading">Technical Proficiency</h2>
        <p className="skills-subtitle">
          A curated showcase of technologies and frameworks I leverage to build
          robust, scalable, and beautiful digital experiences.
        </p>

        {/* App Development */}
        <h3 className="skills-category"><FaMobile /> App Development</h3>
        <div className="marquee">
          <div className="marquee-track">
            <div className="skill-chip"><span className="chip-icon"><SiFirebase color="#FFCA28" /></span> Firebase</div>
            <div className="skill-chip"><span className="chip-icon"><FaBrain color="#7C3AED" /></span> AI Integration</div>
            <div className="skill-chip"><span className="chip-icon"><SiKotlin color="#7F52FF" /></span> Kotlin</div>
            <div className="skill-chip"><span className="chip-icon"><FaCubes color="#42A5F5" /></span> Provider</div>
            <div className="skill-chip"><span className="chip-icon"><SiFlutter color="#02569B" /></span> Flutter</div>
            <div className="skill-chip"><span className="chip-icon"><SiDart color="#0175C2" /></span> Dart</div>
            <div className="skill-chip"><span className="chip-icon"><IoLogoReact color="#61DAFB" /></span> GetX</div>
            {/* Duplicate for seamless loop */}
            <div className="skill-chip"><span className="chip-icon"><SiFirebase color="#FFCA28" /></span> Firebase</div>
            <div className="skill-chip"><span className="chip-icon"><FaBrain color="#7C3AED" /></span> AI Integration</div>
            <div className="skill-chip"><span className="chip-icon"><SiKotlin color="#7F52FF" /></span> Kotlin</div>
            <div className="skill-chip"><span className="chip-icon"><FaCubes color="#42A5F5" /></span> Provider</div>
            <div className="skill-chip"><span className="chip-icon"><SiFlutter color="#02569B" /></span> Flutter</div>
            <div className="skill-chip"><span className="chip-icon"><SiDart color="#0175C2" /></span> Dart</div>
            <div className="skill-chip"><span className="chip-icon"><IoLogoReact color="#61DAFB" /></span> GetX</div>
          </div>
        </div>

        {/* Backend Development */}
        <h3 className="skills-category"><FaServer /> Backend Development</h3>
        <div className="marquee marquee-reverse">
          <div className="marquee-track">
            <div className="skill-chip"><span className="chip-icon"><SiPython color="#3776AB" /></span> Python</div>
            <div className="skill-chip"><span className="chip-icon"><SiDjango color="#092E20" /></span> Django</div>
            <div className="skill-chip"><span className="chip-icon"><SiFlask color="#000" /></span> Flask</div>
            <div className="skill-chip"><span className="chip-icon"><FaLink color="#2a6cc4" /></span> REST APIs</div>
            <div className="skill-chip"><span className="chip-icon"><SiPostgresql color="#4169E1" /></span> PostgreSQL</div>
            <div className="skill-chip"><span className="chip-icon"><SiAmazonwebservices color="#FF9900" /></span> AWS</div>
            {/* Duplicate for seamless loop */}
            <div className="skill-chip"><span className="chip-icon"><SiPython color="#3776AB" /></span> Python</div>
            <div className="skill-chip"><span className="chip-icon"><SiDjango color="#092E20" /></span> Django</div>
            <div className="skill-chip"><span className="chip-icon"><SiFlask color="#000" /></span> Flask</div>
            <div className="skill-chip"><span className="chip-icon"><FaLink color="#2a6cc4" /></span> REST APIs</div>
            <div className="skill-chip"><span className="chip-icon"><SiPostgresql color="#4169E1" /></span> PostgreSQL</div>
            <div className="skill-chip"><span className="chip-icon"><SiAmazonwebservices color="#FF9900" /></span> AWS</div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="qualifications" id="qualifications">
        <div className="dot-pattern"></div>
        <h2 className="qual-heading">Qualifications</h2>

        <div className="qual-tabs">
          <button className={`qual-tab ${qualTab === 'experience' ? 'qual-tab-active' : ''}`} onClick={() => setQualTab('experience')}>Experience</button>
          <button className={`qual-tab ${qualTab === 'learning' ? 'qual-tab-active' : ''}`} onClick={() => setQualTab('learning')}>Learning</button>
          <button className={`qual-tab ${qualTab === 'projects' ? 'qual-tab-active' : ''}`} onClick={() => setQualTab('projects')}>Projects</button>
        </div>

        {qualTab === 'experience' && (
        <div className="timeline">
          <div className="timeline-line"></div>

          {/* 2026 - Left */}
          <div className="timeline-item timeline-left">
            <div className="timeline-card">
              <span className="timeline-year">Jan 2026 – Present</span>
              <h4 className="timeline-role">SDE </h4>
              <p className="timeline-company">Mindslate</p>
              <p className="timeline-desc">
                Working as a Software Development Engineer (SDE) Intern at Mindslate, specializing in Flutter app development. Responsible for building, maintaining, and optimizing the complete Mindslate mobile application.
              </p>
              <a href="https://drive.google.com/file/d/1i6ohMED1lJydws7G7VXNKiQhw0iMRA4r/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="timeline-link">View ↗</a>
            </div>
            <div className="timeline-dot"></div>
          </div>

          {/* 2025 - Right */}
          <div className="timeline-item timeline-right">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <span className="timeline-year">May 2025 – Nov 2025</span>
              <h4 className="timeline-role">Full-Time Flutter App Developer</h4>
              <p className="timeline-company">GoSharpener</p>
              <p className="timeline-desc">
                Developed the complete GoSharpener mobile application from scratch using Flutter, published on both Google Play Store and Apple App Store. Implemented custom push notifications, optimized WebView performance, and integrated Firebase services.
              </p>
              <a href="https://drive.google.com/file/d/1fP3V5aLwzOiaN4Ke-1FhenoEVMKyxta0/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="timeline-link">View ↗</a>
            </div>
          </div>

          {/* 2024 - Left */}
          <div className="timeline-item timeline-left">
            <div className="timeline-card">
              <span className="timeline-year">Jun 2024 – Aug 2024</span>
              <h4 className="timeline-role">App Development Intern</h4>
              <p className="timeline-company">Freshtronics</p>
              <p className="timeline-desc">
                Converted the Tamilmania website into a high-performance mobile application using Flutter. Developed and integrated the Recycle app with Firebase for real-time data synchronization and secure authentication.
              </p>
              <a href="https://www.linkedin.com/posts/rahul-kr2000_a-few-days-ago-i-received-an-internship-activity-7208867154975182849-muyl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEzSKUIBjtTMIIydjtzBq1byOOwAxTTNuRY" target="_blank" rel="noopener noreferrer" className="timeline-link">View ↗</a>
            </div>
            <div className="timeline-dot"></div>
          </div>

          {/* Freelancer - Right */}
          <div className="timeline-item timeline-right">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <span className="timeline-year">2021 – Present</span>
              <h4 className="timeline-role">Freelancer</h4>
              <p className="timeline-company">Freelance Profile</p>
              <p className="timeline-desc">
                Building custom mobile & web solutions for clients worldwide as an independent developer.
              </p>
              <a href="https://nevixdev.netlify.app/" target="_blank" rel="noopener noreferrer" className="timeline-link">nevixdev.netlify.app ↗</a>
            </div>
          </div>
        </div>
        )}

        {qualTab === 'learning' && (
        <div className="timeline">
          <div className="timeline-line"></div>

          {/* Education - Left */}
          <div className="timeline-item timeline-left">
            <div className="timeline-card">
              <span className="timeline-year">2021 – 2025</span>
              <h4 className="timeline-role">B.Tech in Computer Science</h4>
              <p className="timeline-company">Sambalpur University of Institute of Information and Technology, Odisha</p>
              <p className="timeline-desc">
                Focused on software development, data structures, algorithms, and computer science fundamentals.
              </p>
              <a href="https://www.linkedin.com/in/rahul-kr2000/" target="_blank" rel="noopener noreferrer" className="timeline-link">View ↗</a>
            </div>
            <div className="timeline-dot"></div>
          </div>

          {/* AI/ML Certificate - Right */}
          <div className="timeline-item timeline-right">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <span className="timeline-year">Certificate</span>
              <h4 className="timeline-role">AI/ML Internship Trainee</h4>
              <p className="timeline-company">Intern PE</p>
              <p className="timeline-desc">
                Gained hands-on AI/ML experience working on heart disease prediction, cancer detection, and car price prediction using Python, Jupyter Notebook, Streamlit, NumPy, and Pandas.
              </p>
              <a href="https://drive.google.com/file/d/1eA7KsJMh8_B3PLLER5K3mAZuGJcm5jq9/view" target="_blank" rel="noopener noreferrer" className="timeline-link">View ↗</a>
            </div>
          </div>
        </div>
        )}

        {qualTab === 'projects' && (
        <div className="timeline">
          <div className="timeline-line"></div>

          {/* Mindslate - Left */}
          <div className="timeline-item timeline-left">
            <div className="timeline-card">
              <span className="timeline-year">2026</span>
              <h4 className="timeline-role">Mindslate App</h4>
              <p className="timeline-company">Mobile App · Flutter, Dart</p>
              <p className="timeline-desc">
                Building and optimizing the complete Nextclass mobile application with Flutter and Dart.
              </p>
              <a href="https://play.google.com/store/apps/details?id=com.mindslate.next_class&hl=en_IN" target="_blank" rel="noopener noreferrer" className="timeline-link">View ↗</a>
            </div>
            <div className="timeline-dot"></div>
          </div>

          {/* GoSharpener - Right */}
          <div className="timeline-item timeline-right">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <span className="timeline-year">2025</span>
              <h4 className="timeline-role">GoSharpener App</h4>
              <p className="timeline-company">Mobile App · Flutter, Firebase, Dart</p>
              <p className="timeline-desc">
                Complete mobile application built with Flutter, published on Google Play Store and Apple App Store. Implemented custom push notifications, optimized WebView performance, and integrated Firebase services.
              </p>
              <a href="https://play.google.com/store/apps/details?id=com.go.sharpener&hl=en_IN" target="_blank" rel="noopener noreferrer" className="timeline-link">View ↗</a>
            </div>
          </div>

          {/* FitBuddy - Left */}
          <div className="timeline-item timeline-left">
            <div className="timeline-card">
              <span className="timeline-year">2024</span>
              <h4 className="timeline-role">FitBuddy</h4>
              <p className="timeline-company">Mobile App · Flutter</p>
              <p className="timeline-desc">
                A smart fitness app offering personalized workouts, meal plans, progress tracking.
              </p>
              <a href="https://fitbuddy-landing-page.netlify.app/" target="_blank" rel="noopener noreferrer" className="timeline-link">View ↗</a>
            </div>
            <div className="timeline-dot"></div>
          </div>

          {/* Tamilmania - Right */}
          <div className="timeline-item timeline-right">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <span className="timeline-year">2024</span>
              <h4 className="timeline-role">Tamilmania App</h4>
              <p className="timeline-company">Mobile App · Flutter, WebView</p>
              <p className="timeline-desc">
                Converted the Tamilmania website into a high-performance mobile application using Flutter.
              </p>
              <a href="https://www.linkedin.com/posts/rahul-kr2000_internship-appdevelopment-firstapp-activity-7208866190750859265-dH80?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEzSKUIBjtTMIIydjtzBq1byOOwAxTTNuRY" target="_blank" rel="noopener noreferrer" className="timeline-link">View ↗</a>
            </div>
          </div>

          {/* Freelance Projects - Left */}
          <div className="timeline-item timeline-left">
            <div className="timeline-card">
              <span className="timeline-year">2021 – Present</span>
              <h4 className="timeline-role">Freelance Projects</h4>
              <p className="timeline-company">Web & Mobile · Flutter, Python, Flask</p>
              <p className="timeline-desc">
                Custom mobile & web solutions for clients worldwide including real estate websites, e-commerce apps, and more.
              </p>
              <a href="https://nevixdev.netlify.app/" target="_blank" rel="noopener noreferrer" className="timeline-link">View ↗</a>
            </div>
            <div className="timeline-dot"></div>
          </div>

        


          {/* Resume2Job - Right */}
          <div className="timeline-item timeline-right">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <span className="timeline-year">2023</span>
              <h4 className="timeline-role">Resume2Job</h4>
              <p className="timeline-company">Mobile App · Flutter, AI</p>
              <p className="timeline-desc">
                An AI-powered job-matching app that analyzes ATS scores and recommends jobs.
              </p>
              <a href="https://resume2job.netlify.app/" target="_blank" rel="noopener noreferrer" className="timeline-link">View ↗</a>
            </div>
          </div>

          {/* Food Delivery App - Left */}
          <div className="timeline-item timeline-left">
            <div className="timeline-card">
              <span className="timeline-year">2023</span>
              <h4 className="timeline-role">Food Delivery App</h4>
              <p className="timeline-company">Mobile App · Flutter</p>
              <p className="timeline-desc">
                A fast and user-friendly food delivery app.
              </p>
              <a href="https://github.com/2003Rk/foodDel/releases" target="_blank" rel="noopener noreferrer" className="timeline-link">View ↗</a>
            </div>
            <div className="timeline-dot"></div>
          </div>

          {/* Task Manager - Right */}
          <div className="timeline-item timeline-right">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <span className="timeline-year">2022</span>
              <h4 className="timeline-role">Task Manager App</h4>
              <p className="timeline-company">Mobile App · Flutter</p>
              <p className="timeline-desc">
                A simple and intuitive task management app.
              </p>
              <a href="https://github.com/2003Rk/taskmang" target="_blank" rel="noopener noreferrer" className="timeline-link">View ↗</a>
            </div>
          </div>

          {/* Voice Assistant - Left */}
          <div className="timeline-item timeline-left">
            <div className="timeline-card">
              <span className="timeline-year">2022</span>
              <h4 className="timeline-role">Voice Assistant App</h4>
              <p className="timeline-company">Mobile App · Flutter, OpenAI API</p>
              <p className="timeline-desc">
                A voice assistant app powered by the OpenAI API.
              </p>
              <a href="https://github.com/2003Rk/voice_assit" target="_blank" rel="noopener noreferrer" className="timeline-link">View ↗</a>
            </div>
            <div className="timeline-dot"></div>
          </div>

          
          {/* Arduino RC Controller - Left */}
          <div className="timeline-item timeline-right">
            <div className="timeline-card">
              <span className="timeline-year">2021</span>
              <h4 className="timeline-role">Arduino RC Controller App</h4>
              <p className="timeline-company">IoT · Flutter, Arduino</p>
              <p className="timeline-desc">
                An Arduino RC car controller app built with Flutter.
              </p>
              <a href="https://github.com/2003Rk/Arduino-Bt-App" target="_blank" rel="noopener noreferrer" className="timeline-link">View ↗</a>
            </div>
            <div className="timeline-dot"></div>
          </div>

          {/* Arduino Line Follower - Right */}
          <div className="timeline-item timeline-left">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <span className="timeline-year">2021</span>
              <h4 className="timeline-role">Arduino Line Follower Car</h4>
              <p className="timeline-company">IoT · Arduino, Infrared Sensors</p>
              <p className="timeline-desc">
                A line follower robot built using infrared sensors.
              </p>
              <a href="https://github.com/2003Rk/Arduino-line-following-robot" target="_blank" rel="noopener noreferrer" className="timeline-link">View ↗</a>
            </div>
          </div>
        </div>
        )}
      </section>

      {/* Client Reviews Section */}
      <section className="testimonials" id="testimonials">
        <span className="testi-label">CLIENT REVIEWS</span>
        <h2 className="testi-heading">What My Clients Say</h2>

        {reviews.length > 0 ? (
          <div className="reviews-marquee">
            <div className="reviews-marquee-track">
              {[...reviews, ...reviews].map((review, idx) => (
                <div className="review-card" key={`${review.id}-${idx}`}>
                  <div className="review-card-header">
                    <div className="testi-avatar">{(review.clientName || 'C').slice(0, 2).toUpperCase()}</div>
                    <div className="review-card-header-info">
                      <span className="testi-author-name">{review.clientName}</span>
                      <span className="review-country">{review.country}</span>
                    </div>
                    <span className="review-amount">${review.amount}</span>
                  </div>
                  <div className="review-project-info">
                    <span className="review-project-name">{review.projectName}</span>
                    <span className="review-project-type">{review.projectType}</span>
                  </div>
                  <div className="testi-stars">
                    <span className="review-rating-label">{review.ratingLabel}</span>
                  </div>
                  <p className="testi-quote">"{review.review}"</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="proofs-loading">Loading reviews...</p>
        )}

        {/* Stats */}
        <div className="testi-stats">
          <div className="testi-stat">
            <span className="testi-stat-number">5.0</span>
            <div className="testi-stat-stars">★★★★★</div>
            <span className="testi-stat-label">AVERAGE RATING</span>
          </div>
          <div className="testi-stat-divider"></div>
          <div className="testi-stat">
            <span className="testi-stat-number">{reviews.length}+</span>
            <span className="testi-stat-label">HAPPY CLIENTS</span>
          </div>
          <div className="testi-stat-divider"></div>
          <div className="testi-stat">
            <span className="testi-stat-number">${reviews.reduce((sum, r) => sum + (parseInt(r.amount) || 0), 0).toLocaleString()}+</span>
            <span className="testi-stat-label">REVENUE EARNED</span>
          </div>
          <div className="testi-stat-divider"></div>
          <div className="testi-stat">
            <span className="testi-stat-number">100%</span>
            <span className="testi-stat-label">CLIENT SATISFACTION</span>
          </div>
        </div>
      </section>

      {/* Footer / CTA Section */}
      <footer className="footer" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="footer-content">
          <h2 className="footer-heading">
            Let's build something<br />beautiful together.
          </h2>
          <p className="footer-subtitle">AVAILABLE FOR NEW OPPORTUNITIES</p>
          <div className="footer-links">
            <a href="mailto:rahulkr99222@gmail.com" className="footer-btn">
              <IoMail /> Email
            </a>
            <a href="https://www.linkedin.com/in/rahul-kr2000/" target="_blank" rel="noopener noreferrer" className="footer-btn">
              <FaLinkedinIn /> LinkedIn
            </a>
            <a href="https://github.com/2003Rk" target="_blank" rel="noopener noreferrer" className="footer-btn">
              <FaGithub /> GitHub
            </a>
          
          </div>
        </div>
        {/* Bottom Footer */}
        <div className="bottom-footer">
          <p>© 2025 Rahul Kumar. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App
