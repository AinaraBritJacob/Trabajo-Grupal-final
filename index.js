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