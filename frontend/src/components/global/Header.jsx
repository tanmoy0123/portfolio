const Header = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container flex-between navbar-container">
          <a
            className="text-headline-md"
            href="#"
            style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            TANMOY M.
          </a>

          <div className="nav-links">
            <a
              className="nav-link text-body-md active font-display"
              href="#about"
            >
              About
            </a>
            <a
              className="nav-link text-body-md font-display"
              href="#experience"
            >
              Experience
            </a>
            <a className="nav-link text-body-md font-display" href="#projects">
              Projects
            </a>
            <a className="nav-link text-body-md font-display" href="#skills">
              Skills
            </a>
            <a className="nav-link text-body-md font-display" href="#education">
              Education
            </a>
          </div>

          <a
            className="btn btn-primary btn-sm hide-md show-md-flex"
            href="https://1drv.ms/b/c/b59b76edb9a6065f/IQAmT96NlUBDR60zfzrzvfGfAaxtigBK1rg-E05ITtx5yA4?e=TH4xp1"
            target="_blank"
          >
            Resume
          </a>

          <button className="menu-btn hide-md">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
