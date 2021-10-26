var rightAnswer = document.getElementById("k3");
var resultBox = document.getElementById("results");
var labelBox = document.getElementsByTagName("label");
var u = 0;
var k4 = document.getElementById("k4");
var k5 = document.getElementById("k5");
var quiz = [
  {
    fraga: "Which is the best animal?",
    svar: ["cat", "dog", "parrot"],
    answer: "k3",
    nrQ: 3,
  },

  {
    fraga: "Which is the best designer?",
    svar: ["Prada", "Gucci", "Chanel"],
    answer: "k1",
    nrQ: 3,
  },
  {
    fraga: "Which is the best Company",
    svar: ["Sony", "Nintendo", "Microsoft"],
    answer: "k2",
    nrQ: 3,
  },
  {
    fraga: "Which is the best snacks",
    svar: ["Doritos", "Pringles", "Lays", "Estrella", "OLW"],
    answer: "k4",
    nrQ: 5,
  },
];

function checkAnswer() {
  if (rightAnswer.checked) {
    resultBox.innerHTML = "Correct Answer";
  } else {
    resultBox.innerHTML = "Wrong Answer";
  }

  changeQuestion();
}

function changeQuestion() {
  k4.style.display = "inline";
  k5.style.display = "inline";

  for (let i = 0; i < quiz[u].nrQ; i++) {
    labelBox[i].innerHTML = quiz[u].svar[i];
  }

  $("input[name=fraga1]").prop("checked", false);

  rightAnswer = document.getElementById(quiz[u].answer);
  u++;
}

$(document).ready(function () {
  changeQuestion();
});
