const Contact = () => {
  return (
    <>
      <section className="card-outline contact-section" id="contact">
        <div className="contact-blob blob-1"></div>
        <div className="contact-blob blob-2"></div>

        <div className="contact-content">
          <span className="text-label-mono text-accent contact-label">
            WHATS NEXT?
          </span>

          <h2 className="text-display contact-title">Get In Touch</h2>

          <p className="text-body-lg text-variant contact-description">
            Although I'm not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I'll try my best to get back to you!
          </p>

          <a
            className="btn btn-primary contact-button"
            href="mailto:hello@alex.dev"
          >
            Say Hello
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
