import React from 'react';
import './index.css';

const WebSort = () => {
  return (
    <div className="websort-wrapper">
      {/* NavBar */}
      <nav className="navbar">
        <img src="/assets/WebsortNav.png" alt="WebSort Logo" className="logo" />
        <div className="nav-links">
          <a href="#about">About us</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#careers">Careers</a>
        </div>
        <button className="contact-button">Contact us</button>
      </nav>

      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: "url(/assets/backimg1.png)" }}>
        <h1>Digitizing Ideas with Clean Code & Modern Design</h1>
        <p>
          At Websort, we turn digital vision into reality with expert web and app development, UI/UX design,
          and digital marketing. Based in Bangalore, we craft responsive websites, innovative mobile apps,
          and drive results through SEO, PPC, and social media strategies.
        </p>
        <div className="hero-buttons">
          <button>Contact Us</button>
          <button>Know More</button>
        </div>
      </section>

      {/* About Us */}
      <section className="aboutus" style={{ backgroundImage: "url(/assets/image11.png)" }} id="about">
        <h2>About Us</h2>
        <h3>Where Innovation Meets Execution</h3>
        <p>
          Websort builds websites, apps, and digital marketing solutions to help you grow online.
          Based in Bangalore, we focus on smart design, strong tech, and real results.
          We specialize in web development, mobile app development, UI/UX design, and digital marketing—
          delivering responsive websites, high-performance Android/iOS apps, and visually engaging interfaces.
        </p>
        <button>Know More</button>
      </section>

      {/* Our Projects */}
      <section className="projects" id="projects">
        <h2>Our Project</h2>
        <div className="project-cards">
          <div className="project-card">
            <img src="/assets/project1.png" alt="App Dev" />
            <p>App development</p>
          </div>
          <div className="project-card main">
            <img src="/assets/project2.png" alt="UIUX Design" />
            <p className="highlight">UI/UX Design</p>
          </div>
          <div className="project-card">
            <img src="/assets/project3.png" alt="Web Dev" />
            <p>Web development</p>
          </div>
        </div>
      </section>

      {/* Future Section */}
      <section className="future" style={{ backgroundImage: "url(/assets/Futureout.png)" }}>
        <h2>Fueling the Future with Innovation</h2>
        <img src="/assets/aiiot.png" alt="AI and IoT" className="future-image" />
        <button>Know More</button>
      </section>

      {/* Explore Section */}
      <section className="explore" style={{ backgroundImage: "url(/assets/Exploreimage.png)" }}>
        <h2>See Our Work in Web Design & Development</h2>
        <p>We specialize in building responsive, user-friendly websites tailored to client needs.</p>
        <button>Explore more</button>
      </section>

      {/* Standout Section */}
      <section className="standout" style={{ backgroundImage: "url(/assets/Standoutimage.png)" }}>
        <h2>Why We Stand Out</h2>
        <p>At Websort, we don't just build digital products — we build careers.</p>
      </section>

      {/* Achievements Section */}
      <section className="achievements">
        <h3>One of our proudest achievements.</h3>
        <div className="achievement-cards">
          <div>
            <img src="/assets/webdev.png" alt="Web Dev" />
            <p>Web Development</p>
            <button>Explore more</button>
          </div>
          <div>
            <img src="/assets/appdev.png" alt="App Dev" />
            <p>App Development</p>
            <button>Explore more</button>
          </div>
          <div>
            <img src="/assets/marketing.png" alt="Marketing" />
            <p>Digital Marketing</p>
            <button>Explore more</button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-section" style={{ backgroundImage: "url(/assets/formimg.png)" }}>
        <div className="contact-form">
          <h2>Questions? We're here to answer them!</h2>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Number" />
          <textarea placeholder="Message"></textarea>
          <button>Submit</button>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>See what opportunities await you</p>
        <button className="explore-footer">Explore More</button>
        <div className="footer-bottom">
          <img src="/assets/WebsortNav.png" alt="WebSort" className="footer-logo" />
          <p>© 2025 Websort. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default WebSort;
