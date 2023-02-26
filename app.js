//Menu
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none"
        menu_visible = false;
    }
}
let links =document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}
function crearbarra(idbarra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.classNAme = "e";
        id_barra.appendChild(div);
    }
}

let excel = document.getElementById("excel");
crearBarra(excel);
let powerpoint = document.getElementById("powerpoint");
crearBarra(power);
let word = document.getElementById("word");
crearBarra(word);

