import{useEffect} from 'react'
import './App.css';

function App() {
  useEffect(() => {
  const section = document.querySelector(".why-aryaox");

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        section.classList.add("show");
        observer.disconnect();
      }
    },
    { threshold: 0.2 }
  );

  if (section) {
    observer.observe(section);
  }

  return () => observer.disconnect();
}, []);
  return (
    <main>
      {/* NAVBAR */}

      <nav>
        <div className="logo">ARYAOX</div>

        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}

      <section className="hero">
        <p className="eyebrow">
          WEB DEVELOPMENT • DESIGN • DIGITAL
        </p>

        <h1>
          Websites built to
          <span> move businesses forward.</span>
        </h1>

        <p className="hero-text">
          ARYAOX creates modern, responsive websites for businesses,
          startups and personal brands that want to look professional online.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="primary-btn">
            Start a Project
          </a>

          <a href="#work" className="secondary-btn">
            View My Work →
          </a>
        </div>
      </section>

      {/* SERVICES */}

      <section className="services" id="services">
        <div className="section-heading">
          <p className="eyebrow">WHAT I DO</p>

          <h2>
            Digital solutions
            <span> built around your business.</span>
          </h2>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <span>01</span>

            <h3>Website Development</h3>

            <p>
              Modern, responsive websites built from the ground up
              for businesses and startups.
            </p>
          </div>

          <div className="service-card">
            <span>02</span>

            <h3>Website Redesign</h3>

            <p>
              Transform outdated websites into clean, modern
              experiences that represent your brand better.
            </p>
          </div>

          <div className="service-card">
            <span>03</span>

            <h3>Responsive Design</h3>

            <p>
              Websites that look and work properly across phones,
              tablets and desktops.
            </p>
          </div>

          <div className="service-card">
            <span>04</span>

            <h3>Maintenance & Support</h3>

            <p>
              Ongoing updates, improvements and technical support
              to keep your website running smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}

<section className="work" id="work">
  <div className="section-heading">
    <p className="eyebrow">SELECTED WORK</p>

    <h2>
      Projects built with
      <span> purpose.</span>
    </h2>
  </div>

  <div className="work-grid">

    {/* PROJECT 01 */}

    <div className="work-card">
      <div className="work-image">
        <span>DEVELOPER DASHBOARD</span>
      </div>

      <div className="work-info">
        <div>
          <p className="project-number">01 / WEB APP</p>

          <h3>Developer Dashboard</h3>

          <p>
            A productivity dashboard designed to help developers
            organize tasks, projects and daily work in one place.
          </p>

          <a
            href="https://developer-dashboard-blond-eight.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            View Project →
          </a>

          <div className="tech-stack">
            <span>React</span>
            <span>Vite</span>
            <span>JavaScript</span>
            <span>CSS</span>
          </div>
        </div>
      </div>
    </div>


    {/* PROJECT 02 */}

    <a
      href="http://localhost:5174/"
      target="_blank"
      rel="noreferrer"
      className="work-card"
    >
      <div className="work-image">
        <span>BUSINESS WEBSITE</span>
      </div>

      <div className="work-info">
        <div>
          <p className="project-number">02 / WEBSITE</p>

          <h3>Business Website</h3>

          <p>
            A responsive business website focused on presenting
            services, building trust and generating enquiries.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS</span>
          </div>
        </div>
      </div>
    </a>

  </div>
</section>
{/* WHY ARYAOX */}

<section className="why-aryaox" id="about">
  <div className="section-heading">
    <p className="eyebrow">WHY ARYAOX</p>

    <h2>
      Not just websites.
      <span> Digital presence.</span>
    </h2>
  </div>

  <div className="why-content">
    <div className="why-intro">
      <p>
        Your website is often the first thing people see.
        We build digital experiences that make that first impression count.
      </p>
    </div>

    <div className="why-points">

      <div className="why-point">
        <span>01</span>
        <div>
          <h3>Built with purpose</h3>
          <p>
            Every page has a reason. We focus on clarity, usability
            and turning visitors into real enquiries.
          </p>
        </div>
      </div>

      <div className="why-point">
        <span>02</span>
        <div>
          <h3>Designed to stand out</h3>
          <p>
            Clean doesn't have to mean boring. We create modern
            interfaces with personality and strong visual identity.
          </p>
        </div>
      </div>

      <div className="why-point">
        <span>03</span>
        <div>
          <h3>Made to grow</h3>
          <p>
            We build with the future in mind, so your website can
            evolve as your business does.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
      {/* CONTACT */}

<section className="contact" id="contact">
  <div className="contact-content">

    <p className="eyebrow">LET'S WORK TOGETHER</p>

    <h2>
      Have a project
      <span> in mind?</span>
    </h2>

    <p className="contact-text">
      Tell me what you're building, what you need, and where you want
      to take it. Let's create something that works.
    </p>

    <a
      href="#project-form"
      className="contact-btn"
          >
      Start a Conversation →
    </a>

  </div>
  <div className="project-form" id="project-form">

  <form
  action="https://formspree.io/f/mjykozrk"
  method="POST"
  
>

    <div className="form-row">

      <div className="form-group">
        <label htmlFor="name">Name</label>

        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>

        <input
          type="email"
          id="email"
          name="email"
          placeholder="you@example.com"
          required
        />
      </div>

    </div>

    <div className="form-group">
      <label htmlFor="business">Business / Brand</label>

      <input
        type="text"
        id="business"
        name="business"
        placeholder="Your business name"
      />
    </div>

    <div className="form-group">
      <label htmlFor="service">What do you need?</label>

      <select id="service" name="service">
        <option value="">Select a service</option>
        <option value="Website Development">Website Development</option>
        <option value="Website Redesign">Website Redesign</option>
        <option value="Landing Page">Landing Page</option>
        <option value="Ecommerce Website">Ecommerce Website</option>
        <option value="Something else">Something else</option>
      </select>
    </div>

    <div className="form-group">
      <label htmlFor="message">Tell us about the project</label>

      <textarea
        id="message"
        name="message"
        rows="6"
        placeholder="What are you looking to build?"
        required
      ></textarea>
    </div>

    <button type="submit" className="form-submit">
      Send Inquiry →
    </button>

  </form>

</div>

  
</section>
      
   
<footer>
  <div className="footer-top">
    <div>
      <div className="logo">ARYAOX</div>
      <p>Websites that move businesses forward.</p>
    </div>

    <div className="footer-links">
      <a href="#services">Services</a>
      <a href="#work">Work</a>
      <a href="#contact">Contact</a>
    </div>
  </div>

  <div className="footer-bottom">
    <span>© 2026 ARYAOX</span>
    <span>Built by ARYAOX</span>
  </div>
</footer>
    </main>
  );
}

export default App;