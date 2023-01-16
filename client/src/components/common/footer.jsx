import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-5 bg-cz text-white">
      <div className="row">
        <div className="col-3 ">
          <h3>About</h3>
          <p>Details</p>
        </div>
        <div className="col-3">
          <h3>Quick Links</h3>
          <Link to="/billing" className="text-white">
            <i className="fa fa-credit-card"></i> Billing
          </Link>
          <br />
          <Link to="/forum" className="text-white">
            <i className="fa fa-commenting"></i> Forum
          </Link>
          <br />
          <Link to="/fundraising" className="text-white">
            <i className="fa fa-commenting"></i> Fundraising
          </Link>
          <br />
          <Link to="/complaint" className="text-white">
            <i className="fa fa-exclamation-circle"></i> Complaint
          </Link>
        </div>
        <div className="col-3">
          <h3>Forum</h3>
          <p>Latest Discussion</p>
        </div>
        <div className="col-3">
          <h3>Contact us</h3>
          <p>Details</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
