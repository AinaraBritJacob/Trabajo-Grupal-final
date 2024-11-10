let L= document.querySelector("#Lista")
let M= document.querySelector("#M")
let O= document.querySelector("#O")

M.onclick = function() {
    L.innerHTML = `
        <li>1 huevo</li>
        <li>1 cucharadita de esencia de vainilla</li>
        <li>80 ml de aceite</li>
        <li>60 g de azúcar</li>
        <li>200 g de harina 0000</li>
        <li>1 cucharada sopera de café</li>
        <li>1/2 cucharada de cacao amargo</li>
        `;
}
O.onclick = function() {
    L.innerHTML = ""; 
};



let Li= document.querySelector("#Li")
let S= document.querySelector("#S")
let A= document.querySelector("#A")

S.onclick = function() {
    Li.innerHTML = `
       <li>2  huevos</li>
<li>140 gr de azucar</li> 
<li>100 cc aceite girasol</li>
<li>50 cc leche</li>
<li>160 gr harina leudante</li>
<li>1 pizca de sal</li>
<li>1 cdita escencia de vainilla</li>
        `;
}
A.onclick = function() {
    Li.innerHTML = ""; 
};

let Frutilla= document.querySelector("#Frutilla")
let Fru= document.querySelector("#Fru")
let Tilla= document.querySelector("#Tilla")

Fru.onclick = function() {
    Frutilla.innerHTML = `
       <li>600g de frutillas congeladas</li>
    <li>150 g de leche</li>
        `;
}
Tilla.onclick = function() {
    Frutilla.innerHTML = ""; 
};

let Leche= document.querySelector("#Leche")
let Le= document.querySelector("#Le")
let Che= document.querySelector("#Che")

Le.onclick = function() {
    Leche.innerHTML = `
      <li>30ml de cafe</li>
<li>60ml de leche</li>
<li>1 cucharada de azucar(opcional)</li>
        `;
}
Che.onclick = function() {
    Leche.innerHTML = ""; 
};



let respuesta;
 
let boton= document.querySelector("#Boton") 
 
 
 boton.onclick= function () {
   
     respuesta = document.querySelector("#Inp").value;
 
     if (respuesta == "Me gustaron") {
         alert("Nos alegramos!");
         
     } else {
         alert("Trabajaremos en mejorar");
         
     }
 }
 
