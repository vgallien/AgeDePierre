class Zone {
    constructor(nom, nbEmplacements) {
        this.nom = nom
        this.nbEmplacements = nbEmplacements
    }

    affiche() {
        let zone = document.createElement('div')
        zone.classList.add("zone")
        zone.classList.add(cleanUpSpecialChars(this.nom.toLowerCase()))
        let titreZone = document.createElement('h2')
        titreZone.classList.add("text-center")
        titreZone.classList.add("text-white")
        titreZone.innerHTML = this.nom
        zone.append(titreZone)
        if (!isNaN(this.nbEmplacements)) {
            for (let i = 0; i < this.nbEmplacements; i++) {
                let zoneEmplacement = document.createElement('div')
                zoneEmplacement.classList.add("emplacement")
                let nom = this.nom
                zoneEmplacement.addEventListener("click", function() {
                    // alert("Emplacement : " + nom)
                    let meeple = document.createElement('img')
                    meeple.src = "images/meeple-bleu.png"
                    this.append(meeple)
                })
                zone.append(zoneEmplacement)
            }
        } else {
            let emplacement = document.createElement('div')
            emplacement.classList.add("emplacementFull")
            let nom = this.nom
            emplacement.addEventListener("click", function() {
                // alert("Emplacement : " + nom)
                let meeple = document.createElement('img')
                meeple.src = "images/meeple-bleu.png"
                this.append(meeple)
            })
            zone.append(emplacement)
        }
        return zone
    }
}
