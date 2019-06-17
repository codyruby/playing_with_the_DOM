/*==================================================================================
Question 1 :
Combien y a-t-il d'éléments <p> présents dans la page HTML ? 
Imprime-le résultat dans la console.
==================================================================================*/

let countParagraph = document.getElementsByTagName("p").length;
console.log(countParagraph)

/*==================================================================================
Question 2 :
Quel est le contenu texte de l'élément portant l'id coucou ? 
Imprime-le dans la console.
==================================================================================*/

let textCoucouId = document.getElementById("coucou").innerHTML
console.log(textCoucouId)

/*==================================================================================
Question 3 :
Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ? 
Imprime-la dans la console.
==================================================================================*/

let urlElementA = document.getElementsByTagName("a")[2].innerHTML
console.log(urlElementA)

/*==================================================================================
Question 4 :
Combien d'éléments portent la classe compte-moi ? 
Imprime le résultat dans la console.
==================================================================================*/

let numElementClass = document.getElementsByClassName("compte-moi").length
console.log(numElementClass)

/*==================================================================================
Question 5 :
Combien d'éléments <li> portent la classe compte-moi ? 
Imprime le résultat dans la console.
==================================================================================*/

let numElementClassLi = document.querySelectorAll("li.compte-moi").length
console.log(numElementClassLi)

/*==================================================================================
Question 6 :
Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ? 
Imprime le résultat dans la console.
==================================================================================*/

let numElementClassOlLi = document.querySelectorAll("Ol li.compte-moi").length
console.log(numElementClassOlLi)

/*==================================================================================
Question 7 :
Petit jeu de piste à résoudre si possible sans regarder le fichier HTML…

La page contient un seul élément <div>. 
Celui-ci contient 2 éléments "unordered list" ou <ul>. 
Dans le second <ul>, le premier élément de la liste (tag <li>) 
est caché visuellement de l'utilisateur mais toi, 
tu peux en récupérer le contenu. 
Affiche-le dans la console.
==================================================================================*/

let hiddenLi = document.querySelector("div ul:nth-of-type(2) li:first-child").innerHTML
console.log(hiddenLi)
