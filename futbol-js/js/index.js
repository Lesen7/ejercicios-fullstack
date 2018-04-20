// Clase equipo.
class Team
{
  constructor(nm, fn = _.deburr(nm.replace(/ /g, '').toLowerCase()), lg = 'img/', gl = 0, ws = 0, ls = 0)
  {
    this.name = nm;
    this.fileName = fn;
    this.logo = `${lg}${fn}.png`;
    this.goals = gl;
    this.wins = ws;
    this.losses = ls;
  }

  // Métodos get y de suma.
  getName()
  {
    return this.name;
  }
  getNation()
  {
    return this.nation;
  }
  getGoals()
  {
    return this.goals;
  }
  addGoals(num)
  {
    this.goals += num;
  }
  getPoints()
  {
    return this.points;
  }
  addPoints(num)
  {
    this.points += num;
  }
  getWins()
  {
    return this.wins;
  }
  addWins(num)
  {
    this.wins += num;
  }
  getLosses()
  {
    return this.losses;
  }
  addLosses(num)
  {
    this.losses += num;
  }
}

// Objeto del DOM.
var dom =
{
  main: document.querySelector('#main'),
  title: document.querySelector('#title'),
  field: document.querySelector('#field'),
  teamList: document.querySelector('#teamList'),
  controlArea: document.querySelector('#controlArea')
}

// Lista de equipos.
var teamsObj =
{
  atletico: new Team('Atlético de Madrid'),
  realMadrid: new Team('Real Madrid'),
  barca: new Team('Barça'),
  lasPalmas: new Team('UD Las Palmas'),
  tenerife: new Team('CDT Tenerife'),
  levante: new Team('Levante'),
  betis: new Team('Betis'),
  bilbao: new Team('Bilbao'),
  celtaVigo: new Team('Celta de Vigo'),
  espanyol: new Team('Espanyol'),
  valencia: new Team('Valencia CF'),
  vallecano: new Team('Rayo Vallecano'),
  girona: new Team('Girona FC')
};

var teams =
[
  new Team('Atlético de Madrid'),
  new Team('Real Madrid'),
  new Team('Barça'),
  new Team('UD Las Palmas'),
  new Team('CDT Tenerife'),
  new Team('Levante'),
  new Team('Betis'),
  new Team('Bilbao'),
  new Team('Celta de Vigo'),
  new Team('Espanyol'),
  new Team('Valencia CF'),
  new Team('Rayo Vallecano'),
  new Team('Girona FC')
];
console.log(teams);

// Elige dos equipos distintos de la lista.
function pickTeams (list)
{
  var indexA = Math.floor(Math.random() * list.length);
  var indexB = Math.floor(Math.random() * list.length);
  while (indexA == indexB)
  {
    indexB = Math.floor(Math.random() * list.length);
  }

  var teamA = list[indexA];
  var teamB = list[indexB];
  var teams = [teamA, teamB];
  return teams;
}

// Jugar partido con probabilidades.
function playMatch (playingTeams)
{
  var randA;
  var randB;
  var teamA = playingTeams[0];
  var teamB = playingTeams[1];

  // Calcular probabilidades de cada equipo en base a su historial.
  var teamA_chance = Math.floor((teamA.wins + teamA.goals - teamA.losses) / 10);
  var teamB_chance = Math.floor((teamB.wins + teamB.goals - teamB.losses) / 10);

  // Calcular rango de goles en base a la discrepancia de habilidad.
  var skillDisc = Math.abs(teamA_chance - teamB_chance);
  if (skillDisc > 2)
  {
    randA = Math.floor(Math.random() * 6);
    randB = Math.floor(Math.random() * 6);
  }
  else
  {
    randA = Math.floor(Math.random() * 3);
    randB = Math.floor(Math.random() * 3);
  }

  // Calcular goles de cada equipo.
  var teamA_goals = randA + teamA_chance;
  var teamB_goals = randB + teamB_chance;

  // Controlar que no haya goles negativos.
  if (teamA_goals < 0)
  {
    teamA_goals = 0;
  }
  if (teamB_goals < 0)
  {
    teamB_goals = 0;
  }

  // Sumar goles al 'historial' de cada equipo.
  teamA.goals += teamA_goals;
  teamB.goals += teamB_goals;

  // Objeto de resultados.
  var result = {teamA: teamA.name, teamB: teamB.name, winner: teamA.name, teamAGoals: teamA_goals, teamBGoals: teamB_goals};


  // Asignar resultados y añadir victorias/derrotas al 'historial' de cada equipo.
  if (teamA_goals > teamB_goals)
  {
    teamA.wins += 1;
    teamB.losses += 1;
    result.winner = teamA.name;
    result.teamAGoals = teamA_goals;
    result.teamBGoals = teamB_goals;
  }
  else if (teamA_goals < teamB_goals)
  {
    teamB.wins += 1;
    teamB.losses += 1;
    result.winner = teamB.name;
    result.teamAGoals = teamA_goals;
    result.teamBGoals = teamB_goals;
  }
  else if (teamA_goals == teamB_goals)
  {
    result.winner = 'Empate';
  }
  console.log(result);
  console.log(teamA.name + '| victorias: ' + teamA.wins + ' derrotas: ' + teamA.losses);
  console.log(teamB.name + '| victorias: ' + teamB.wins + ' derrotas: ' + teamB.losses);
  return result;
}
