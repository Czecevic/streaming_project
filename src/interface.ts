import type { Dispatch, SetStateAction } from "react";

export interface filmProps {
  id: number;
  nom: string;
  annee: number;
  langue: string;
  genre: string;
  categorie: string;
}

export interface MovieCardProps {
  movies: filmProps[];
}

export interface movieProps {
  movies: filmProps[];
  setMovies: Dispatch<SetStateAction<filmProps[]>>;
}

export interface DeleteMovieProps {
  movies: filmProps[];
  movieId: number;
  setMovies: Dispatch<SetStateAction<filmProps[]>>;
}

export interface SelectElemProps {
  elemOfMovies: string[];
  typeOfElem: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

export interface FilterProps {
  movies: filmProps[];
  setSelectedGenre: Dispatch<SetStateAction<string>>;
  setSelectedCategorie: Dispatch<SetStateAction<string>>;
}

export interface NavProps {
  movies: filmProps[];
  setTapInput: Dispatch<SetStateAction<string>>;
  setSelectedGenre: Dispatch<SetStateAction<string>>;
  setSelectedCategorie: Dispatch<SetStateAction<string>>;
}

export interface InputChangeMovieProps {
  edit: boolean;
  keyTheme: keyof filmProps;
  valueTheme: string | number;
  movieId: number;
  movies: filmProps[];
  setMovies: Dispatch<SetStateAction<filmProps[]>>;
}
