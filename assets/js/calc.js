function validation() {
    let nbr = (document.getElementById('nombre').value)
    nbr = parseInt(nbr)
    for (i = 0; i < nbr; i++) {
        let dive = document.createElement('div')
        dive.setAttribute('id', 'dive' + i)
        document.getElementById('tst').appendChild(dive)
        let input = document.createElement('input')
        input.setAttribute('id', i)
        input.setAttribute('style', 'padding:5px;text-color:red')
        document.getElementById('dive' + i).appendChild(input)
    }
}

function multiplication() {
    x = confirm()
    for (i = 0; i < x.length; i++) {
        if (x[i] == "") {
            alert("Au moins un des champs est vide")
            break
        }
    }
    z = 1;
    for (i = 0; i < x.length; i++) {
        z = x[i] * z

    }
    document.getElementById('res').innerHTML = `le resultat de la multiplication ${z}`


}

function soustraction() {
    x = confirm()
    for (i = 0; i < x.length; i++) {
        if (x[i] == "") {
            alert("Au moins un des champs est vide")
            break
        }
    }
    z = x[0]
    for (i = 1; i < x.length; i++) {
        z = z - x[i]


    }
    document.getElementById('res').innerHTML = `le resultat de la soustraction ${z}`
}

function addition() {
    x = confirm()
    for (i = 0; i < x.length; i++) {
        if (x[i] == "") {
            alert("Au moins un des champs est vide")
            break
        }
    }
    z = x[0]
    for (i = 1; i < x.length; i++) {
        z = parseInt(z) + parseInt(x[i])


    }

    document.getElementById('res').innerHTML = `la somme est de ${z}`
}

function division() {
    x = confirm()
    for (i = 0; i < x.length; i++) {
        if (x[i] == "") {
            alert("Au moins un des champs est vide")
            break
        }
    }
    z = x[0] / x[1]

    alert("Seul les deux premiers numbres on été divisé")
    document.getElementById('res').innerHTML = `le resultat de la division ${z}`
}

function confirm() {
    let y = document.getElementById('tst').childElementCount
    let tab = []
    for (i = 0; i < y; i++) {
        tab[i] = document.getElementById(i).value

    }

    return tab

}