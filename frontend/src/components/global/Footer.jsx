const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container footer-container">
          <div className="text-body-lg footer-logo">TANMOY M.</div>

          <div className="footer-socials">
            {/* Email */}
            <a
              className="social-link text-caption text-variant font-display"
              href="mailto:tanmoymozumder0@gmail.com"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "16px" }}
              >
                mail
              </span>
              tanmoymozumder0@gmail.com
            </a>

            {/* Phone Number */}
            <a
              className="social-link text-caption text-variant font-display"
              href="tel:+8801701716101"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "16px" }}
              >
                call
              </span>
              +880 1701716101
            </a>
          </div>

          <div className="text-caption text-variant font-display">
            © {new Date().getFullYear()} Tanmoy Mozumder. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
