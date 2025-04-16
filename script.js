// 🖼️ Carrossel automático
const fotos = ["foto1.jpeg", "foto2.jpeg", "foto3.jpeg","foto4.jpeg"];
let indexAtual = 0;
const fotoElemento = document.getElementById("fotoAtual");

function mudaFoto(direcao = 1) {
  indexAtual = (indexAtual + direcao + fotos.length) % fotos.length;
  fotoElemento.classList.remove("fade-in");
  void fotoElemento.offsetWidth; // reinicia animação
  fotoElemento.src = fotos[indexAtual];
  fotoElemento.classList.add("fade-in");
}

setInterval(() => mudaFoto(1), 3000);

// 🕓 Contador de tempo de amor
const inicioRelacionamento = new Date("2024-09-30T00:00:00");

function atualizarContador() {
  const agora = new Date();
  const diff = agora - inicioRelacionamento;

  const segundos = Math.floor(diff / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);
  const anos = Math.floor(dias / 365);

  const diasRestantes = dias % 365;
  const horasRestantes = horas % 24;
  const minutosRestantes = minutos % 60;
  const segundosRestantes = segundos % 60;

  document.getElementById("contador").textContent =
    `${anos} anos, ${diasRestantes} dias, ${horasRestantes} horas, ${minutosRestantes} minutos e ${segundosRestantes} segundos`;
}

setInterval(atualizarContador, 1000);
atualizarContador();

