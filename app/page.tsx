const projects = [
  { name: "Hospital API", description: "A Django REST API for managing appointments between doctors and patients.", stack: "Python · Django REST Framework", href: "https://github.com/dilali-pk/hospital-api" },
  { name: "Task Manager", description: "A focused to-do application for organizing tasks and staying productive.", stack: "Django · HTML · CSS", href: "https://github.com/dilali-pk/todo-list" },
  { name: "CV Generator", description: "A practical web app that helps users create professional resumes quickly.", stack: "Python · Django", href: "https://github.com/dilali-pk/cv-generator" },
];

const skills = ["Python", "Django", "Django REST", "JavaScript", "React", "HTML & CSS", "MySQL", "Git & GitHub"];

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
          <h2>Web developer crafting useful digital experiences.</h2>
          <p className="intro">I build clean, reliable web applications with Python, Django and modern frontend technologies—turning ideas into products people can actually use.</p>
          <div className="actions">
            <a className="primary" href="#work">View my work</a>
            <a className="secondary" href="https://github.com/dilali-pk" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </div>
        <div className="portrait" aria-label="Dilshad Ali monogram">
          <div className="orbit orbitOne" /><div className="orbit orbitTwo" />
          <span>DA</span><p>Developer<br />&amp; Creator</p>
        </div>
      </section>

      <section className="about section" id="about">
        <div><p className="sectionLabel">01 / About</p><h2>I enjoy solving real problems with thoughtful code.</h2></div>
        <div className="aboutText">
          <p>I’m a developer focused on practical web products, robust APIs and clear user experiences. My work combines backend development with a sharp eye for simple, accessible interfaces.</p>
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
