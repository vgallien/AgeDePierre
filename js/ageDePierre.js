var couleursJoueur = ["Rouge", "Vert", "Bleu", "Jaune"]

function createJoueur() {

    var nbJoueurs = document.querySelectorAll(".joueur").length
    if (nbJoueurs == 3) {
        document.querySelector("#createJoueur").disabled = "disabled"
    }
    var numJoueur = nbJoueurs + 1

    var elementJoueur = document.createElement('div')
    elementJoueur.classList.add("joueur")

    var labelJoueur = document.createElement('label')
    labelJoueur.innerHTML = "Joueur " + numJoueur

    var inputJoueur = document.createElement('input')
    inputJoueur.name = "nomJoueur" + numJoueur

    var selectCouleur = document.createElement('select')
    selectCouleur.classList.add("selectCouleur")
    selectCouleur.name = "couleurJoueur" + numJoueur
    for (var i = 0; i < couleursJoueur.length; i++) {
        var optionCouleur = document.createElement('option')
        optionCouleur.value = couleursJoueur[i]
        optionCouleur.innerHTML = couleursJoueur[i]
        if (i == numJoueur) optionCouleur.selected = true
        selectCouleur.appendChild(optionCouleur)
    }

    selectCouleur.addEventListener("change", function() { checkSelected(selectCouleur) })
    checkSelected(selectCouleur)

    elementJoueur.appendChild(labelJoueur)
    elementJoueur.appendChild(inputJoueur)
    elementJoueur.appendChild(selectCouleur)

    var selectJoueur = document.querySelector("#selectJoueur")
    selectJoueur.appendChild(elementJoueur)



}

function checkSelected(elementSelect) {
    console.log(elementSelect)
    var value = elementSelect.value
    document.querySelectorAll(".selectCouleur").forEach(function(element) {
        if (element == elementSelect) return
        element.childNodes.forEach(function(option) {
            if (option.value == value) { option.disabled = true }
            else { option.disabled = false }
        })
    })

}

createJoueur()
createJoueur()

document.querySelector("#createJoueur").addEventListener("click", createJoueur)
