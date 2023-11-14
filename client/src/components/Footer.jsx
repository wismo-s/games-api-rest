import React from "react";

export default function Footer() {
  const social = {
    wismo: "https://github.com/wismo-s",
    marco: "https://instagram.com/marco_rp25",
  };
  return (
    <footer>
      <a href={social.wismo} target="_blank" rel="noopener noreferrer">
        Development by: Wismo
      </a>
      <a href={social.marco} target="_blank" rel="noopener noreferrer">
        Helped by: Marco Rumaldo
      </a>
    </footer>
  );
}
