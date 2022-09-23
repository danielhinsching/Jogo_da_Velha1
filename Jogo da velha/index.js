
let jogador = "&#x1F354";

let casa01 = document.getElementById("casa01");
let casa02 = document.getElementById("casa02");
let casa03 = document.getElementById("casa03");
let casa04 = document.getElementById("casa04");
let casa05 = document.getElementById("casa05");
let casa06 = document.getElementById("casa06");
let casa07 = document.getElementById("casa07");
let casa08 = document.getElementById("casa08");
let casa09 = document.getElementById("casa09");



function jogada(casa) {
    if (casa.innerHTML === ""){
        casa.innerHTML = jogador;
        alterna_jogador();

        verifica_ganhador();
    }
        
}
function alterna_jogador() {
    if (jogador === "&#x1F35F"){
        jogador = "&#x1F354";
    }else{
        jogador = "&#x1F35F";
    }
}
function verifica_ganhador() {
    if (casa01.innerHTML!="" && casa01.innerHTML===casa02.innerHTML && casa01.innerHTML=== casa03.innerHTML){
        alert(`Temos um ganhador: ${casa01.innerHTML}`)
    }
    if (casa04.innerHTML!="" && casa04.innerHTML===casa05.innerHTML && casa04.innerHTML=== casa06.innerHTML){
        alert(`Temos um ganhador: ${casa04.innerHTML}`)
    }
    if (casa07.innerHTML!="" && casa07.innerHTML===casa08.innerHTML && casa07.innerHTML=== casa09.innerHTML){
        alert(`Temos um ganhador: ${casa07.innerHTML}`)
    }
    if (casa01.innerHTML!="" && casa01.innerHTML===casa04.innerHTML && casa01.innerHTML=== casa07.innerHTML){
        alert(`Temos um ganhador: ${casa01.innerHTML}`)
    }
    if (casa02.innerHTML!="" && casa02.innerHTML===casa05.innerHTML && casa02.innerHTML=== casa08.innerHTML){
        alert(`Temos um ganhador: ${casa02.innerHTML}`)
    }
    if (casa03.innerHTML!="" && casa03.innerHTML===casa06.innerHTML && casa03.innerHTML=== casa09.innerHTML){
        alert(`Temos um ganhador: ${casa03.innerHTML}`)
    }
    if (casa01.innerHTML!="" && casa01.innerHTML===casa05.innerHTML && casa01.innerHTML=== casa09.innerHTML){
        alert(`Temos um ganhador: ${casa01.innerHTML}`)
    }
    if (casa03.innerHTML!="" && casa03.innerHTML===casa05.innerHTML && casa03.innerHTML=== casa07.innerHTML){
        alert(`Temos um ganhador: ${casa03.innerHTML}`)
    }
}
