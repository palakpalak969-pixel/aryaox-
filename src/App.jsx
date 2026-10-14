
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      business_name: formData.get("business"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    setFormStatus("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submit-enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const responseText = await response.text();
      let result = {};

      if (responseText.trim()) {
        try {
          result = JSON.parse(responseText);
        } catch {
          throw new Error(
            "The server returned an unexpected response. Please try again."
          );
        }
      }

      if (!response.ok) {
        throw new Error(
          result.error ||
            "Your enquiry could not be submitted. Please try again."
        );
      }

      // Only clear the form after the server confirms success.
      form.reset();
      setFormStatus("");
      setShowSuccess(true);
    } catch (error) {
      setFormStatus(
        error.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const section = document.querySelector(".why-aryaox");

    if (!section) return;

    if (!("IntersectionObserver" in window)) {
      section.classList.add("show");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("show");
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {showSuccess && (
        <div
          className="success-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-title"
        >
          <div className="success-box">
            <div className="success-check" aria-hidden="true">
                ✓
            </div>

            <h2 id="success-title">Enquiry Received</h2>

            <p>
              Thank you for reaching out to ARYAOX.
              Your enquiry has been submitted successfully.
              We&apos;ll be in touch soon.
            </p>

            <button
              type="button"
              className="success-button"
              onClick={() => setShowSuccess(false)}
            >
              Back to Website
            </button>
          </div>
        </div>
      )}

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
          <p className="eyebrow">DIGITAL • DESIGN • DEVELOP</p>

          <h1>
            Websites built to
            <span> move businesses forward.</span>
          </h1>

          <p className="hero-text">
            ARYAOX builds digital experiences, products, and solutions
            that help businesses and ideas move forward.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="primary-btn">
              Start a Project
            </a>

            <a href="#work" className="secondary-btn">
              View Our Work →’
            </a>
          </div>
        </section>

        {/* SERVICES */}
        <section className="services" id="services">
          <div className="section-heading">
            <p className="eyebrow">DIGITAL SERVICES</p>

            <h2>
              Digital solutions
              <span> built to move your business forward.</span>
            </h2>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <span>01</span>
              <h3>Website Development</h3>
              <p>
                Modern, responsive websites built for businesses,
                startups and growing brands that want a strong online
                presence.
              </p>
            </div>

            <div className="service-card">
              <span>02</span>
              <h3>Website Redesign</h3>
              <p>
                Transform outdated websites into modern,
                high-performing digital experiences that represent
                your brand better.
              </p>
            </div>

            <div className="service-card">
              <span>03</span>
              <h3>Responsive Design</h3>
              <p>
                Responsive websites designed to work smoothly across
                phones, tablets and desktop devices.
              </p>
            </div>

            <div className="service-card">
              <span>04</span>
              <h3>Maintenance &amp; Support</h3>
              <p>
                Ongoing website updates, improvements and technical
                support to keep your digital presence running smoothly.
              </p>
            </div>
          </div>
        </section>

        {/* OUR WORK */}
        <section className="work" id="work">
          <div className="section-heading">
            <p className="eyebrow">OUR WORK</p>

            <h2>
              Digital projects
              <span> built with purpose.</span>
            </h2>
          </div>

          <div className="work-grid">
            <div className="work-card">
              <div className="work-image">
                <span>DEVELOPER DASHBOARD</span>
              </div>

              <div className="work-info">
                <div>
                  <p className="project-number">01 / WEB APP</p>
                  <h3>Developer Dashboard</h3>

                  <p>
                    A modern developer dashboard built with React to
                    organize tasks, projects and daily work in one place.
                  </p>

                  <a
                    href="https://developer-dashboard-blond-eight.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    View Project →’
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

            <a
              href="https://aryaox-business-demo.vercel.app/"
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
                    A responsive business website designed to present
                    services, build trust and help businesses generate
                    enquiries online.
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
                We build digital experiences that make that first
                impression count.
              </p>
            </div>

            <div className="why-points">
              <div className="why-point">
                <span>01</span>
                <div>
                  <h3>Built with purpose</h3>
                  <p>
                    Every page has a reason. We focus on clarity,
                    usability and turning visitors into real enquiries.
                  </p>
                </div>
              </div>

              <div className="why-point">
                <span>02</span>
                <div>
                  <h3>Designed to stand out</h3>
                  <p>
                    Clean doesn&apos;t have to mean boring. We create
                    modern interfaces with personality and strong
                    visual identity.
                  </p>
                </div>
              </div>

              <div className="why-point">
                <span>03</span>
                <div>
                  <h3>Made to grow</h3>
                  <p>
                    We build with the future in mind, so your website
                    can evolve as your business does.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact" id="contact">
          <div className="contact-content">
            <p className="eyebrow">START A PROJECT</p>

            <h2>
              Have a digital project
              <span> in mind?</span>
            </h2>

            <p className="contact-text">
              Tell us what you&apos;re building, what you need, and
              where you want to take it. Let&apos;s create something
              that works.
            </p>

            <a href="#project-form" className="contact-btn">
              Start a Conversation →
            </a>
          </div>

          <div className="project-form" id="project-form">
            <form onSubmit={handleSubmit}>
              {formStatus && (
  <p className="form-status form-status-error" role="alert">
    {formStatus}
  </p>
)}

                           <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Contact Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+91 xxx-xxx-xxxx"
                    autoComplete="tel"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="business">Business / Brand</label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    placeholder="Your business name"
                    autoComplete="organization"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">
                  What digital service do you need?
                </label>

                <select id="service" name="service">
                  <option value="">Select a service</option>
                  <option value="Website Development">
                    Website Development
                  </option>
                  <option value="Website Redesign">
                    Website Redesign
                  </option>
                  <option value="Landing Page">Landing Page</option>
                  <option value="Ecommerce Website">
                    Ecommerce Website
                  </option>
                  <option value="Something else">Something else</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Tell us about the project
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="What are you looking to build?"
                  required
                />
              </div>

              <button
                type="submit"
                className="form-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Inquiry "}
              </button>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer>
          <div className="footer-top">
            <div>
              <div className="logo">ARYAOX</div>
              <p>
                Digital experiences, products and solutions built to
                move ideas forward.
              </p>
            </div>


<div className="footer-links">
  <a
    href="https://wa.me/919990901568"
    target="_blank"
    rel="noreferrer"
    aria-label="Contact ARYAOX on WhatsApp"
    title="WhatsApp"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.5 0 .15 5.35.15 11.93c0 2.1.55 4.16 1.6 5.97L.05 24l6.25-1.64a11.9 11.9 0 0 0 5.77 1.47h.01c6.58 0 11.93-5.35 11.93-11.93a11.85 11.85 0 0 0-3.49-8.42ZM12.08 21.8a9.85 9.85 0 0 1-5.02-1.37l-.36-.21-3.71.97.99-3.62-.23-.37a9.85 9.85 0 0 1-1.51-5.27c0-5.44 4.43-9.87 9.87-9.87a9.8 9.8 0 0 1 6.98 2.89 9.8 9.8 0 0 1 2.89 6.98c0 5.44-4.43 9.87-9.87 9.87Zm5.42-7.39c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"
      />
    </svg>
  </a>

  <a
    href="https://instagram.com/aryaoxdev"
    target="_blank"
    rel="noreferrer"
    aria-label="Follow ARYAOX on Instagram"
    title="Instagram"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  </a>

  <a
    href="mailto:aryaox.dev@gmail.com"
    aria-label="Email ARYAOX"
    title="Email"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="m3.5 6 8.5 7 8.5-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  </a>
</div>

          </div>

          <div className="footer-bottom">
            <span>© 2026 ARYAOX</span>
            <span>Built by ARYAOX</span>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
