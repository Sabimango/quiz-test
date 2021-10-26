var rightAnswer = document.getElementById("k3");
var resultBox = document.getElementById("results");
var labelBox = document.getElementsByTagName("label");
var u = 0;
var k4 = document.getElementById("k4");
var k5 = document.getElementById("k5");



function checkAnswer() {
  if (rightAnswer.checked) {
    resultBox.innerHTML = "Correct Answer";
  } else {
    resultBox.innerHTML = "Wrong Answer";
  }

  changeQuestion()
}


function changeQuestion(){
u++

if(u==1){

  labelBox[0].innerHTML = "Prada";
  labelBox[1].innerHTML = "Gucci";
  labelBox[2].innerHTML = "Chanel";

  $("input[name=fraga1]").prop("checked", false);

  rightAnswer = document.getElementById("k1");
}

if(u==2){

    labelBox[0].innerHTML = "Sony";
    labelBox[1].innerHTML = "Nintendo";
    labelBox[2].innerHTML = "Microsoft";
  
    $("input[name=fraga1]").prop("checked", false);
  
    rightAnswer = document.getElementById("k2");
  }

  if(u==3){
    k4.style.display = "inline";
    k5.style.display = "inline";

    labelBox[0].innerHTML = "Doritos";
    labelBox[1].innerHTML = "Pringles";
    labelBox[2].innerHTML = "Lays";
    labelBox[3].innerHTML = "Estrella";
    labelBox[4].innerHTML = "OLW";

    $("input[name=fraga1]").prop("checked", false);
  
    rightAnswer = document.getElementById("k4");
  }

}

