import React from "react";
import Navigation from "../Navigation";
import Image from "react-bootstrap/Image";

const Header = () => {
  return (
      <div className="">
          <div className="justify-content-center main-header">Shatikka McKnight
          </div>
            <div className="secondary-text justify-content-center main-header"><strong>Full Stack Developer focusing on Front-End Development</strong></div>
              <div className="secondary-text main-header">with 1 years of hands-on experience designing, developing, and implementing applications and solutions using a range of technologies and programming languages. Seeking to leverage broad development experience and hands-on technical expertise in a challenging role as a Full-stack Developer.</div>
              
          
          <div><Navigation /></div>

      <Image
        src="https://images.unsplash.com/photo-1516553877159-56509295b160?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1998&q=80"
        fluid
      />
    </div>
  );
};

export default Header;
