var countries     = window.countries,
    currencies    = window.countries,
    capitalCities = window.capitalCities,
    alphabet      = window.alphabet,
    player1Score,
    player2Score,
    rounds,
    numberOfGuesses,
    playerScore,
    player,
    timer;

$(function() {
  player1Score    = 0;
  player2Score    = 0;
  rounds          = 0;
  numberOfGuesses = 0;
  player          = "1";

  $("#startRound").on("click", startRound);
  $("#formId").on("submit", guess);
});

function guess(){
  checkAnswers();
  stopTimer();

  playerScore = (player === "1") ? player1Score : player2Score;
  $("#player"+player+"score").html("Player "+ player +"'s Score: " + playerScore);
  
  numberOfGuesses++;
  player = (numberOfGuesses % 2 === 0) ? "1" : "2";
}

function toggleRoundButton(){
  return $("#startRound").toggleClass("hide");
}

function startRound() {
  event.preventDefault();
  toggleRoundButton();
  startTimer(25);
  getRandomLetter();
}

function getRandomLetter(){
  var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  $("#randomLetterDisplayId").html(randomLetter);
  $("#country").val(randomLetter);
  $("#capital_City").val(randomLetter);
  $("#currency").val(randomLetter);
}

function startTimer(i) {
  var counter = 25000+2000;
  timer = setInterval(function(){
    $('#countdown').html((counter-2000)/1000);
    counter-=1000;
    if (counter === 0) return stopTimer();
  }, 1000);
}

function stopTimer(){
  clearInterval(timer);
  clearBoard();
  $("#startRound").toggleClass("hide");
  $("#countdown").html("Start next round!")
}

function clearBoard(){
  $("#randomLetterDisplayId").html("");
  $("#country").val("");
  $("#capital_City").val("");
  $("#currency").val("");
}

function checkAnswers() {
  event.preventDefault();

  var country     = $("#country").val();
  var capitalCity = $("#capital_City").val();
  var currency    = $("#currency").val();
  var counter     = 0;

  if (countries.indexOf(country) > -1)         counter++;
  if (capitalCities.indexOf(capitalCity) > -1) counter++;
  if (currencies.indexOf(currency) > -1)       counter++;

  // Choose which player's score to increment depending on the "player"
  if (player === "1") {
    player1Score += counter;
  } else {
    player2Score += counter;
  }
}