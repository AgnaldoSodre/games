function hover(){
    var img = document.getElementById("imgestrela");
    const conteudo = document.getElementById("conteudo");
    const seta = document.getElementById("seta")
    

    img.setAttribute("src","./imagens/estrela (2).png")
    conteudo.style.display = "block";
    seta.style.transform = "rotate(180deg)";
}

function back(){
    var img = document.getElementById("imgestrela");

    img.setAttribute("src","./imagens/estrela (1).png")
    conteudo.style.display = "none";
    seta.style.transform = "none";
}

function hover1(){
    var img = document.getElementById("imgpc");
    const conteudo1 = document.getElementById("conteudo1");
    const seta1 = document.getElementById("seta1")

    img.setAttribute("src","./imagens/computador(1).png")
    conteudo1.style.display = "block";
    seta1.style.transform = "rotate(180deg)";
}

function back1(){
    var img = document.getElementById("imgpc");

    img.setAttribute("src","./imagens/computador.png")
    conteudo1.style.display = "none";
    seta1.style.transform = "none";
}


function hover2(){
    var img = document.getElementById("imgcelular");
    const conteudo2 = document.getElementById("conteudo2");
    const seta2 = document.getElementById("seta2")

    img.setAttribute("src","./imagens/celular (1).png");
    conteudo2.style.display = "block";
    seta2.style.transform = "rotate(180deg)";
}

function back2(){
    var img = document.getElementById("imgcelular");

    img.setAttribute("src","./imagens/celular.png")
    conteudo2.style.display = "none";
    seta2.style.transform = "none";
}

function hover3(){
    const conteudo3 = document.getElementById("conteudo3");
    const seta3 = document.getElementById("seta3")

    conteudo3.style.display = "block";
    seta3.style.transform = "rotate(180deg)";
}

function back3(){

    conteudo3.style.display = "none";
    seta3.style.transform = "none";
}


    const botao1 = document.getElementById("botao1")
    const botao2 = document.getElementById("botao2")
    const botao3 = document.getElementById("botao3")
    const botao4 = document.getElementById("botao4")
    const botao5 = document.getElementById("botao5")
    const botao6 = document.getElementById("botao6")

    const botao01 = document.getElementById("botao01")
    const botao02 = document.getElementById("botao02")
    const botao03 = document.getElementById("botao03")
    const botao04 = document.getElementById("botao04")
    const botao05 = document.getElementById("botao05")
    const botao06 = document.getElementById("botao06")

function trocarsekiro(){
    
    botao1.classList.remove('selected')
    botao2.classList.remove('selected')
    botao3.classList.remove('selected')
    botao4.classList.remove('selected')
    botao5.classList.remove('selected')
    botao6.classList.remove('selected')

    botao01.classList.remove('selecionado')
    botao02.classList.remove('selecionado')
    botao03.classList.remove('selecionado')
    botao04.classList.remove('selecionado')
    botao05.classList.remove('selecionado')
    botao06.classList.remove('selecionado')

    botao1.setAttribute("class","jogo-single selected")
    botao01.setAttribute("class","selecionado")

} 

function trocarcr(){
    botao1.classList.remove('selected')
    botao2.classList.remove('selected')
    botao3.classList.remove('selected')
    botao4.classList.remove('selected')
    botao5.classList.remove('selected')
    botao6.classList.remove('selected')

    botao01.classList.remove('selecionado')
    botao02.classList.remove('selecionado')
    botao03.classList.remove('selecionado')
    botao04.classList.remove('selecionado')
    botao05.classList.remove('selecionado')
    botao06.classList.remove('selecionado')

    botao2.setAttribute("class","jogo-single selected")
    botao02.setAttribute("class","selecionado")

} 

function trocargta(){
    botao1.classList.remove('selected')
    botao2.classList.remove('selected')
    botao3.classList.remove('selected')
    botao4.classList.remove('selected')
    botao5.classList.remove('selected')
    botao6.classList.remove('selected')

    botao01.classList.remove('selecionado')
    botao02.classList.remove('selecionado')
    botao03.classList.remove('selecionado')
    botao04.classList.remove('selecionado')
    botao05.classList.remove('selecionado')
    botao06.classList.remove('selecionado')

    botao3.setAttribute("class","jogo-single selected")
    botao03.setAttribute("class","selecionado")

} 

function trocartlou(){
    botao1.classList.remove('selected')
    botao2.classList.remove('selected')
    botao3.classList.remove('selected')
    botao4.classList.remove('selected')
    botao5.classList.remove('selected')
    botao6.classList.remove('selected')

    botao01.classList.remove('selecionado')
    botao02.classList.remove('selecionado')
    botao03.classList.remove('selecionado')
    botao04.classList.remove('selecionado')
    botao05.classList.remove('selecionado')
    botao06.classList.remove('selecionado')

    botao4.setAttribute("class","jogo-single selected")
    botao04.setAttribute("class","selecionado")

} 

function trocarforza(){
    botao1.classList.remove('selected')
    botao2.classList.remove('selected')
    botao3.classList.remove('selected')
    botao4.classList.remove('selected')
    botao5.classList.remove('selected')
    botao6.classList.remove('selected')

    botao01.classList.remove('selecionado')
    botao02.classList.remove('selecionado')
    botao03.classList.remove('selecionado')
    botao04.classList.remove('selecionado')
    botao05.classList.remove('selecionado')
    botao06.classList.remove('selecionado')

    botao5.setAttribute("class","jogo-single selected")
    botao05.setAttribute("class","selecionado")
    

} 

function trocarsub(){
    botao1.classList.remove('selected')
    botao2.classList.remove('selected')
    botao3.classList.remove('selected')
    botao4.classList.remove('selected')
    botao5.classList.remove('selected')
    botao6.classList.remove('selected')

    botao01.classList.remove('selecionado')
    botao02.classList.remove('selecionado')
    botao03.classList.remove('selecionado')
    botao04.classList.remove('selecionado')
    botao05.classList.remove('selecionado')
    botao06.classList.remove('selecionado')

    botao6.setAttribute("class","jogo-single selected")
    botao06.setAttribute("class","selecionado")

} 

let soma = 1;

setInterval(function(){
    document.getElementById('imagem' + soma).checked = true;
    soma ++;

    if(soma > 20){
        soma = 1;
    }

},4000)