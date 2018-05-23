class Jeu {
    constructor(joueurs) {
        this.joueurs = joueurs
        this.bois = 28
        this.argile = 18
        this.pierre = 12
        this.or = 10
        this.zones = [
            new Zone("Chasse", "illimité"),
            new Zone("Forêt", 7),
            new Zone("Glaisière", 7),
            new Zone("Carrière", 7),
            new Zone("Rivière", 7),
            new Zone("Champ", 1),
            new Zone("Hutte", 2),
            new Zone("Outils", 1),
            new Zone("Batiment", 1),
        ]
        this.tourJoueur = this.joueurs[0]
    }
    showPlayer() {
        this.joueurs.forEach(function(joueur) {
            console.log(joueur.nom)
        })
    }
    firstPlayer(joueur) {
        this.joueurs.forEach(function(j) {
            if (j == joueur) { j.setFirstPlayer(true) }
            else { j.setFirstPlayer(false) }
        })
    }

    affiche() {
        document.querySelector("#selectJoueur").remove()
        document.querySelector("#boutonsSelect").remove()
        let plateau = document.querySelector("#plateau")
        for (let i = 0; i < this.zones.length; i++) {
            plateau.append(this.zones[i].affiche())
        }

        this.joueurs.forEach(function(joueur) {
            joueur.affiche(plateau)
        })
    }

}
