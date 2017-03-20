let answer = document.getElementById('answer'),
    attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    if (answer.value == '' || attempt.value == '') {
      setHiddenFields();
    }

    if (!validateInput(input.value)) {
      return;
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
  answer.value = Math.floor(Math.random() * 10000).toString(10);
  while (answer.value.length < 4) {
    answer.value = '0' + answer.value;
  }

  attempt.value = 0;
}

function setMessage(msgIn) {
  document.getElementById('message').innerHTML = msgIn;
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
  let isPresent = false,
      correctSpot = false,
      correctGuesses = 0,
      htmlOut = '<div class="row"><span class="col-md-6">' + number
              + '</span><div class="col-md-6">';
  for (let i = 0; i < 4; i++) {
    isPresent = false;
    correctSpot = false;
    for (let j = 0; j < 4; j++) {
      if (number.charAt(i) == answer.value.charAt(j)) {
        if (i == j) {
          correctSpot = true;
          correctGuesses++;
        }
        isPresent = true;
      }
    }
    if (correctSpot) {
      htmlOut += '<span class="glyphicon glyphicon-ok"></span>';
    } else if (isPresent) {
      htmlOut += '<span class="glyphicon glyphicon-transfer"></span>';
    } else {
      htmlOut += '<span class="glyphicon glyphicon-remove"></span>';
    }
  }


  htmlOut += '</div></div>';
  document.getElementById('results').innerHTML += htmlOut;
  if (correctGuesses == 4) {
    return true;
  } else {
    return false;
  }
}

function showAnswer(winner) {
  let code = document.getElementById('code');
  code.innerHTML = answer.value;
  if (winner) {
    code.className += ' success';
  } else {
    code.className += ' failure';
  }
}

function showReplay() {
  document.getElementById('guessing-div').style.display = 'none';
  document.getElementById('replay-div').style.display = 'block';
}
