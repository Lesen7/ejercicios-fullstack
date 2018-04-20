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

// Elige dos equipos de la lista.
function pickTeams (list)
{
  var indexA = Math.floor(Math.random() * list.length);
  var indexB = Math.floor(Math.random() * list.length);
  var teamA = list[indexA];
  var teamB = list[indexB];
  var teams = [teamA, teamB];
  console.log(teams);
  console.log(teams[0].name, teams[1].name);
  return teams;
}

// Play match with chances.
function playMatch (playingTeams)
{
  var randA;
  var randB;
  var teamA = playingTeams[0];
  var teamB = playingTeams[1];
  var teamA_chance = Math.floor(teamA.wins + teamA.goals - teamA.losses);
  var teamB_chance = Math.floor(teamB.wins + teamB.goals - teamB.losses);

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

  var teamA_goals = randA + teamA_chance;
  var teamB_goals = randB + teamB_chance;

  var result = {teamA: teamA.name, teamB: teamB.name, winner: teamA.name, teamAGoals: teamA_goals, teamBGoals: teamB_goals};

  if (teamA_goals > teamB_goals)
  {
    result.winner = teamA.name;
    result.teamAGoals = teamA_goals;
    result.teamBGoals = teamB_goals;
  }
  else if (teamA_goals < teamB_goals)
  {
    result.winner = teamB.name;
    result.teamAGoals = teamA_goals;
    result.teamBGoals = teamB_goals;
  }
  else if (teamA_goals == teamB_goals)
  {
    result.winner = 'Empate';
  }
  return result;
}

console.log(playMatch(pickTeams(teams)));
