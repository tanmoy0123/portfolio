const Hero = () => {
  return (
    <>
      <section className="bento-grid hero-section" id="about">
        <div
          className="col-md-8 flex-col gap-md"
          style={{ justifyContent: "center" }}
        >
          <div className="availability">
            <span className="status-indicator"></span>
            <span className="text-label-mono text-variant">
              Available for full stack developer opportunities
            </span>
          </div>

          <h1 className="text-display">
            Tanmoy Mozumder
            <br />
            <span className="text-accent">Full Stack Developer</span>
          </h1>

          {/* <p className="text-body-lg text-variant hero-description">
            I specialize in full-stack development utilizing Java, Spring Boot,
            Angular, and React. My expertise lies in crafting RESTful APIs,
            optimizing databases, and deploying reliable solutions to cloud
            environments like AWS.
          </p> */}

          <p className="text-body-md text-variant hero-description">
            I build and ship scalable full-stack web applications — mostly Java
            and Spring Boot on the backend, React or Angular on the front, and
            AWS to get it all deployed. I care about secure architecture,
            optimizing databases, and writing maintainable code the next person
            can actually read.
          </p>
          <p
            className="text-body-md text-variant hero-description"
            style={{ marginTop: "12px" }}
          >
            Day to day, that means crafting secure REST APIs, optimizing
            queries, and shipping features in fast-paced Agile sprints. Whether
            building complex systems or managing reliable deployments, my focus
            is on seamless end-to-end delivery.
          </p>
          <div className="hero-buttons" style={{ flexWrap: "wrap" }}>
            {/* GitHub */}
            <a
              className="btn btn-secondary"
              href="https://github.com/tanmoy0123"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              className="btn btn-secondary"
              href="https://www.linkedin.com/in/tanmoymozumder/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              LinkedIn
            </a>

            {/* Email */}
            <a
              className="btn btn-secondary"
              href="https://leetcode.com/u/your-username/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.464 2.414-1.464 3.96s.483 2.978 1.464 3.96l4.332 4.364a5.274 5.274 0 0 0 3.86 1.488 5.234 5.234 0 0 0 3.847-1.503l2.698-2.606c.514-.515.497-1.366-.038-1.901-.535-.535-1.387-.553-1.902-.038z"></path>
              </svg>
              LeetCode
            </a>
          </div>
        </div>

        <div className="col-md-4 card-outline hero-image-card">
          <img
            alt="Tanmoy Mozumder"
            className="hero-image"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdtAzGmd1NV4QWbUn4P_8cC810IjQrwvn_YPfT_Mng8uy_1CG7QL8j0pmj9g9_4A8ymOlYs4wwiBOyGdqMqNMJockPpqq3LAr6xBZx-IA9a5UjydFzT0zE3X_2mBgS_xaeEHgalqKnSgo629fxB5sO4jrb6lokSg1t8lbKwTgOjuLorJdDF_P8685WY78rBWuQxt1Fy3F4RHTlkK1xgM4wEhURXwqZUFk6wCJqY_2WE_f5S3_EDkTCLg"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
