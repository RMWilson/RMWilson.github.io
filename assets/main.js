<<<<<<< HEAD:assets/main.js
function guess(){
    let answer = document.getElementById('answer').value;
    let attempt = document.getElementById('attempt').value;
    let code = document.getElementById('code');
    let guessingDiv = document.getElementById('guessing-div');
    let input = document.getElementById('user-guess').value;
    let message = document.getElementById('message');
    let replayDiv = document.getElementById('replay-div');
    let results = document.getElementById('results');
=======
let answer = document.getElementById('answer'),
    attempt = document.getElementById('attempt');
>>>>>>> refs/remotes/origin/master:src/assets/main.js

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

<<<<<<< HEAD:assets/main.js
    let correct = 0;
    let html = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
    for(i = 0; i < input.length; i++)
    {
        if(input.charAt(i) == answer.charAt(i))
        {
            html += '<span class="glyphicon glyphicon-ok"></span>';
            correct++;
        } else if (answer.indexOf(input.charAt(i)) > -1) {
            html += '<span class="glyphicon glyphicon-transfer"></span>';
        } else {
            html += '<span class="glyphicon glyphicon-remove"></span>';
        }
    }
    html += '</div></div>';

    results.innerHTML += html;

    if(correct == input.length) {
        message.innerHTML = 'You Win! :)';
        code.className += " success";
        code.innerHTML = answer;
        guessingDiv.style = "display:none";
        replayDiv.style = "display:block";
    } else if(attempt >= 10) {
        message.innerHTML = 'You Lose! :(';
        code.className += " failure";
        code.innerHTML = answer;
        guessingDiv.style = "display:none";
        replayDiv.style = "display:block";
=======
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
>>>>>>> refs/remotes/origin/master:src/assets/main.js
    } else {
      htmlOut += '<span class="glyphicon glyphicon-remove"></span>';
    }
<<<<<<< HEAD:assets/main.js
=======
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
>>>>>>> refs/remotes/origin/master:src/assets/main.js
}
