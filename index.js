const nombre = "Alejandro";
const apellido = "Vergara";
const persona = [{ nombre: nombre }, { apellido: apellido }];
//console.log(persona)

sessionStorage.setItem("persona", persona);
var obj = sessionStorage.persona;

sessionStorage.setItem("persona", JSON.stringify(persona));
var obj = JSON.parse(sessionStorage.getItem("persona"));

localStorage.setItem("persona", JSON.stringify(persona));
console.log(JSON.parse(localStorage.getItem("persona")));

var date1 = new Date();
date1.setTime(date1.getTime()+(10*1000));
var expires = "; expires="+date1.toGMTString();

document.cookie = "day="+1+expires;