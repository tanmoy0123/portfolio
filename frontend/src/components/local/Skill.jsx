const Skill = () => {
  return (
    <>
      <section className="bento-grid skills-education-section" id="skills">
        {/* Skills */}
        <div className="col-md-7 flex-col gap-md">
          <div className="section-header">
            <h2 className="text-headline-lg">Technical Arsenal</h2>

            <span className="material-symbols-outlined icon-variant">
              terminal
            </span>
          </div>

          <div className="skills-list">
            {/* Languages */}
            <div className="card-outline skill-card">
              <h4 className="text-label-mono skill-heading">Languages</h4>

              <div className="flex-wrap skill-chips">
                <span className="text-body-md tech-chip font-mono">
                  JavaScript (ES6+)
                </span>
                <span className="text-body-md tech-chip font-mono">
                  TypeScript
                </span>
                <span className="text-body-md tech-chip font-mono">Python</span>
                <span className="text-body-md tech-chip font-mono">Java</span>
                <span className="text-body-md tech-chip font-mono">SQL</span>
              </div>
            </div>

            {/* Frameworks */}
            <div className="card-outline skill-card">
              <h4 className="text-label-mono skill-heading">
                Frameworks &amp; Libraries
              </h4>

              <div className="flex-wrap skill-chips">
                <span className="text-body-md tech-chip font-mono">React</span>
                <span className="text-body-md tech-chip font-mono">
                  Next.js
                </span>
                <span className="text-body-md tech-chip font-mono">
                  Node.js
                </span>
                <span className="text-body-md tech-chip font-mono">
                  Express
                </span>
                <span className="text-body-md tech-chip font-mono">
                  Tailwind CSS
                </span>
              </div>
            </div>

            {/* Tools */}
            <div className="card-outline skill-card">
              <h4 className="text-label-mono skill-heading">
                Tools &amp; Platforms
              </h4>

              <div className="flex-wrap skill-chips">
                <span className="text-body-md tech-chip font-mono">
                  Git / GitHub
                </span>
                <span className="text-body-md tech-chip font-mono">Docker</span>
                <span className="text-body-md tech-chip font-mono">AWS</span>
                <span className="text-body-md tech-chip font-mono">Vercel</span>
                <span className="text-body-md tech-chip font-mono">Figma</span>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="col-md-5 flex-col gap-md" id="education">
          <div className="section-header">
            <h2 className="text-headline-lg">Education</h2>

            <span className="material-symbols-outlined icon-variant">
              school
            </span>
          </div>

          <div className="card-outline card-padding flex-col gap-sm">
            <div className="flex-between education-header">
              <h3 className="text-headline-md">B.S. Computer Science</h3>

              <span className="text-caption text-variant font-mono">
                2017 - 2021
              </span>
            </div>

            <p className="text-label-mono text-accent">
              University of Technology
            </p>

            <p className="text-body-md text-variant education-description">
              Graduated with Honors. Specialized in Software Engineering and
              Distributed Systems.
            </p>
          </div>

          <div className="section-header certification-header">
            <h2 className="text-headline-md">Certifications</h2>

            <span className="material-symbols-outlined icon-variant">
              workspace_premium
            </span>
          </div>

          <div className="certifications-list">
            <div className="card-outline certification-card">
              <div>
                <p className="text-label-mono certification-title">
                  AWS Certified Solutions Architect
                </p>

                <p className="text-caption text-variant">
                  Amazon Web Services (2023)
                </p>
              </div>

              <span className="material-symbols-outlined icon-variant">
                open_in_new
              </span>
            </div>

            <div className="card-outline certification-card">
              <div>
                <p className="text-label-mono certification-title">
                  Professional Scrum Master I
                </p>

                <p className="text-caption text-variant">Scrum.org (2022)</p>
              </div>

              <span className="material-symbols-outlined icon-variant">
                open_in_new
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
