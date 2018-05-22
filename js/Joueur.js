
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

    render(plateau) {
        let plateauJoueur = document.createElement('div')
        plateauJoueur.classList.add("plateau-joueur")

        let tribu = document.createElement('div')
        tribu.innerHTML = this.tailleTribu

        plateauJoueur.append(tribu)
        plateau.append(plateauJoueur)
    }
}
