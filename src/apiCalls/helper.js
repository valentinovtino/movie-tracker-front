export const cleanData = (data) => {
  return data.map(film => {
    return {
      title: film.original_title,
      averageRating: film.vote_average,
      posterPath: film.poster_path,
      releaseData: film.release_date,
      overview: film.overview
    };
  });
};