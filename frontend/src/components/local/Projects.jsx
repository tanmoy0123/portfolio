const Projects = () => {
  return (
    <>
      <section className="flex-col gap-lg" id="projects">
        <div className="section-header">
          <h2 className="text-headline-lg">Selected Work</h2>

          <span className="material-symbols-outlined icon-variant">
            code_blocks
          </span>
        </div>

        <div className="bento-grid">
          {/* Project 1 */}
          <div className="col-12 card-outline project-featured">
            <div className="project-img-container">
              <img
                alt="Rental Management Dashboard"
                className="project-img"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMlSRlW40_M4lhdtS6J2pzop4diEk9gqjkZPCWjoAQ07gKragQIeTQCYELHZ1BEAyQIO8h0EjaK_Gb4cfEez6Dds_aIIVmWqHl519od9fbj9n3wwkQ7e1nMdIZIArbrzApwtLQkSJmNdD5kLE61RsjJFyuDx5AMHQGiN-7-iSYuUwrgbsMf7hkPLN__YKiq3U26S5absvXWXWAKT9pInmp8QW-2BNnZIhsza9gkBJzyeWxFhrZ1E4tXw"
              />
            </div>

            <div className="card-padding project-featured-content">
              <span className="text-label-mono text-accent project-label">
                FULL STACK
              </span>

              <h3 className="text-headline-md project-title">
                Rental Management Platform
              </h3>

              <p className="text-body-md text-variant project-description">
                A comprehensive SaaS solution for property managers to handle
                leases, maintenance requests, and financial reporting. Built
                with real-time updates and an intuitive dashboard.
              </p>

              <div className="flex-wrap project-tech">
                <span className="text-caption tech-chip font-mono">
                  Next.js
                </span>
                <span className="text-caption tech-chip font-mono">
                  TypeScript
                </span>
                <span className="text-caption tech-chip font-mono">Prisma</span>
              </div>

              <div>
                <a className="text-label-mono case-study-link" href="#">
                  View Case Study
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "16px" }}
                  >
                    arrow_outward
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-md-6 card-outline card-padding flex-col project-grid">
            <div className="project-img-container">
              <img
                alt="Library System UI"
                className="project-img"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-pMqL92LyvPjhklAJpFKHAwSM_IxnBNTFtY3E0BiY85GZTvTMvSYzlz0u3QWTKsRPmx_vcaF002hXKRFU0i22ybd1p1ciadCIISYPlqblq3UvXfOgAmQXxICTBdT1-SqkpYc5POm_DkdyvHWzoUp7mU6Dy84J7M-mxDPrj5-gGO2mrBImKSAJtmWflcFD6S6RwBK9YqfB_ifVEErugnxqLHJIuq6tOqWSae4NPjdmyDi6TNTH-VWXKg"
              />
            </div>

            <span className="text-label-mono text-accent project-small-label">
              BACKEND
            </span>

            <h3 className="text-headline-md project-small-title">
              Library Architecture System
            </h3>

            <p className="text-body-md text-variant project-small-description">
              Scalable microservices backend handling inventory, user lending
              histories, and automated return reminders for a municipal library
              network.
            </p>

            <div className="flex-wrap project-small-tech">
              <span className="text-caption tech-chip font-mono">Java</span>
              <span className="text-caption tech-chip font-mono">
                Spring Boot
              </span>
              <span className="text-caption tech-chip font-mono">Docker</span>
            </div>
          </div>

          {/* Project 3 */}
          <div className="col-md-6 card-outline card-padding flex-col project-grid">
            <div className="project-img-container">
              <img
                alt="Lookbook Widget UI"
                className="project-img"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQIRaiDNq4LuSB7oPo4JavAJFZLu20KcU05_a4PxRe6FaAGN1FFr3h8lMmFV92MxIW455a6tr4Hk6zTD0yinppb4miFih6_9yh4jhlCFqe2by-Skx5VkLn23Ueas_j3v_Fvd0hw426lsKoxV6-wFrmKT5MFXKG9XZhGuhXBY6FdYh6OK6NYA-kBj4XQXaC6_3FuehxuUwBIC1UC5XlYemELbD0OioDZ_B2UDUrKdTYveqPB7ZnzrLAaw"
              />
            </div>

            <span className="text-label-mono text-accent project-small-label">
              FRONTEND WIDGET
            </span>

            <h3 className="text-headline-md project-small-title">
              E-commerce Lookbook Widget
            </h3>

            <p className="text-body-md text-variant project-small-description">
              A lightweight, highly performant embeddable widget for e-commerce
              platforms to create shoppable galleries with zero layout shift.
            </p>

            <div className="flex-wrap project-small-tech">
              <span className="text-caption tech-chip font-mono">React</span>
              <span className="text-caption tech-chip font-mono">
                Tailwind CSS
              </span>
              <span className="text-caption tech-chip font-mono">Vite</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
