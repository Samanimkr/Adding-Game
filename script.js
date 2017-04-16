$(document).ready(function() {

  var a=0, b=0, Answer=0;
  var textbox = document.getElementById("textbox");
  var button = document.getElementById("button");
  var question = document.getElementById("question");
  generateQuestion();

  textbox.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        button.click();
    }
});

  button.addEventListener('click', function(){
    var inpAnswer = textbox.value;

    if (inpAnswer == Answer){
      console.log("correct");
      question.innerHTML = "Correct!";
      setTimeout(function(){
        generateQuestion();
      }, 1000);
    } else {
      question.innerHTML = "Inorrect!";
      setTimeout(function(){
        question.innerHTML = a + " + " + b + " =";
      },1000);
    }
    
    textbox.value = "";
    textbox.focus();
  });

  function getRandomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function generateQuestion(){
    a = getRandomNum(1, 50);
    b = getRandomNum(1, 50);
    Answer = a + b;
    question.innerHTML = a + " + " + b + " =";
  }
});
