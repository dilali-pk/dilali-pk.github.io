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
          <a href="#process">Process</a>
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
            ["07", "AI Automation", "I connect practical AI tools with NetSuite processes to classify information, prepare summaries and reduce repetitive manual work—with the right review steps in place."],
          ].map(([icon, title, text]) => (
            <article className="softCard featureCard" key={title}>
              <span className="featureIcon">{icon}</span><h3>{title}</h3><p>{text}</p><span className="arrow">→</span>
            </article>
          ))}
        </div>
      </section>

      <section className="contentSection processSection" id="process">
        <div className="sectionHeading"><p>How It Works</p><h2>A Clear, Practical Process</h2></div>
        <p className="sectionIntro">Every project starts with the business problem—not the technology. I keep the work transparent, test it carefully and make sure your team understands the final solution.</p>
        <div className="processGrid">
          {[
            ["01", "Understand", "We discuss the current process, the people involved and the result you want from NetSuite."],
            ["02", "Plan", "I map the data, automation steps, permissions and possible exceptions before development begins."],
            ["03", "Build & Test", "I develop the solution in manageable parts, test real scenarios and share progress along the way."],
            ["04", "Launch & Support", "After approval, I help move it live, explain how it works and support any final adjustments."],
          ].map(([number, title, text]) => (
            <article className="softCard processCard" key={number}>
              <span>{number}</span><h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contentSection useCaseSection" id="use-cases">
        <div className="sectionHeading"><p>Use Cases</p><h2>Where Automation Can Help</h2></div>
        <div className="useCaseGrid">
          <article className="softCard useCaseCard">
            <p className="useCaseLabel">Finance Operations</p>
            <h3>AI-Assisted Vendor Bill Processing</h3>
            <p>Invoice details can be extracted and prepared for NetSuite, while duplicate checks, missing fields and unusual amounts are flagged for a person to review before posting.</p>
            <div className="flowLine"><span>Invoice received</span><b>→</b><span>Data checked</span><b>→</b><span>Human approval</span><b>→</b><span>NetSuite</span></div>
          </article>
          <article className="softCard useCaseCard">
            <p className="useCaseLabel">Sales & Operations</p>
            <h3>Order Exception Summaries</h3>
            <p>Instead of reviewing every order manually, an automation can identify holds, stock issues or unusual changes and prepare a clear summary so the team knows what needs attention first.</p>
            <div className="flowLine"><span>Order data</span><b>→</b><span>Exceptions found</span><b>→</b><span>Summary sent</span><b>→</b><span>Team action</span></div>
          </article>
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
