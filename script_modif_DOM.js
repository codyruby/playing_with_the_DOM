/*==================================================================================
Modification n°1
Écris une fonction changeTitles() qui va :

Pointer vers le titre en haut de page ("Album Example") 
et le changer en "Ce que j'ai appris à THP"
Pointer vers le sous-titre ("Something short and leading about…") 
et le changer en "THP est une formation qui, en 3 mois, à plein temps, 
vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, 
pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. 
Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !"
Pour cette fonction comme toutes les suivantes : 
exécute la fonction dans ton code JS en l'appelant en bas avec un changeTitles();. 
Dès que tu fais une modification sur la fonction, rafraîchis la page HTML dans ton navigateur pour voir si la modification apportée est OK.
==================================================================================*/

function changeTitles() {
    document.querySelector("h1.jumbotron-heading").innerText = "Ce que j'ai appris à THP"
    document.querySelector("h1.jumbotron-heading + p").innerText = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !"
}

/*==================================================================================
Modification n°2
Ecris une fonction changeCallToActions() qui va:

Changer le texte du bouton "Main call to action" en "OK je veux tester !"
Ajouter l'URL (un href) vers laquelle le bouton "Main call to action" va pointer : 
"http://www.thehackingproject.org"
Changer le texte du bouton "Secondary action" en "Non Merci"
Ajouter l'URL vers laquelle le bouton "Secondary action" va pointer : 
"https://www.pole-emploi.fr/accueil/"
==================================================================================*/

function changeCallToActions() {
    let main = document.querySelector("section.jumbotron a:first-child")
    let secondary = main.nextElementSibling

    main.innerHTML = "OK je veux tester !";
    main.href = "http://www.thehackingproject.org"

    secondary.innerHTML = "Non Merci";
    secondary.href = "https://www.pole-emploi.fr/accueil/";
}

/*==================================================================================
Modification n°3
Écris une fonction changeLogoName() qui va modifier le titre "Album" de la navbar (en haut à gauche) 
de la façon suivante :

Change "Album" par "The THP Experience" ;
Change la taille du texte pour le passer en 2em.
==================================================================================*/

function changeLogoName() {
    let logoName = document.querySelector("header a strong")

    logoName.innerText =  "The THP Experience"
    logoName.style.fontSize = "2em"
}

/*==================================================================================
Modification n°4
Écris une fonction populateImages() qui va ajouter, dans chacune des 9 cards, 
une image dont l'URL est contenue dans l'array suivant :

let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
Une petite boucle des familles va être utile ici.
==================================================================================*/

function populateImages() {
    let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
    let imageCard = document.querySelectorAll("img.card-img-top")

    for(let i = 0, j = imageCard.length; i < j; i++) {
        imageCard[i].src = imagesArray[i] 
    }
}

/*==================================================================================
Modification n°5
Écris une fonction deleteLastCards() qui va supprimer les 3 dernières cards via une boucle. 
Je donne ci-dessous 2 coups de main sur cette modification : 
les plus à l'aise peuvent essayer de ne pas les lire.

Coups de main sur cette modif
Pour les lire, surligne le texte ci-dessous en le sélectionnant (c'est écrit blanc sur blanc 😏 )

Attention si ta boucle supprime des éléments d'une liste : 
cela peut modifier les indices des éléments. Illustration : 
si tu supprimes le 7ème élément d'une liste de 9, l'élément numéro 8 passe alors au numéro 7 
et le numéro 9 passe au numéro 8. Ça peut faire foirer ta boucle 🤭
https://developer.mozilla.org/fr/docs/Web/API/ChildNode/remove 😘
==================================================================================*/

function deleteLastCards() {
    let cardsRow = document.querySelector("div.album div.row")
    let cards = document.querySelectorAll("div.album div.row>div")

    for (let i = 1; i <= 3; i++) {
        cardsRow.removeChild(cards[cards.length - i])
    }
}

/*==================================================================================
Modification n°6
Écris une fonction changeCardsText() qui va modifier le texte des 3 premières cards 
et le remplacer avec cela :

Carte HTML : "L’HyperText Markup Language, généralement abrégé HTML, 
est le langage de balisage conçu pour représenter les pages web"
Carte CSS : "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, 
forment un langage informatique qui décrit la présentation des documents HTML et XML"
Carte JS : "JavaScript est un langage de programmation de scripts principalement employé 
dans les pages web interactives mais aussi pour les serveurs. 
C'est un langage orienté objet à prototype."
Essaye de mettre ça dans une boucle.
==================================================================================*/

function changeCardsText() {
    let cardTexts = document.getElementsByClassName("card-text")
    console.log(cardTexts)
    let newContent = [`Carte HTML : "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web" Carte CSS : "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, 
    forment un langage informatique qui décrit la présentation des documents HTML et XML" Carte JS : "JavaScript est un langage de programmation de scripts principalement employé 
    dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype." Essaye de mettre ça dans une boucle.`]
    
    for (let i = 0; i < 3; i++) { 
        cardTexts[i].innerText = newContent
    }
}

/*==================================================================================
Modification n°7
Écris une fonction changeViewButtons() qui va modifier tous les boutons "View" des cards 
pour les passer en vert. En gros il faut leur mettre la classe btn-success 
et enlever btn-outline-secondary. Les boutons Edit ne doivent pas changer. 
Évite bien sûr de faire les 6 modifications une à une ... faut de la boucle là !
==================================================================================*/

function changeViewButtons() {
    let viewButtons = document.querySelectorAll("div.card-body div.btn-group button:first-child")

    //Utilisation de classList
    //https://www.w3schools.com/jsref/prop_element_classlist.asp
    viewButtons.forEach(({classList}) => {
        classList.add("btn-success")
        classList.remove("btn-outline-secondary")
    })
}

/*==================================================================================
Modification n°8
Allez, on finit sur une modification un peu tordue :

Rajoute une <div> portant la classe row juste après celle qui contient déjà les cards actuelle.
Déplace la 3ème card (JS) de la première <div class="row"> vers la deuxième que tu viens de créer.
Elle est pas belle cette pyramide inversée en front 👳? (comment ça "obsédés par les pyramides" ?).
==================================================================================*/

function pyramid() {
    let newRow = document.createElement("div")
    let originalCardJS = document.querySelector(".album .container .row div:nth-of-type(3)")
    console.log(newRow)

    originalCardJS.parentElement.removeChild(originalCardJS)
    newRow.appendChild(originalCardJS)
    document.querySelector(".album .container").appendChild(newRow)
}

changeTitles()
changeCallToActions()
changeLogoName()
populateImages()
deleteLastCards()
changeCardsText()
changeViewButtons()
pyramid()