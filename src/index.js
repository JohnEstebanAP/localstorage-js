import Template from '@templates/Template.js';
import '@styles/main.css';
//import '@styles/vars.styl';

//agregar un balor tipo yabe varor en el localStarego
localStorage.setItem("nombre","John");

//recoporar un elemento del local estarege con su yabe.
console.log(localStorage.getItem("nombre"));

//eleminar elemento del localStorage;
localStorage.removeItem("nombre");



//(async function App() {
  //const main = null || document.querySelector(".container");
  //main.innerHTML = await Template();
//})();
