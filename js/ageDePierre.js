var couleursJoueur = ["Rouge", "Vert", "Bleu", "Jaune"]
var joueurs = []

function createJoueur() {

    let nbJoueurs = document.querySelectorAll(".joueur").length
    if (nbJoueurs == 3) {
        document.querySelector("#createJoueur").disabled = "disabled"
    }
    let numJoueur = nbJoueurs + 1

    let elementJoueur = document.createElement('div')
    elementJoueur.classList.add("joueur")
    elementJoueur.classList.add("d-inline-block")
    elementJoueur.classList.add("p-3")

    let elmt1 = document.createElement('div')
    elmt1.classList.add("form-group")

    let labelJoueur = document.createElement('label')
    labelJoueur.innerHTML = "Joueur " + numJoueur

    let inputJoueur = document.createElement('input')
    inputJoueur.classList.add("form-control")
    inputJoueur.name = "nomJoueur" + numJoueur
    inputJoueur.placeholder = "Nom du joueur"

    let elmt2 = document.createElement('div')
    elmt2.classList.add("form-group")

    let labelCouleur = document.createElement('label')
    labelCouleur.innerHTML = "Couleur sélectionnée"

    let selectCouleur = document.createElement('select')
    selectCouleur.classList.add("selectCouleur")
    selectCouleur.classList.add("form-control")
    selectCouleur.name = "couleurJoueur" + numJoueur
    for (let i = 0; i < couleursJoueur.length; i++) {
        let optionCouleur = document.createElement('option')
        optionCouleur.value = couleursJoueur[i]
        optionCouleur.innerHTML = couleursJoueur[i]
        selectCouleur.appendChild(optionCouleur)
    }

    // selectCouleur.addEventListener("change", function() { checkSelected(selectCouleur) })
    // checkSelected(selectCouleur)

    elmt1.appendChild(labelJoueur)
    elmt1.appendChild(inputJoueur)
    elmt2.appendChild(labelCouleur)
    elmt2.appendChild(selectCouleur)
    elementJoueur.appendChild(elmt1)
    elementJoueur.appendChild(elmt2)

    let selectJoueur = document.querySelector("#selectJoueur")
    selectJoueur.appendChild(elementJoueur)
}

function checkSelected(elementSelect) {
    console.log(elementSelect)
    let value = elementSelect.value
    document.querySelectorAll(".selectCouleur").forEach(function(element) {
        if (element == elementSelect) return
        element.childNodes.forEach(function(option) {
            if (option.value == value) { option.disabled = true }
            else { option.disabled = false }
        })
    })
}

document.addEventListener("DOMContentLoaded", function(event) {
    createJoueur()
    createJoueur()

    document.querySelector("#createJoueur").addEventListener("click", createJoueur)
    document.querySelector("#btnPlay").addEventListener("click", function() {
        let isValid = true
        document.querySelectorAll(".joueur").forEach(function(element) {
            let nom = element.querySelector("input").value
            let couleur = element.querySelector("select").value
            joueurs.push(new Joueur(nom, couleur))
        })
        let jeu = new Jeu(joueurs)
        jeu.firstPlayer(joueurs[0])
        console.log(jeu.joueurs)
    })
})
