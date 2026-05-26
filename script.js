// PEGANDO OS ELEMENTOS

const temperatura = document.getElementById("temperatura");
const umidade = document.getElementById("umidade");

const tempValor = document.getElementById("tempValor");
const umiValor = document.getElementById("umiValor");

const pitaya = document.getElementById("pitaya");
const statusTexto = document.getElementById("status");

const agua = document.getElementById("agua");
const energia = document.getElementById("energia");
const sustentabilidade = document.getElementById("sustentabilidade");

const pontuacao = document.getElementById("pontuacao");


// FUNÇÃO PRINCIPAL

function atualizarEstufa(){

    // VALORES DOS SLIDERS
    let temp = Number(temperatura.value);
    let umi = Number(umidade.value);

    // MOSTRAR VALORES NA TELA
    tempValor.innerText = temp;
    umiValor.innerText = umi;

    // PONTUAÇÃO INICIAL
    let pontos = 100;


    // =========================
    // TEMPERATURA
    // =========================

    if(temp < 18){

        pitaya.innerText = "🥀";
        statusTexto.innerText =
            "Muito frio para a pitaya.";

        pontos -= 30;

    }

    else if(temp <= 30){

        pitaya.innerText = "🌵";
        statusTexto.innerText =
            "Temperatura ideal para crescimento.";

    }

    else{

        pitaya.innerText = "🔥";
        statusTexto.innerText =
            "Temperatura muito alta!";

        pontos -= 30;

    }


    // =========================
    // UMIDADE
    // =========================

    if(umi < 40){

        agua.innerText = "Pouca água";
        pontos -= 20;

    }

    else if(umi <= 70){

        agua.innerText = "Uso eficiente da água";

    }

    else{

        agua.innerText = "Excesso de água";
        pontos -= 20;

    }


    // =========================
    // ENERGIA
    // =========================

    if(temp > 35){

        energia.innerText =
            "Alto gasto energético";

        pontos -= 10;

    }

    else{

        energia.innerText =
            "Economia de energia";

    }


    // =========================
    // SUSTENTABILIDADE
    // =========================

    if(pontos >= 80){

        sustentabilidade.innerText =
            "Excelente 🌱";

    }

    else if(pontos >= 50){

        sustentabilidade.innerText =
            "Boa ✅";

    }

    else{

        sustentabilidade.innerText =
            "Baixa ❌";

    }


    // =========================
    // PONTUAÇÃO FINAL
    // =========================

    pontuacao.innerText =
        "🌱 Pontuação Sustentável: " + pontos;

}


// EVENTOS DOS CONTROLES

temperatura.addEventListener(
    "input",
    atualizarEstufa
);

umidade.addEventListener(
    "input",
    atualizarEstufa
);


// INICIAR SISTEMA

atualizarEstufa();