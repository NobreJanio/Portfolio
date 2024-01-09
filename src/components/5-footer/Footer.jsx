import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="#Projects">Projeto</a>
        </li>
        <li>
          <a href="#Contact">Contato</a>
        </li>
      </ul>

      <p>© 2023 Janio Junior. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
