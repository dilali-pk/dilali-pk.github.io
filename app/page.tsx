export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a className="logo" href="#home" aria-label="Dilshad Ali home">
          <span className="logoPhoto"><img src="/dilshad-ali.png" alt="Dilshad Ali" /></span>
          <span className="logoMark">DA</span>
        </a>
        <nav aria-label="Main navigation">
          <a className="active" href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
          <a href="https://www.fiverr.com/users/dilali1" target="_blank" rel="noreferrer">Hire Me</a>
        </nav>
        <a className="headerButton" href="https://github.com/dilali-pk" target="_blank" rel="noreferrer">GitHub</a>
      </header>

      <section className="hero" id="home">
        <div className="heroLeft">
          <div className="softCard heroIntro">
            <p className="welcome">Welcome to my world</p>
            <h1>Hi, I’m <span>Dilshad</span></h1>
            <h2><b>a</b> NetSuite Developer.</h2>
            <p className="lead">I use Oracle NetSuite ERP to transform complex business processes into smooth, reliable solutions. I build tailored SuiteScript customizations, workflows and integrations that support real operational needs.</p>
            <div className="quickFacts">
              <p><span>▣</span> NetSuite Developer &amp; SuiteScript Specialist</p>
              <p><span>⌘</span> Available for remote NetSuite projects</p>
              <p><span>⌖</span> Pakistan</p>
            </div>
          </div>
          <div className="softCard heroActions">
            <p>Explore my work and experience:</p>
            <div><a href="https://github.com/dilali-pk" target="_blank" rel="noreferrer">View GitHub</a><a href="#contact">Contact Me</a></div>
          </div>
        </div>
        <div className="softCard portraitCard">
          <img src="/dilshad-ali.png" alt="Dilshad Ali working at his computer" />
        </div>
      </section>

      <section className="contentSection" id="features">
        <div className="sectionHeading"><p>Features</p><h2>What I Do</h2></div>
        <div className="featureGrid">
          {[
            ["01", "SuiteScript Development", "Custom scripts that automate processes and extend NetSuite around your business requirements."],
            ["02", "NetSuite Integrations", "Reliable connections between NetSuite and third-party platforms using RESTlets and web services."],
            ["03", "SuiteFlow Automation", "Approval flows and automated workflows that reduce manual work across finance and operations."],
            ["04", "Dashboards & Reporting", "Role-based dashboards, KPIs, saved searches and reports that turn data into useful insight."],
            ["05", "Data Migration", "Structured import, mapping, validation and cleanup for a dependable move into NetSuite."],
            ["06", "SuiteAnalytics", "Workbooks, datasets and analytics configurations designed for clearer business decisions."],
          ].map(([icon, title, text]) => (
            <article className="softCard featureCard" key={title}>
              <span className="featureIcon">{icon}</span><h3>{title}</h3><p>{text}</p><span className="arrow">→</span>
            </article>
          ))}
        </div>
      </section>

      <section className="contentSection" id="contact">
        <div className="sectionHeading"><p>Contact</p><h2>Contact With Me</h2></div>
        <div className="contactGrid">
          <aside className="softCard contactCard">
            <img src="/dilshad-ali.png" alt="Dilshad Ali" />
            <h3>Dilshad Ali</h3><p className="role">NetSuite Developer</p>
            <p>I am available for freelance and remote NetSuite work. Connect with me through one of my professional profiles.</p>
            <div className="contactButtons">
              <a href="https://www.fiverr.com/users/dilali1" target="_blank" rel="noreferrer">Fiverr ↗</a>
              <a href="https://www.upwork.com/freelancers/~01b9fd4cc496f6fae0" target="_blank" rel="noreferrer">Upwork ↗</a>
              <a href="https://github.com/dilali-pk" target="_blank" rel="noreferrer">GitHub ↗</a>
            </div>
          </aside>
          <div className="softCard contactForm">
            <div className="fieldRow"><label>Your Name<input type="text" name="name" placeholder="Name" /></label><label>Phone Number<input type="tel" name="phone" placeholder="Phone" /></label></div>
            <label>Email<input type="email" name="email" placeholder="Email address" /></label>
            <label>Subject<input type="text" name="subject" placeholder="NetSuite project" /></label>
            <label>Your Message<textarea name="message" rows={5} placeholder="Tell me about your requirements" /></label>
            <a className="sendButton" href="https://www.fiverr.com/users/dilali1" target="_blank" rel="noreferrer">Send Message →</a>
          </div>
        </div>
      </section>

      <footer><a className="footerLogo" href="#home">DA</a><p>You could be anywhere on the internet, yet you’re here. Thanks for visiting!</p><span>© 2026 Dilshad Ali</span></footer>
    </main>
  );
}
