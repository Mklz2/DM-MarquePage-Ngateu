export enum Genre {
    ROMAN = "ROMAN", 
    BD =  "BD" ,
    ESSAI = "ESSAI",
    SF = "SF",
    POLAR = "POLAR",
}
export const allGenre: Genre[] = [Genre.BD, Genre.ESSAI, Genre.POLAR, Genre.ROMAN, Genre.SF]; 
export enum Statut {
    A_LIRE = "A_LIRE", 
    EN_COURS =  "EN_COURS" ,
    LU = "LU"
}

export const allStatut: Statut[] = [Statut.A_LIRE, Statut.EN_COURS, Statut.LU]; 

export interface Utilisateur {
    id: number;
    prenom: string;
    nom: string;
}
export interface Session {
    id: number;
    utilisateurId: number;
    livreId: number;
    date: string;
    pagesLues: number;
}
export interface Livre {
    id: number;
    titre: string;
    auteur: string;
    genre: Genre;
    nbrPages: number;
    statut: Statut;
}