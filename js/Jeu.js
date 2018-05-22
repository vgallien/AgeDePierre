class Jeu {
    constructor(joueurs) {
        this.joueurs = joueurs
        this.bois = 28
        this.argile = 18
        this.pierre = 12
        this.or = 10
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

    render() {
        document.querySelector("#selectJoueur").remove()
        document.querySelector("#boutonsSelect").remove()
        let plateau = document.querySelector("#plateau")

        let chasse = this.createZone("Chasse", "chasse")
        let foret = this.createZone("Forêt", "foret", 7)
        let glaisiere = this.createZone("Glaisière", "glaisiere", 7)
        let carriere = this.createZone("Carrière", "carriere", 7)
        let riviere = this.createZone("Rivière", "riviere", 7)
        let champ = this.createZone("Champ", "champ", 1)
        let hutte = this.createZone("Hutte", "hutte", 2)
        let outils = this.createZone("Fabricant d'outils", "outils", 1)
        plateau.append(chasse)
        plateau.append(foret)
        plateau.append(glaisiere)
        plateau.append(carriere)
        plateau.append(riviere)
        plateau.append(champ)
        plateau.append(hutte)
        plateau.append(outils)

        this.joueurs.forEach(function(joueur) {
            joueur.render(plateau)
        })
    }

    createZone(nomZone, nomClass, nbEmplacements) {
        let zone = document.createElement('div')
        zone.classList.add("zone")
        zone.classList.add(nomClass)
        let titreZone = document.createElement('h2')
        titreZone.classList.add("text-center")
        titreZone.classList.add("text-white")
        titreZone.innerHTML = nomZone
        zone.append(titreZone)
        if (nbEmplacements) {
            for (let i = 0; i < nbEmplacements; i++) {
                let zoneEmplacement = document.createElement('div')
                zoneEmplacement.classList.add("emplacement")
                zone.append(zoneEmplacement)
            }
        } else {
            let emplacement = document.createElement('div')
            emplacement.classList.add("emplacementFull")
            zone.append(emplacement)
        }
        return zone
    }
}
