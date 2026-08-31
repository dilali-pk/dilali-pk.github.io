export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a className="logo" href="#home" aria-label="Dilshad Ali home">
          <img className="brandLogo" src="/dilshad-logo.png" alt="Dilshad Ali logo" />
        </a>
        <nav aria-label="Main navigation">
          <a className="active" href="#home">Home</a>
          <a href="#features">Services</a>
          <a href="#contact">Contact</a>
          <a href="https://www.upwork.com/freelancers/~01b9fd4cc496f6fae0" target="_blank" rel="noreferrer">Hire Me</a>
        </nav>
        <a className="headerButton" href="https://github.com/dilali-pk" target="_blank" rel="noreferrer">GitHub</a>
      </header>

      <section className="hero" id="home">
        <div className="heroLeft">
          <div className="softCard heroIntro">
            <p className="welcome">NetSuite solutions that make work easier</p>
            <h1>Hi, I’m <span>Dilshad</span></h1>
            <h2><b>a</b> NetSuite Developer.</h2>
            <p className="lead">I help teams get more out of NetSuite. Whether it’s removing a repetitive step, improving a saved search or connecting another system, I focus on solutions that are practical, easy to maintain and useful in day-to-day work.</p>
            <div className="quickFacts">
              <p><span>▣</span> NetSuite Developer</p>
              <p><span>⌘</span> SuiteScript, workflows and integrations</p>
              <p><span>⌖</span> Pakistan</p>
            </div>
          </div>
          <div className="softCard heroActions">
            <p>Have a NetSuite task you need help with?</p>
            <div><a href="https://github.com/dilali-pk" target="_blank" rel="noreferrer">View GitHub</a><a href="#contact">Contact Me</a></div>
          </div>
        </div>
        <div className="softCard portraitCard">
          <img src="/dilshad-ali.png" alt="Dilshad Ali working at his computer" />
        </div>
      </section>

      <section className="contentSection" id="features">
        <div className="sectionHeading"><p>Services</p><h2>How I Can Help</h2></div>
        <div className="featureGrid">
          {[
            ["01", "SuiteScript Development", "I build and maintain scripts for real NetSuite requirements, from small form improvements to scheduled automations."],
            ["02", "NetSuite Integrations", "I connect NetSuite with other applications through RESTlets and APIs, with clear handling for errors and data sync."],
            ["03", "SuiteFlow Automation", "I set up approvals and workflows that remove repetitive steps while keeping the process easy for users to follow."],
            ["04", "Searches & Reporting", "I create saved searches, KPIs and dashboards so teams can find the information they need without digging through records."],
            ["05", "Data Migration", "I help clean, map and import data carefully, then check the results so the new records are ready to use."],
            ["06", "SuiteAnalytics", "I prepare workbooks and datasets that give finance and operations teams a clearer view of their NetSuite data."],
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
            <p>If you have a NetSuite customization, workflow or integration to discuss, email me directly or connect through one of my professional profiles.</p>
            <div className="contactButtons">
              <a href="https://www.fiverr.com/users/dilali1" target="_blank" rel="noreferrer">Fiverr ↗</a>
              <a href="https://www.upwork.com/freelancers/~01b9fd4cc496f6fae0" target="_blank" rel="noreferrer">Upwork ↗</a>
              <a href="https://github.com/dilali-pk" target="_blank" rel="noreferrer">GitHub ↗</a>
            </div>
          </aside>
          <div className="softCard contactForm emailCard">
            <p className="emailEyebrow">Direct contact</p>
            <h3>Let’s talk about your NetSuite requirements</h3>
            <p>Send me an email with a short overview of what you need. I’ll get back to you as soon as I can.</p>
            <a className="sendButton" href="mailto:dilalipk@gmail.com">Email me at dilalipk@gmail.com →</a>
          </div>
        </div>
      </section>

      <footer><a className="footerLogo" href="#home"><img src="/dilshad-logo.png" alt="Dilshad Ali logo" /></a><p>You could be anywhere on the internet, yet you’re here. Thanks for visiting!</p><span>© 2026 Dilshad Ali</span></footer>
    </main>
  );
}
