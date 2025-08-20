//definições das variaveis contendo o HTML para mudando do DOM dinamicamente
document.addEventListener('DOMContentLoaded', () => { 
    let btn_0 = document.getElementById("problematica-btn");
    let btn_1 = document.getElementById("solucao-btn");
    let btn_2 = document.getElementById("tecnologia-btn");
    let btn_3 = document.getElementById("destaque-btn");

    //Captação do evendo de click para mudar entre os topicos
    btn_0.addEventListener("click", () => {
        document.getElementById("problematicas").style.display = "block";
        document.getElementById("solucaos").style.display = "none";
        document.getElementById("tecnologias").style.display = "none";
        document.getElementById("destaques").style.display = "none";
    })

    btn_1.addEventListener("click", () => {
        document.getElementById("problematicas").style.display = "none";
        document.getElementById("solucaos").style.display = "block";
        document.getElementById("tecnologias").style.display = "none";
        document.getElementById("destaques").style.display = "none";
    })

    btn_2.addEventListener("click", () => {
        document.getElementById("problematicas").style.display = "none";
        document.getElementById("solucaos").style.display = "none";
        document.getElementById("tecnologias").style.display = "block";
        document.getElementById("destaques").style.display = "none";
    })

    btn_3.addEventListener("click", () => {
        document.getElementById("problematicas").style.display = "none";
        document.getElementById("solucaos").style.display = "none";
        document.getElementById("tecnologias").style.display = "none";
        document.getElementById("destaques").style.display = "block";
    })

    //Função para inicializar na posição inicial
    btn_0.click();

    //função para ao clicar no topico, ir direto para subtitulo escolhido
    function scrollOnLink(id){
        document.getElementById(id).scrollIntoView();
    }
})
