// Clase equipo.
class Team
{
  constructor(nm, lg = 'img/', nt, gl = 0, pt = 0, ws = 0, ls = 0)
  {
    this.name = nm;
    this.logo = 'img/' + nm + '.png';
    this.nation = nt;
    this.goals = gl;
    this.points = pt;
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

var teams =
[
  new Team('Inter Milan', 'intermilan');
];
