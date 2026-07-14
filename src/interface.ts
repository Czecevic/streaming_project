import type { Dispatch, SetStateAction } from "react";

export interface filmProps {
  id: number;
  nom: string;
  annee: number;
  categorie: string;
  langue: string;
  genre: string;
}

export interface MovieCardProps {
  movies: filmProps[];
  categorie?: string;
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
}

export interface NavProps {
  movies: filmProps[];
  setTapInput: Dispatch<SetStateAction<string>>;
  setSelectedGenre: Dispatch<SetStateAction<string>>;
}

export interface InputChangeMovieProps {
  edit: boolean;
  keyTheme: string;
  valueTheme: string | number;
  movieId: number;
  movies: filmProps[];
  setMovies: Dispatch<SetStateAction<filmProps[]>>;
}
