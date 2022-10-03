import React from "react";

const features = [
  {
    title: "Online Banking",
    icon: "./images/icon-online.svg",
    content:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    title: "Simple Budgeting",
    icon: "./images/icon-budgeting.svg",
    content:
      "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
  },
  {
    title: "Fast Onboarding",
    icon: "./images/icon-onboarding.svg",
    content:
      "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    title: "Open API",
    icon: "./images/icon-api.svg",
    content:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];

function Features() {
  return (
    <div className="features-wrapper pb-4">
      <div className="features-content container">
        <div className="features-top">
          <h2 className="features-title">Why choose Easybank?</h2>
          <p className="features-description">
            We leverage Open Banking to turn your bank account into your
            financial hub. <br /> Control your finances like never before.
          </p>
        </div>
        <div className="features-cards">
          {features.map((feat) => {
            return (
              <>
                <div className="features-card">
                  <img src={feat.icon} alt="" />
                  <h3>{feat.title}</h3>
                  <p>{feat.content}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Features;
