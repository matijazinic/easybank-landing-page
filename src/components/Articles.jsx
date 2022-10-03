import React from "react";

const articles = [
  {
    title: "Receive money in any currency with no fees",
    icon: "/images/image-currency.jpg",
    content:
      "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single …",
    author: "Claire Robinson",
  },
  {
    title: "Treat yourself without worrying about money",
    icon: "/images/image-restaurant.jpg",
    content:
      " Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    author: "Wilson Hutton",
  },
  {
    title: "Take your Easybank card wherever you go",
    icon: "/images/image-plane.jpg",
    content:
      "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you …",
    author: "Wilson Hutton",
  },
  {
    title: "Our invite-only Beta accounts are now live!",
    icon: "/images/image-confetti.jpg",
    content:
      "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ...",
    author: "Claire Robinson",
  },
];

function Articles() {
  return (
    <div className="articles-wrapper pb-4">
      <div className="articles-content container">
        <h2 className="articles-title">Latest Articles</h2>
        <div className="articles-list">
          {articles.map((art) => {
            return (
              <div className="article">
                <img src={art.icon} alt={art.title} />
                <div className="article-info">
                  <p className="article-author">By {art.author}</p>
                  <h4 className="article-title">{art.title}</h4>
                  <p className="article-content">{art.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Articles;
