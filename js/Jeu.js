class Jeu {
    constructor(joueurs) {
        this.joueurs = joueurs
        this.bois = 28
        this.argile = 18
        this.pierre = 12
        this.or = 10
    }
    firstPlayer(joueur) {
        this.joueurs.forEach(function(j) {
            if (j == joueur) { j.setFirstPlayer(true) }
            else { j.setFirstPlayer(false) }
        })
    }
}
