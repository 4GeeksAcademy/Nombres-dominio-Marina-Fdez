import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = () => {
  let pronombre = ['the', 'our'];
  let adj = ['great', 'big'];
  let nombre = ['jogger', 'racoon'];
  let extension = ['.com', '.net', '.us', '.io'];

  const lista = document.getElementById("lista-dominios");

  for (let p of pronombre) {
    for (let a of adj) {
      for (let n of nombre) {
        for (let ext of extension) {
          let dominio = p + a + n + ext;

          let item = document.createElement("li");
          item.textContent = dominio;

          
          lista.appendChild(item);
        }
      }
    }
  }
};

