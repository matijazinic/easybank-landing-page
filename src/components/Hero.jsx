import React from "react";

function Hero() {
  return (
    <div className="hero-wrapper pb-4">
      <div className="hero-content container container-sm">
        <div className="hero-left">
          <h1 className="hero-title">Next generation digital banking</h1>
          <p className="hero-description">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button className="btn btn-primary btn-hero">Request Invite</button>
        </div>

        <div className="hero-right">
          <img src="/images/image-mockups.png" alt="" className="hero-image" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
