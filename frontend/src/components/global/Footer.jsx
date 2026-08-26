const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container footer-container">
          <div className="text-body-lg footer-logo">ALEX.DEV</div>

          <div className="footer-socials">
            <a
              className="social-link text-caption text-variant font-display"
              href="#"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "16px" }}
              >
                code
              </span>
              GitHub
            </a>

            <a
              className="social-link text-caption text-variant font-display"
              href="#"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "16px" }}
              >
                connect_without_contact
              </span>
              LinkedIn
            </a>

            <a
              className="social-link text-caption text-variant font-display"
              href="#"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "16px" }}
              >
                mail
              </span>
              tanmoymozumder0@gmail.com
            </a>
          </div>

          <div className="text-caption text-variant font-display">
            © 2024 Developer Portfolio. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
