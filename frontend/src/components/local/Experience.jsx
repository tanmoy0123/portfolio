const Experience = () => {
  return (
    <>
      <section className="flex-col gap-lg" id="experience">
        <div className="section-header">
          <h2 className="text-headline-lg">Experience</h2>
          <span className="material-symbols-outlined icon-variant">work</span>
        </div>

        <div className="bento-grid">
          {/* Role 1 */}
          <div className="col-md-6 card-outline card-padding flex-col gap-sm">
            <div className="flex-between experience-header">
              <div>
                <h3 className="text-headline-md">
                  Associate Software Engineer
                </h3>

                <p
                  className="text-label-mono text-accent"
                  style={{ marginTop: "4px" }}
                >
                  Tech Innovations Inc.
                </p>
              </div>

              <span className="text-caption text-variant date-badge">
                2022 - Present
              </span>
            </div>

            <p
              className="text-body-md text-variant"
              style={{ marginTop: "8px" }}
            >
              Spearheaded the development of a microservices architecture,
              improving system scalability by 40%. Led a team of 3 junior
              developers and implemented rigorous code review processes.
            </p>

            <div className="flex-wrap experience-tech">
              <span className="text-caption tech-chip font-mono">React</span>
              <span className="text-caption tech-chip font-mono">Node.js</span>
              <span className="text-caption tech-chip font-mono">AWS</span>
            </div>
          </div>

          {/* Role 2 */}
          <div className="col-md-6 card-outline card-padding flex-col gap-sm">
            <div className="flex-between experience-header">
              <div>
                <h3 className="text-headline-md">Trainee Software Engineer</h3>

                <p
                  className="text-label-mono text-accent"
                  style={{ marginTop: "4px" }}
                >
                  DataFlow Systems
                </p>
              </div>

              <span className="text-caption text-variant date-badge">
                2021 - 2022
              </span>
            </div>

            <p
              className="text-body-md text-variant"
              style={{ marginTop: "8px" }}
            >
              Assisted in migrating legacy monolithic applications to modern
              RESTful APIs. Developed frontend components using Vue.js and
              optimized database queries reducing load times by 25%.
            </p>

            <div className="flex-wrap experience-tech">
              <span className="text-caption tech-chip font-mono">Vue.js</span>
              <span className="text-caption tech-chip font-mono">Python</span>
              <span className="text-caption tech-chip font-mono">
                PostgreSQL
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
