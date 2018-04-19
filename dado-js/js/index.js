var dice = document.getElementById('dice');
var logHist = document.getElementById('history');
var diceImages = ['https://i.imgur.com/L7K6hVv.png', 'https://i.imgur.com/lrfRW6B.png', 'https://i.imgur.com/tOC4k90.png', 'https://i.imgur.com/8hpgwt3.png', 'https://i.imgur.com/cF6ajpu.png', 'https://i.imgur.com/vLpTVLy.png'];
var rollHistory = [];
var roll;
var colorSwitch = 1;

function rollDice() {
  roll = randomNum(6);
  dice.innerHTML = '<img id="diceImg" src=' + '"' + diceImages[roll] + '">';
}

function randomNum(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function logHistory(roll) {
  console.log(roll);
  var humanRoll = roll + 1;

  console.log(rollHistory.length);

  if (rollHistory.length < 12) {
    rollHistory.push('<span class="logItem' + colorSwitch + '"' + '>Has sacado un ' + humanRoll + '</span>');
    swapColor(colorSwitch);
  } else {
    rollHistory.shift();
    rollHistory.push('<span class="logItem' + colorSwitch + '"' + '>Has sacado un ' + humanRoll + '</span>');
    swapColor(colorSwitch);
  }
  logHist.innerHTML = rollHistory;
}

function swapColor(color) {
  color = 1 ? 2 : 1;
  color = 2 ? 1 : 2;
}