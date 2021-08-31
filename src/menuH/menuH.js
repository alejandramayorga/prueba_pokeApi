import React from "react";

export default ({ close }) => (
    <div className="menu">
      <ul>
        <li onClick={close} href="/">Inicio </li>
        <li onClick={close}href="google.com">Información</li>
        <li onClick={close}href="google.com">Habilidades</li>
        <li onClick={close}href="google.com">Imagenes</li>
        
      </ul>
    </div>
    );