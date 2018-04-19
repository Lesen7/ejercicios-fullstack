// Variables de números.
var numbers = _.range(1, 91);
var rolledNumbers = [];
var currentNumber;

// Variables de estado.
var status = 2;

// Arrays de cartones.
var playerCard = [];
var cpuCard = [];

function createPlayerCard ()
{
  for(var i = 0; i < 15; i++)
  {
    var randomNum = Math.floor(Math.random() * Math.floor(90) + 1);
    if(playerCard.includes(randomNum))
    {
      i--;
      continue;
    }
    else
    {
      playerCard.push(randomNum);
    }
  }
    addPlayerCard(playerCard);
}
createPlayerCard();

function addPlayerCard(card)
{
  var playerScreen = document.querySelector('#playerSlotsContainer');
  card.forEach(function(elem)
  {
    var div = document.createElement('div');
    div.className = 'player slot ' + elem;
    div.innerHTML = '<span class="player number">' + elem + '</span>';
    playerScreen.appendChild(div);
  });
}

function createCpuCard ()
{
  for(var i = 0; i < 15; i++)
  {
    var randomNum = Math.floor(Math.random() * Math.floor(90) + 1);
    if(cpuCard.includes(randomNum))
    {
      i--;
      continue;
    }
    else
    {
      cpuCard.push(randomNum);
    }
  }
  addCpuCard(cpuCard);
}
createCpuCard();

function addCpuCard(card)
{
  var cpuScreen = document.querySelector('#cpuSlotsContainer');
  card.forEach(function(elem)
  {
    var div = document.createElement('div');
    div.className = 'cpu slot ' + elem;
    div.innerHTML = '<span class="cpu number">' + elem + '</span>';
    cpuScreen.appendChild(div);
  });
}

// Desordenar números.
function shuffleNumbers()
{
  numbers = _.shuffle(numbers);
}

shuffleNumbers();

focusElem = function getFocus() {
  document.querySelector("#roll").focus();
}

// Sacar un número.
function pickNumber()
{
  if (status == 2)
  {
    num = numbers[0];
    if (playerCard.includes(num) || cpuCard.includes(num))
    {
      var slots = document.getElementsByClassName(num);
      slots[0].className += ' rolledSlot';
      if(typeof slots[1] != 'undefined')
      {
        slots[1].className += ' rolledSlot';
      }
    }
    console.log(status);
    logPickedNumber(num);
    checkCards(playerCard, cpuCard);
    return num;
  }
  else {
    var number = document.querySelector('#number');
    number.innerHTML = '<h2>Reiniciando...</h2>'
    location.reload(true);
  }
}

// Comprobar los cartones.
function checkCards (card1, card2)
{
  var card1Matches = 0;
  card1.forEach(function(elem)
  {
    if (rolledNumbers.includes(elem))
    {
      card1Matches++;
    }
  });
  console.log(card1Matches);

  var card2Matches = 0;
  card2.forEach(function(elem)
  {
    if (rolledNumbers.includes(elem))
    {
      card2Matches++;
    }
  });
  console.log(card2Matches);

  if (card1Matches == 15)
  {
    status = 1;
  }
  if (card2Matches == 15)
  {
    status = 0;
  }

  if (card1Matches == 15 && card2Matches == 15)
  {
    status = 3;
  }
  gameResult(status);
}

// Calcular el resultado del juego.
function gameResult(status)
{
  var container = document.querySelector('.container');
  var button = document.querySelector('#roll');
  if (status == 1)
  {
    button.innerHTML = '<span class="result">¡Ha ganado el jugador!<br> Reiniciar</span>';
  }
  else if (status == 0)
  {
    button.innerHTML = '<span class="result">¡Ha ganado la CPU!<br> Reiniciar</span>';
  }
  else if (status == 3)
  {
    button.innerHTML = '<span class="result">¡Empate!<br> Reiniciar</span>';
  }
  container.appendChild(button);
}

// Mostrar el número sacado.
function showNumber()
{
  let elemNumberVisual = document.querySelector('#numberVisual');
  elemNumberVisual.innerHTML = '<span id="numberText">' + pickNumber() + '</span>';
}

// Guardar los números que se han sacado y quitarlos del bingo.
function logPickedNumber(num)
{
  rolledNumbers.push(num);
  console.log(rolledNumbers);
  numbers.shift();
}
