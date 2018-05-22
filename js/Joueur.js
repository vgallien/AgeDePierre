
class Joueur {
    constructor(nom, couleur) {
        this.nom = nom
        this.couleur = couleur
        this.tailleTribu = 5
        this.nourriture = 12
        this.bois = 0
        this.argile = 0
        this.pierre = 0
        this.or = 0
    }

    setFirstPlayer(bool) {
        this.isFirstPlayer = bool
    }
}
