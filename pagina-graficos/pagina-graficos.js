const equipes = [
  "BOA NOITE - CH",
  "TRIFORCE",
  "PIPAS",
  "TANDROM",
  "ZEROOHM - CH",
  "YUPI",
];

const total = [820, 770, 750, 640, 570, 550];

const desafios = [
  "1º Desafio - Nome",
  "2º Desafio - Botão e LED's",
  "3º Desafio - Sensores Ultrassônicos",
  "4º Desafio - Média Prova",
  "5º Desafio - Corrida",
];

const dadosDesafios = {
  "BOA NOITE - CH": [100, 90, 200, 270, 160],
  TRIFORCE: [80, 100, 180, 210, 200],
  PIPAS: [90, 80, 160, 300, 120],
  TANDROM: [70, 70, 120, 240, 140],
  "ZEROOHM - CH": [80, 60, 100, 150, 180],
  YUPI: [70, 60, 140, 180, 100],
};

const cores = [
  "#d2760e",
  "#16664f",
  "#4caf50",
  "#2196f3",
  "#9c27b0",
  "#f44336",
];

// ================== GRÁFICO 1 - Barras (Pontuação Total) ==================
const ctxTotal = document.getElementById("chartTotal").getContext("2d");
new Chart(ctxTotal, {
  type: "bar",
  data: {
    labels: equipes,
    datasets: [
      {
        label: "Pontuação Total",
        data: total,
        backgroundColor: cores,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      y: { beginAtZero: true },
    },
  },
});

// ================== GRÁFICO 2 - Linhas (Desempenho por desafio) ==================
const ctxLinhas = document.getElementById("chartLinhas").getContext("2d");
new Chart(ctxLinhas, {
  type: "line",
  data: {
    labels: desafios,
    datasets: equipes.map((eq, i) => ({
      label: eq,
      data: dadosDesafios[eq],
      borderColor: cores[i],
      backgroundColor: cores[i] + "55",
      tension: 0.3,
      fill: false,
    })),
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
    },
    scales: {
      y: { beginAtZero: true },
    },
  },
});

// ================== GRÁFICO 3 - Barras Horizontais (Desafio 3) ==================
const ctxBarraH = document
  .getElementById("chartBarrasHorizontais")
  .getContext("2d");
new Chart(ctxBarraH, {
  type: "bar",
  data: {
    labels: equipes,
    datasets: [
      {
        label: "Pontos no 3º Desafio",
        data: equipes.map((eq) => dadosDesafios[eq][2]),
        backgroundColor: cores,
      },
    ],
  },
  options: {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { beginAtZero: true },
    },
  },
});
