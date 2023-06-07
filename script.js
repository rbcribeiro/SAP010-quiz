var exibindoComidasTipicas = false;
var exibindoMultiplicacao = false;
var exibindoBebidas = false;
var nome = null;

window.addEventListener('load', function() {
  let nome = prompt("Olá! Qual é o seu nome?");
  
  if (nome === null || nome.trim() === "") {
    nome = "Visitante";
  }
  
  document.getElementById('nome').innerHTML = "Vamos jogar, " + nome + "!";
});

function comidasTipicas() {
  closeAllPages()
  if (exibindoComidasTipicas) {
    document.getElementById('comidasTipicas').style.display = "none";
    exibindoComidasTipicas = false;
  }
  else {
    document.getElementById('comidasTipicas').style.display = "block";
    exibindoComidasTipicas = true;
  }
}

function multiplicacao() {
  closeAllPages()
  if (exibindoMultiplicacao) {
    document.getElementById('multiplicacao').style.display = "none";
    exibindoMultiplicacao = false;
  }
  else {
    document.getElementById('multiplicacao').style.display = "block";
    exibindoMultiplicacao = true;
  }
}

function bebidas() {
  closeAllPages()
  if (exibindoBebidas) {
    document.getElementById('bebidas').style.display = "none";
    exibindoAdicao = false;
  }
  else {
    document.getElementById('bebidas').style.display = "block";
    exibindoBebidas = true;
  }
}

function closeAllPages() {
  document.getElementById('comidasTipicas').style.display = "none";
  document.getElementById('multiplicacao').style.display = "none";
  document.getElementById('bebidas').style.display = "none";
  exibindoComidasTipicas = false;
  exibindoMultiplicacao = false;
  exibindoBebidas = false;
}


function enviarComidasTipicas() {
  let contador = 0;

  let feijoada = document.querySelector('input[name="grupo_feijoada"]:checked');
  if (feijoada !== null && feijoada.value == "brasileira") { contador++; }
 
  let sushi = document.querySelector('input[name="grupo_sushi"]:checked');
  if (sushi !== null && sushi.value == "japonesa") { contador++; }

  let guacamole = document.querySelector('input[name="grupo_guacamole"]:checked');
  if (guacamole !== null && guacamole.value == "mexicana") { contador++; }

  let hamburguer = document.querySelector('input[name="grupo_hamburguer"]:checked');
  if (hamburguer !== null && hamburguer.value == "estaduniense") { contador++; }

  let risoto = document.querySelector('input[name="grupo_risoto"]:checked');
  if (risoto !== null && risoto.value == "italiana1") { contador++; }

  let esfiha = document.querySelector('input[name="grupo_esfiha"]:checked');
  if (esfiha !== null && esfiha.value == "libanesa") { contador++; }

  if (contador == 6) {
    document.getElementById('resultadoComidasTipicas').innerHTML = "Acertou todas. Parabéns!";
  }
  else {
    document.getElementById('resultadoComidasTipicas').innerHTML = "Tente novamente ... Você só acertou " + contador + " respostas.";
  }
}

function enviarMultiplicacao() {
  let contador = 0;

  let multiplicacao9x3 = document.querySelector('input[name="grupo_um"]:checked');
  if (multiplicacao9x3 !== null && multiplicacao9x3.value == "27") { contador++; }
 
  let multiplicacao7x7 = document.querySelector('input[name="grupo_dois"]:checked');
  if (multiplicacao7x7 !== null && multiplicacao7x7.value == "49") { contador++; }

  let multiplicacao4x6 = document.querySelector('input[name="grupo_tres"]:checked');
  if (multiplicacao4x6 !== null && multiplicacao4x6.value == "24") { contador++; }

  let multiplicacao2x8 = document.querySelector('input[name="grupo_quatro"]:checked');
  if (multiplicacao2x8 !== null && multiplicacao2x8.value == "16") { contador++; }

  let multiplicacao5x9 = document.querySelector('input[name="grupo_cinco"]:checked');
  if (multiplicacao5x9 !== null && multiplicacao5x9.value == "45") { contador++; }

  let multiplicacao6x9 = document.querySelector('input[name="grupo_seis"]:checked');
  if (multiplicacao6x9 !== null && multiplicacao6x9.value == "54") { contador++; }

  if (contador == 6) {
    document.getElementById('resultadoMultiplicacao').innerHTML = "Acertou todas. Parabéns!";
  }
  else {
    document.getElementById('resultadoMultiplicacao').innerHTML = "Tente novamente ... Você só acertou " + contador + " respostas.";
  }
}

function enviarBebidas() {
    let contador = 0;
  
    let grupo_a = document.querySelector('input[name="grupo_a"]:checked');
    if (grupo_a !== null && grupo_a.value == "mexico") { contador++; }
   
    let grupo_b = document.querySelector('input[name="grupo_b"]:checked');
    if (grupo_b !== null && grupo_b.value == "japao") { contador++; }
  
    let grupo_c = document.querySelector('input[name="grupo_c"]:checked');
    if (grupo_c !== null && grupo_c.value == "holanda") { contador++; }
  
    let grupo_d = document.querySelector('input[name="grupo_d"]:checked');
    if (grupo_d !== null && grupo_d.value == "russia") { contador++; }
  
    let grupo_e = document.querySelector('input[name="grupo_e"]:checked');
    if (grupo_e !== null && grupo_e.value == "alemanha") { contador++; }
  
    let grupo_f = document.querySelector('input[name="grupo_f"]:checked');
    if (grupo_f !== null && grupo_f.value == "portugal") { contador++; }
  
    if (contador == 6) {
      document.getElementById('resultadoBebidas').innerHTML = "Acertou todas. Parabéns!";
    }
    else {
      document.getElementById('resultadoBebidas').innerHTML = "Tente novamente ... Você só acertou " + contador + " respostas.";;
    }
}