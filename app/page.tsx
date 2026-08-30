const projects = [
  { name: "Hospital API", description: "A Django REST API for managing appointments between doctors and patients.", stack: "Python · Django REST Framework", href: "https://github.com/dilali-pk/hospital-api" },
  { name: "Task Manager", description: "A focused to-do application for organizing tasks and staying productive.", stack: "Django · HTML · CSS", href: "https://github.com/dilali-pk/todo-list" },
  { name: "CV Generator", description: "A practical web app that helps users create professional resumes quickly.", stack: "Python · Django", href: "https://github.com/dilali-pk/cv-generator" },
];

const skills = ["Oracle NetSuite", "SuiteScript 2.x", "SuiteFlow", "Saved Searches", "SuiteAnalytics", "RESTlets", "JavaScript", "ERP Integrations"];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Dilshad Ali home">DA<span>.</span></a>
        <div className="navLinks"><a href="#about">About</a><a href="#work">Work</a><a href="#contact">Contact</a></div>
      </nav>

      <section className="hero" id="home">
        <div className="heroCopy">
          <p className="eyebrow">Hello, I’m</p>
          <h1>Dilshad Ali</h1>
          <h2>NetSuite developer improving the way businesses work.</h2>
          <p className="intro">I customize and extend Oracle NetSuite with SuiteScript, workflows and integrations—turning business requirements into reliable ERP solutions.</p>
          <div className="actions">
            <a className="primary" href="#work">View my work</a>
            <a className="secondary" href="https://github.com/dilali-pk" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </div>
        <div className="portrait" aria-label="Dilshad Ali monogram">
          <div className="orbit orbitOne" /><div className="orbit orbitTwo" />
          <span>DA</span><p>NetSuite<br />Developer</p>
        </div>
      </section>

      <section className="about section" id="about">
        <div><p className="sectionLabel">01 / About</p><h2>I build NetSuite solutions around real business needs.</h2></div>
        <div className="aboutText">
          <p>I’m a NetSuite developer focused on ERP customization, process automation, reporting and system integrations. I use SuiteScript and native NetSuite tools to make finance and operations workflows simpler, faster and more reliable.</p>
          <div className="skillList">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
        </div>
      </section>

      <section className="section projects" id="work">
        <p className="sectionLabel">02 / Selected work</p>
        <div className="projectGrid">
          {projects.map((project, index) => (
            <a className="projectCard" href={project.href} target="_blank" rel="noreferrer" key={project.name}>
              <div className="projectTop"><span>0{index + 1}</span><span>↗</span></div>
              <h3>{project.name}</h3><p>{project.description}</p><small>{project.stack}</small>
            </a>
          ))}
        </div>
      </section>

      <section className="contact section" id="contact">
        <p className="sectionLabel">03 / Contact</p><h2>Have a project in mind?<br />Let’s build it together.</h2>
        <div className="contactLinks">
          <a href="https://www.fiverr.com/users/dilali1" target="_blank" rel="noreferrer">Fiverr ↗</a>
          <a href="https://www.freelancer.com/u/dilalipk" target="_blank" rel="noreferrer">Freelancer ↗</a>
          <a href="https://github.com/dilali-pk" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </section>
      <footer><span>© 2026 Dilshad Ali</span><span>Designed &amp; built with care.</span></footer>
    </main>
  );
}
