import React, { useState } from 'react';
import { 
  Mail, 
  Terminal as TerminalIcon, 
  Cpu, 
  Database, 
  Code2, 
  Layers, 
  ShieldCheck, 
  FileText, 
  Search, 
  Lock, 
  Server, 
  ChevronRight, 
  Star, 
  Check,
  Code,
  Flame,
  Binary
} from 'lucide-react';

// Custom inline SVG icons for brands (since Lucide removed them in newer versions)
const GithubIcon = ({ size = 24, ...props }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 24, ...props }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [consoleKey, setConsoleKey] = useState(null);
  
  const tharunData = {
    focus: ["RAG Pipelines", "Backend Engineering", "AI Search Systems"],
    building: "Secure Employee Knowledge Assistant with hybrid vector search",
    stack: ["FastAPI", "Qdrant", "PostgreSQL", "React.js", "JavaScript"],
    ask_me: ["RAG", "Vector DBs", "FastAPI", "Semantic Search", "SQL"],
    goal: "SDE / Backend / AI Engineer roles",
    motto: "Build. Learn. Scale. Repeat. 🚀"
  };

  const handleKeyClick = (key) => {
    setConsoleKey(consoleKey === key ? null : key);
  };

  const skills = [
    { name: "Python", category: "languages", level: "Advanced" },
    { name: "JavaScript", category: "languages", level: "Advanced" },
    { name: "SQL", category: "languages", level: "Advanced" },
    { name: "HTML5", category: "languages", level: "Intermediate" },
    { name: "CSS3", category: "languages", level: "Intermediate" },
    
    { name: "FastAPI", category: "backend", level: "Advanced" },
    { name: "Node.js", category: "backend", level: "Advanced" },
    { name: "Express.js", category: "backend", level: "Advanced" },
    { name: "REST APIs", category: "backend", level: "Advanced" },
    
    { name: "Qdrant", category: "databases", level: "Advanced" },
    { name: "PostgreSQL", category: "databases", level: "Advanced" },
    { name: "MySQL", category: "databases", level: "Advanced" },
    
    { name: "React", category: "frontend", level: "Intermediate" },
    
    { name: "Git & GitHub", category: "tools", level: "Advanced" },
    { name: "Docker", category: "tools", level: "Intermediate" },
    { name: "VS Code", category: "tools", level: "Advanced" },
    { name: "Postman", category: "tools", level: "Advanced" }
  ];

  return (
    <div className="animate-fade-in">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container navbar-container">
          <a href="#" className="logo">
            <Code2 size={24} />
            <span>Tharun Tej</span>
          </a>
          <ul className="nav-links">
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#tech" className="nav-link">Tech Stack</a></li>
            <li><a href="#projects" className="nav-link">Featured Project</a></li>
            <li><a href="#objective" className="nav-link">Objective</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="badge">
              <Flame size={14} className="animate-pulse" />
              <span>Actively seeking SDE & Backend Opportunities</span>
            </div>
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Tharun Tej</span>
            </h1>
            <h2 className="hero-subtitle">
              Backend & RAG Developer | AI Search Architect
            </h2>
            <p className="hero-description text-muted">
              I am a Computer Science undergraduate at JNTUH specializing in high-performance backend architectures, vector search integrations, and enterprise-grade RAG systems.
            </p>
            <div className="btn-group">
              <a href="#projects" className="btn btn-primary">
                View Featured Project
                <ChevronRight size={18} />
              </a>
              <a href="#objective" className="btn btn-secondary">
                Let's Connect
              </a>
            </div>
          </div>

          {/* Interactive Python Console Widget */}
          <div className="terminal-wrapper">
            <div className="terminal">
              <div className="terminal-header">
                <div className="terminal-buttons">
                  <div className="terminal-btn close"></div>
                  <div className="terminal-btn minimize"></div>
                  <div className="terminal-btn maximize"></div>
                </div>
                <div className="terminal-title">tharun_profile.py</div>
                <TerminalIcon size={16} style={{ opacity: 0.5 }} />
              </div>
              <div className="terminal-body">
                <div className="terminal-line">
                  <span className="prompt">&gt;&gt;&gt;</span>
                  <span className="syntax-key">import</span> tharuntej
                </div>
                <div className="terminal-line">
                  <span className="prompt">&gt;&gt;&gt;</span>
                  <span className="syntax-key">print</span><span className="syntax-bracket">(</span>tharuntej.profile<span className="syntax-bracket">)</span>
                </div>
                <div className="terminal-line">
                  <span className="syntax-key">tharun</span> = <span className="syntax-bracket">&#123;</span>
                </div>
                {Object.entries(tharunData).map(([key, value]) => (
                  <div 
                    key={key} 
                    className="terminal-line" 
                    style={{ paddingLeft: '20px', cursor: 'pointer' }}
                    onClick={() => handleKeyClick(key)}
                  >
                    <span className="syntax-key">"{key}"</span>: {
                      Array.isArray(value) ? (
                        <span>
                          <span className="syntax-bracket">[</span>
                          {value.map((item, idx) => (
                            <span key={idx}>
                              <span className="syntax-string">"{item}"</span>
                              {idx < value.length - 1 ? ', ' : ''}
                            </span>
                          ))}
                          <span className="syntax-bracket">]</span>
                        </span>
                      ) : (
                        <span className="syntax-string">"{value}"</span>
                      )
                    }
                    {key !== "motto" ? "," : ""}
                    <span className="syntax-comment" style={{ marginLeft: '12px' }}>
                      {consoleKey === key ? '◀ (Click to collapse description)' : '◀ (Click details)'}
                    </span>
                  </div>
                ))}
                <div className="terminal-line">
                  <span className="syntax-bracket">&#125;</span>
                </div>
                
                {/* Console Output Expansion */}
                {consoleKey && (
                  <div style={{
                    marginTop: '16px',
                    padding: '12px',
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: '6px',
                    borderLeft: '3px solid hsl(var(--primary))',
                    fontSize: '13px'
                  }}>
                    <span className="syntax-key" style={{ fontWeight: 'bold' }}>{consoleKey.toUpperCase()}:</span>{' '}
                    {consoleKey === 'focus' && 'My engineering core is split between building intelligent vector spaces, clean database design, and structured system interaction.'}
                    {consoleKey === 'building' && 'Architecting role-based enterprise knowledge systems. Solving data privacy and vector filtering for secure multi-tenant RAG.'}
                    {consoleKey === 'stack' && 'My battle-tested developer tools of choice for high performance, stability, and speed.'}
                    {consoleKey === 'ask_me' && 'Shoot me queries about indexing, semantic embeddings, latency optimization, and query crafting.'}
                    {consoleKey === 'goal' && 'Seeking opportunities to contribute to high-impact products and build engineering systems that scale.'}
                    {consoleKey === 'motto' && 'Continuous improvement, high accountability, and clean designs define how I tackle software problems.'}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section" id="about" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Bridging the gap between intelligent search models and rock-solid backend infrastructure.
            </p>
          </div>
          <div className="about-grid">
            <div className="glass-card">
              <h3 style={{ fontSize: '22px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Cpu size={20} className="gradient-text" /> My Background
              </h3>
              <p style={{ marginBottom: '16px' }}>
                As a Computer Science undergraduate at JNTUH, I've dedicated my study to mastering high-throughput backend services and RAG architectures. I focus on creating search experiences that are both fast and contextually aware.
              </p>
              <p>
                My projects implement hybrid search pipelines that combine vector retrieval (dense semantic) with traditional index searches (sparse lexical) to return high-precision contexts.
              </p>
            </div>
            
            <div className="glass-card">
              <h3 style={{ fontSize: '22px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Layers size={20} className="gradient-text" /> Engineering Principles
              </h3>
              <ul className="about-features">
                <li className="about-feature-item">
                  <ShieldCheck size={18} className="about-feature-icon" />
                  <span>Security First RAG</span>
                </li>
                <li className="about-feature-item">
                  <Database size={18} className="about-feature-icon" />
                  <span>Clean Metadata Design</span>
                </li>
                <li className="about-feature-item">
                  <Server size={18} className="about-feature-icon" />
                  <span>REST API Scalability</span>
                </li>
                <li className="about-feature-item">
                  <Code size={18} className="about-feature-icon" />
                  <span>Modular Architecture</span>
                </li>
              </ul>
              <div style={{ marginTop: '24px', padding: '16px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <p style={{ fontSize: '14px', fontStyle: 'italic', textAlign: 'center' }}>
                  "Building secure AI components requires tight control of indexing, caching, and document retrieval access controls."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="section" id="tech">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Technical Expertise</h2>
            <p className="section-subtitle">My toolbox for building performant modern web and backend architectures.</p>
          </div>
          
          <div className="tech-grid">
            {/* Languages */}
            <div className="glass-card tech-card">
              <h3 className="tech-card-title">
                <Binary size={18} />
                <span>Languages</span>
              </h3>
              <div className="tech-list">
                {skills.filter(s => s.category === 'languages').map(skill => (
                  <div key={skill.name} className="tech-item">
                    <span className="tech-name">{skill.name}</span>
                    <span className="tech-level">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend & AI */}
            <div className="glass-card tech-card">
              <h3 className="tech-card-title">
                <Cpu size={18} />
                <span>Backend & AI</span>
              </h3>
              <div className="tech-list">
                {skills.filter(s => s.category === 'backend').map(skill => (
                  <div key={skill.name} className="tech-item">
                    <span className="tech-name">{skill.name}</span>
                    <span className="tech-level">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="glass-card tech-card">
              <h3 className="tech-card-title">
                <Database size={18} />
                <span>Databases & Vector</span>
              </h3>
              <div className="tech-list">
                {skills.filter(s => s.category === 'databases').map(skill => (
                  <div key={skill.name} className="tech-item">
                    <span className="tech-name">{skill.name}</span>
                    <span className="tech-level">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Frontend & Tools */}
            <div className="glass-card tech-card">
              <h3 className="tech-card-title">
                <Code2 size={18} />
                <span>Tools & Frontend</span>
              </h3>
              <div className="tech-list">
                {skills.filter(s => s.category === 'tools' || s.category === 'frontend').map(skill => (
                  <div key={skill.name} className="tech-item">
                    <span className="tech-name">{skill.name}</span>
                    <span className="tech-level">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section" id="projects" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Project</h2>
            <p className="section-subtitle">A deep dive into an enterprise-grade AI architecture I designed.</p>
          </div>
          
          <div className="project-showcase">
            <div className="glass-card">
              <div className="project-meta">
                <div>
                  <h3 className="project-title">🔒 Secure Employee Knowledge Assistant</h3>
                  <p className="project-subtitle">Enterprise RAG application for secure, role-aware document retrieval</p>
                </div>
                <div className="project-tags">
                  <span className="project-tag special">FastAPI</span>
                  <span className="project-tag special">Qdrant</span>
                  <span className="project-tag special">PostgreSQL</span>
                  <span className="project-tag">Python</span>
                  <span className="project-tag">OpenAI</span>
                </div>
              </div>
              
              <p className="project-desc">
                This project focuses on resolving the data-security challenges faced when deploying RAG systems inside large organizations. Using Qdrant payload filters, access control lists are baked directly into semantic vector lookups, ensuring employees only retrieve documents matching their clearance levels.
              </p>
              
              <div className="project-table-container">
                <table className="project-table">
                  <thead>
                    <tr>
                      <th>Core Feature</th>
                      <th>Technical Details & Ingestion Architecture</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="project-feature-cell">
                        <Search size={16} className="project-feature-icon" />
                        Hybrid Vector Search
                      </td>
                      <td>Combines BM25 lexical keyword scores with dense vector semantic retrieval in Qdrant collections.</td>
                    </tr>
                    <tr>
                      <td className="project-feature-cell">
                        <Lock size={16} className="project-feature-icon" />
                        Role-Based Access
                      </td>
                      <td>Applies dynamic metadata filters to vector database payloads at query time, guaranteeing multi-tenant security.</td>
                    </tr>
                    <tr>
                      <td className="project-feature-cell">
                        <FileText size={16} className="project-feature-icon" />
                        Document Processing
                      </td>
                      <td>Structured ingestion pipeline handling tokenization, parent-child chunking, and Cohere/OpenAI embeddings.</td>
                    </tr>
                    <tr>
                      <td className="project-feature-cell">
                        <Cpu size={16} className="project-feature-icon" />
                        LLM Integration
                      </td>
                      <td>Context-augmented response synthesis with token tracking, prompt templates, and citation tracking.</td>
                    </tr>
                    <tr>
                      <td className="project-feature-cell">
                        <Server size={16} className="project-feature-icon" />
                        Backend Orchestration
                      </td>
                      <td>Asynchronous API layer powered by FastAPI, with metadata indexing managed using PostgreSQL.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objective / Contact Section */}
      <section className="section" id="objective">
        <div className="container">
          <div className="objective-card glass-card">
            <h2 className="section-title">Career Objective</h2>
            <p className="objective-quote">
              "The best code is not just code that works — it's code that scales, stays secure, and solves real problems."
            </p>
            <p style={{ maxWidth: '600px', margin: '0 auto 32px auto', fontSize: '16px' }}>
              I am actively looking for **Backend Developer**, **AI/RAG Engineer**, and **SDE** roles where I can architect robust database pipelines, work with modern search spaces, and build scalable backends. Let's build something together!
            </p>
            
            <div className="contact-links">
              <a href="https://linkedin.com/in/tharuntejmanchala" target="_blank" rel="noopener noreferrer" className="contact-btn linkedin">
                <LinkedinIcon size={18} />
                <span>LinkedIn Profile</span>
              </a>
              <a href="mailto:tharuntej2021@gmail.com" className="contact-btn gmail">
                <Mail size={18} />
                <span>Email Me</span>
              </a>
              <a href="https://github.com/tharuntejmanchala" target="_blank" rel="noopener noreferrer" className="contact-btn github">
                <GithubIcon size={18} />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Tharun Tej Manchala. Made with React & Vanilla CSS. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
