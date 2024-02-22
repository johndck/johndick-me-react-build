function Footer() {
  return (
    <footer className="footerBackground ">
      <div className="container">
        <div className="footerContent">
          <div className="footerSocialLinks">
            <div>
              <a href="https://twitter.com/johntmdick" target="_blank">
                <img
                  src="/assets/x.png"
                  alt="X/Twitter Link"
                  rel="noopener noreferrer"
                />
              </a>
            </div>

            <div>
              <a href="https://github.com/johndck" target="_blank">
                <img src="/assets/github.png" alt="Github Link" />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/johntdick/" target="_blank">
                <img src="/assets/linkedin.png" alt="Linkedin Link" />
              </a>
            </div>
          </div>

          <div className="footerEmail">
            <a href="mailto:johnturnerdick@gmail.com">
              email: johnturnerdick@gmail.com
            </a>
            <p>release version v1.01 | 22 Feb</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
