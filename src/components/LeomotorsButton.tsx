import { useState, useEffect } from "react";

const links = [
  "https://skillissue.gay",
  "https://twitter.com/LeomotorsTH/status/1664910625389047813",
  "https://youtu.be/dQw4w9WgXcQ",
];

export const LeomotorsButton = () => {
  function getLink() {
    return links[Math.floor(Math.random() * links.length)];
  }

  const [currentLink, setCurrentLink] = useState(getLink());

  return (
    <div className="p-3 shadow-md rounded-xl bg-red-300">
      <a href={currentLink}>
        <img
          src="/sarnjao/god/lnw.jpg"
          style={{
            height: "30vh",
          }}
        />
        <h1 className="text-2xl font-semibold text-center">ลีโอมอเตอร์ส❓</h1>
      </a>
    </div>
  );
};
