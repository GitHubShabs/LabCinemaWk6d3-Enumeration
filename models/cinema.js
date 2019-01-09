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


Cinema.prototype.areAllFilmsOverLength = function (length) {
  let allFilmsOverLength = true;
  const result = this.films.filter((film) => {return film.length < length });
  if (result != []) {
    allFilmsOverLength = false;
  }
  return allFilmsOverLength;
};

Cinema.prototype.totalRunTime = function () {
  return this.films.reduce((runningTotal, film) => {
    return runningTotal + film.length;
  } ,0);
};

module.exports = Cinema;
