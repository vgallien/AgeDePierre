
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

    affiche(plateau) {
        let plateauJoueur = document.createElement('div')
        plateauJoueur.classList.add("plateau-joueur")

        let titrePlateauJoueur = document.createElement('h2')
        titrePlateauJoueur.innerHTML = "Plateau de " + this.nom

        let tribu = document.createElement('div')
        tribu.innerHTML = "Taille de la tribu : " + this.tailleTribu

        let nourriture = document.createElement('div')
        nourriture.innerHTML = "Nourriture : " + this.nourriture

        let bois = document.createElement('div')
        bois.innerHTML = "Bois : " + this.bois

        let argile = document.createElement('div')
        argile.innerHTML = "Argile : " + this.argile

        let pierre = document.createElement('div')
        pierre.innerHTML = "Pierre : " + this.pierre

        let or = document.createElement('div')
        or.innerHTML = "Or : " + this.or

        plateauJoueur.append(titrePlateauJoueur)
        plateauJoueur.append(tribu)
        plateauJoueur.append(nourriture)
        plateauJoueur.append(bois)
        plateauJoueur.append(argile)
        plateauJoueur.append(pierre)
        plateauJoueur.append(or)
        plateau.append(plateauJoueur)
    }
}
