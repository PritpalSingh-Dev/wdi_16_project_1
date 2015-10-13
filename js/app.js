var countries     = window.countries,
    currencies    = window.countries,
    capitalCities = window.capitalCities,
    alphabet      = window.alphabet,
    player1Score,
    player2Score,
    numberOfGuesses,
    playerScore,
    player,
    timer;

$(function() {
  player1Score    = 0;
  player2Score    = 0;
  numberOfGuesses = 0;
  player          = "1";

  $("#startRound").on("click", startRound);
  $("#formId").on("submit", guess);
});

function guess(){
  toggleRoundButton("#formId");
  checkAnswers();
  stopTimer();

  playerScore = (player === "1") ? player1Score : player2Score;
  $("#player"+player+"score").html("Player "+ player +"'s Score: " + playerScore);
  
  numberOfGuesses++;
  player = (numberOfGuesses % 2 === 0) ? "1" : "2";
  $("#countdown").html("Player "+player+" to play next!")
  endGame();
}

function endGame(){
  var winner;
  if (numberOfGuesses === 10) {
    if (player1Score > player2Score) {
      $("#randomLetterDisplayId").html("The winner is player 1!");
    } else if (player1Score < player2Score) {
      $("#randomLetterDisplayId").html("The winner is player 2!");
    } else {
      $("#randomLetterDisplayId").html("It's a tie!");
    }
    $("#countdown").html("Start new game!");
  }
}

function toggleRoundButton(selector){
  return $(selector).toggleClass("hide");
}

function startRound() {
  event.preventDefault();
  toggleRoundButton("#startRound");
  toggleRoundButton("#formId");
  startTimer(25);
  getRandomLetter();
}

function getRandomLetter(){
  var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  $("#randomLetterDisplayId").html(randomLetter);
  $("#country").val(randomLetter);
  $("#capitalCity").val(randomLetter);
  $("#currency").val(randomLetter);
}

function startTimer(i) {
  $('#countdown').addClass('colorChange');
  var counter = 30000+2000;   //25000
  timer = setInterval(function(){
    $('#countdown').html((counter-2000)/1000);
    counter-=1000;
    if (counter === 0) return stopTimer();
  }, 1000);
}

function stopTimer(){
  clearInterval(timer);
  clearBoard();
  $('#countdown').removeClass('colorChange');
  $("#startRound").toggleClass("hide");
}

function clearBoard(){
  $("#randomLetterDisplayId").html("");
  $("#country").val("");
  $("#capitalCity").val("");
  $("#currency").val("");
}

function checkAnswers() {
  event.preventDefault();

  var country     = $("#country").val();
  var capitalCity = $("#capitalCity").val();
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