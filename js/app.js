window.onload      = function() {

  var button       = $('#playGameId');
  var Player1;
  var Player2;
  var player1Score = 0;
  var player2Score = 0;
  var round        = 0;

  $("#formId").on("submit", function(){
    stopTimer();
    validateForm();
         $("#displayScoreId").html("Score: " + player1Score);
         clearBoard();
         getRandomLetter();
  });

  $("button").on("click", startGame);

  function startGame() {
    $("#playGameId").css("display", "none")
    startTimer();
    getRandomLetter();
  }

  function getRandomLetter(){
    var alphabet = ['A','B','C'];
    var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
                       $("#randomLetterDisplayId").html(randomLetter);
                       $("#country").val(randomLetter);
                       $("#capital_City").val(randomLetter);
                       $("#currency").val(randomLetter);
  }

  var i=25;
  function startTimer() {
    document.getElementById('countdownId').innerHTML = i;
    i--;
    if (i < 0) {
      clearBoard();
      console.log(player1Score + " You ran out of time.");
      stopTimer();
      $("#randomLetterDisplayId").html("You ran out of time, try again")
      $("#playGameId").css("display", "")
    }
    else {
      setTimeout(startTimer, 1000);
    }
  }

  function stopTimer(){
    clearTimeout();
    i=25;
  };

  function clearBoard(){
    $("#randomLetterDisplayId").html("");
    $("#country").val("");
    $("#capital_City").val("");
    $("#currency").val("");
  }

  function validateForm() {
    event.preventDefault();

    var country1 = $("#country").val();
    var capititalCity1 = $("#capital_City").val();
    var currency1 = $("#currency").val();

    if (countries.indexOf(country1)>-1) {
      player1Score++;
    }

    if (capitalCities.indexOf(capititalCity1)>-1) {
      player1Score++;
    }

    if (currencies.indexOf(currency1)>-1) {
      player1Score++;
    }
  }


var countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Arzebaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Carpe Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Cook Islands", "Croatia", "Cuba", "Cyprus", "Czech Republic"];

var capitalCities = ["Abu Dhabi", "Abuja", "Accra", "Adamstown", "Addis Ababa", "Algiers", "Alofi", "Ankara", "Amman", "Amsterdam", "Andorra", "Antananarivo", "Apia", "Ashgabat", "Asmara", "Astana", "Asuncion", "Athens", "Avaru", "Baghdad", "Baku", "Bamako", "Bandar Seri Begawan", "Bangkok", "Bangui", "Banjul", "Basse-Terre", "Basse-Terre", "Beijing", "Beirut", "Belgrade", "Belmopan", "Berlin", "Bern", "Bishkek", "Bissau", "Bloemfontein","Bogotá", "Brasília", "Bratislava", "Brazzaville", "Bridgetown", "Brussels", "Bucharest", "Budapest", "Buenos Aires", "Bujumbura", "Cairo", "Canberra", "Cape Town", "Caracas", "Castries", "Cayenne", "Charlotte Amalie", "Chisinau", "Cockburn Town", "Canakry", "Copenhagen",];

var currencies = ["Argentine Peso", "Arubian Guilder", "Australian Dollar", "Armenian Dram", "Azerbaijan Manat", "Bahamian Dollar", "Bahraini Dinar", "Bangladeshi Taka", "Barbadian Dollar", "Barbados Dollar", "Belize Dollar", "Bermudian Dollar", "Bhutan Ngultrum", "Bolivia Boliviano", "Botswana  Pula", "Brazilian Real", "Brunei Dollar", "Bulgarian Lev", "Burmese Kyat", "Cape Verde Escudo", "Cambodia  Riel", "Canadian Dollar", "Chilean Peso", "Chinese Yuan"]; 
};