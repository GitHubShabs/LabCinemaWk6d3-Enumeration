const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.filmTitles = function () {
  return this.films.map((film) => {return film.title});
};

Cinema.prototype.findByTitle = function (title) {
  return this.films.filter((banana) => {return banana.title === title});

};



module.exports = Cinema;
