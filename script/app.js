//Pegando um único elemento
// let tecla_pom = document.querySelector(".tecla_pom");

// function tocarSom(){
//     document.querySelector("#som_tecla_pom").play();
// }

// tecla_pom.onclick = tocarSom;

let listaDeTeclas = document.querySelectorAll(".tecla");

function tocarSom(idElementoSom){
    document.querySelector(idElementoSom).play();
}

let contador = 0;
while(contador < 9){
    let tecla = listaDeTeclas[contador];
    let instrumento = tecla.classList[1]; // tecla_xxx
    let audio = `#som_${instrumento}`;
    listaDeTeclas[contador].onclick = function () {
         tocarSom(audio);
    }
   
    tecla.onKeydown = function(event){
        if(event.code === "Enter" | event.code === "Space" | event.code === "NumpadEnter"){
            tecla.classList.add('ativa');
        }
    }

    tecla.onKeyup = function(){
        tecla.classList.remove('ativa');
    }
    contador++;

}