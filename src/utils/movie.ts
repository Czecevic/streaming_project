import type { filmProps, movieProps } from "./../interface";

export const keyMovie = [
  "id",
  "nom",
  "genre",
  "categorie",
  "langue",
  "annee",
  "modifier",
  "supprimer",
];

export const createKeyMovie = ["nom", "genre", "categorie", "langue", "annee"];

export const CreateMovieObject = (
  formData: FormData,
  movieSelected: filmProps[],
) => {
  const name = String(formData.get("nom"));
  const gender = String(formData.get("genre")).trim();
  const categorie = String(formData.get("categorie")).trim();
  const language = String(formData.get("langue")).trim();
  const years = formData.get("annee");
  let newYear = Number(years);
  if (!newYear || isNaN(newYear)) newYear = new Date().getFullYear();
  const maxId = movieSelected.reduce(
    (max, movie) => (movie.id > max ? movie.id : max),
    0,
  );
  return {
    id: maxId + 1,
    nom: name,
    genre: gender,
    categorie: categorie,
    langue: language,
    annee: newYear,
  };
};

export const removeMovieObject = (
  movieId: number,
  movieSelected: filmProps[],
) => {
  const updatedMovies = movieSelected.filter((movie) => movie.id !== movieId);
  return updatedMovies;
};

export const sortMovies = (
  movies: filmProps[],
  filed: keyof filmProps,
  sortDirection: "asc" | "desc",
) => {
  const sortedMovies = [...movies].sort((a, b) => {
    if (typeof a[filed] === "number" && typeof b[filed] === "number") {
      return sortDirection === "asc"
        ? a[filed] - b[filed]
        : b[filed] - a[filed];
    }
    if (typeof a[filed] === "string" && typeof b[filed] === "string") {
      return sortDirection === "asc"
        ? a[filed].localeCompare(b[filed])
        : b[filed].localeCompare(a[filed]);
    }
    return 0;
  });
  return sortedMovies;
};
