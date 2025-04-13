
import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full py-6 md:py-0 border-t">
      <div className="container flex flex-col md:flex-row items-center justify-between py-10 md:h-24">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Recipe Whisperer. All rights reserved.
        </p>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
            Terms
          </Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
            Privacy
          </Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
