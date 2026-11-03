export  const getBadgeName = (statut: string): string=> {
        switch (statut) {
            case 'LU': return "Lu";
            case 'EN_COURS': return "En cour de lecture";
            case 'A_LIRE': return "A lire";
            default: return "Pas Disponible";
        }
    };