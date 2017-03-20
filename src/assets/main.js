//working?
let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
let message = document.getElementById('message');
let results = document.getElementById('results');
let code = document.getElementById('code');
let guessingdiv = document.getElementById('guessing-div');
let replaydiv = document.getElementById('replay-div');

function guess() {
    let input = document.getElementById('user-guess');
    if (answer.value == '' || attempt.value == '') {
      setHiddenFields();
    }
    input.value = input.value.toString(10);
    if (!validateInput(input.value)) {
      return false;
    }
    attempt.value++;

    if (getResults(input.value)) {
      setMessage('You Win! :)');
      showAnswer(true);
      showReplay();
    } else if (attempt.value >= 10) {
      setMessage('You Lose! :(');
      showAnswer(false);
      showReplay();
    } else {
      setMessage('Incorrect, try again.');
    }
}

function setHiddenFields() {
  answer.value = Math.floor(Math.random() * 10000);
  answer.value = answer.toString(10);
  while (answer.value.length < 4) {
    answer.value = '0' + answer.value;
  }

  attempt.value = 0;
  return true;
}

function setMessage(msgIn) {
  message.innerHTML = msgIn;
  return true;
}

function validateInput(guessIn) {
  if (guessIn.length == 4) {
    return true;
  } else {
    setMessage('Guesses must be exactly 4 characters long.');
    return false;
  }
}

function getResults(number) {
  var isPresent = false;
  var correctSpot = false;
  var htmlOut = '';
  var correctGuesses = 0;
  htmlOut += '<div class="row"><span class="col-md-6">' + number
    + '</span><div class="col-md-6">';
  for (var i = 0; i < 3; i++) {
    var isPresent = false;
    var correctSpot = false;
    for (var j = 0; j < 3; j++) {
      if (number.charAt(i) == answer.charAt(j)) {
        if (i == j) {
          correctSpot = true;
          correctGuesses++;
        }
        isPresent = true;
      }
    }
    if (correctSpot) {
      htmlOut += '<span class="glyphicon glyphicon-ok"></span>';
    } elseif (isPresent) {
      htmlOut += '<span class="glyphicon glyphicon-transfer"></span>';
    } else {
      htmlOut += '<span class="glyphicon glyphicon-remove"></span>';
    }
  }
  htmlOut += '</div></div>';
  results.innerHTML = htmlOut;
  if (correctGuesses == 4) {
    return true;
  } else {
    return false;
  }
}

function showAnswer(winner) {
  code.innerHTML = answer.value;
  if (winner) {
    code.className += ' success';
  } else {
    code.className += ' failure';
  }
  return true;
}

function showReplay() {
  guessingdiv.style.display = 'none';
  replaydiv.style.display = 'block';
  return true;
}
