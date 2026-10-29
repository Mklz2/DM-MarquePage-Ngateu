export type Statut = "A_LIRE" | "EN_COURS" | "LU";
export type Genre = "ROMAN" | "BD" | "ESSAI" | "SF" | "POLAR";
export interface Utilisateur {
    id: number;
    prenom: string;
    nom: string;
}
export interface Session {
    id: number;
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
    utilisateurId: number;
}