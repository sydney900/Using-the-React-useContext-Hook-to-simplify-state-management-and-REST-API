import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="page-footer font-small blue pt-4 footer">
      <div className="footer-copyright text-center py-3">
        <div>
          <a href="/">&copy; {year} Copyright: Sydeny900</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
