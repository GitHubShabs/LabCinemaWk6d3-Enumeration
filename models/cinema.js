const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.filmTitles = function () {
  return this.films.map((film) => {return film.title});
};

Cinema.prototype.findByTitle = function (title) {
  return this.films.filter((film) => {return film.title === title});
};

Cinema.prototype.findByGenre = function (genre) {
  return this.films.filter((film) => {return film.genre === genre});
};

Cinema.prototype.findByYear = function (year) {
  return this.films.filter((film) => {return film.year === year})
};


module.exports = Cinema;
