const jour1s0 = {
    "title": "j-4",
    "description": "J-4 avant nos retrouvaille, et aussi du premier cadeau ! Pour te faire attendre, je te donne un petit indice pour trouver ce cadeau. <br><i>Indice : </i><b>Element 79</b>"
}
const jour2s0 = {
    "title": "j-3",
    "description": "J-3 avant nos retrouvaille, encore un peu ! Encore un petit indice pour trouver le cadeau. <br><i>Indice : </i><b>AU</b>"
}
const jour3s0 = {
    "title": "j-2",
    "description": "J-2 avant nos retrouvaille, ça approche ! Encore un petit indice pour trouver le cadeau. <br><i>Indice : </i><b>J'aide Edwige pour livrer harry</b>"
}
const jour4s0 = {
    "title": "j-1",
    "description": "J-1 avant nos retrouvaille, demain ! Encore un dernier indice pour trouver le cadeau.<br><i>Indice : </i><b>Il faut être rapide pour m'avoir</b>"
}
const jour1s1 = {
    "title": "Un Cadeau !",
    "description": "Pour ce premier cadeau, voyons si tu es assez rapide pour l'attraper. Pas avec la bouche cette fois-ci !"
}
const jour2s1 = {
    "title": "Encore un cadeau !",
    "description": "Pour ce 2nd cadeau, on reste dans ce theme, mais au tours du poignet cette fois !"
}
const jour3s1 = {
    "title": "On attend a nouveau !",
    "description": "Et oui, on attend a nouveau pour se voir ! Pour attendre, il va falloir deviner les cadeaux de la semaine prochaine<br><i>Indice : </i><b>Ils sont 3</b>"
}
const jour4s1 = {
    "title": "On attend encore !",
    "description": "Il va falloir encore attendre  ! Encore un indice hehe. <br><i>Indice : </i><b>Tu l'auras autours du coups</b>"
}
const jour5s1 = {
    "title": "On attend toujours !",
    "description": "Encore quelques jours ! Logiquement tu as deja trouvée !<br><i>Un element : </i><b>La cape d’invisibilité</b>"
}
const jour6s1 = {
    "title": "On attend encore un peu !",
    "description": "Encore quelques jours ! ça chauffe , ça chauffe <br><i>Un element : </i><b>La baguette de sureau</b>"
}
const jour7s1 = {
    "title": "j-1",
    "description": "Encore 1 jour ! On y est bientôt ! <br><i> Un element : </i><b>La pierre de résurrection</b>"
}
const jour1s2 = {
    "title": "Le Cadeau !!",
    "description": "On se voit enfin ! j’espère que tu l'utilisera correctement 😏 "
}
const jour2s2 = {
    "title": "Un deuxième Cadeau !!",
    "description": "On se voit encore 😁 ! Parce que t'es aussi belle que la veritable, voici le précieux pendentif du temps😏 "
}
const jour3s2 = {
    "title": "Dernière ligne droite",
    "description": "Dernière ligne droite pour le dernier cadeau. Et oui, il faut bien une fin a tous <br><i>Indice :</i><b>C'est dans le theme Harry Potter 🙂</b>"
}
const jour4s2 = {
    "title": "Le dernier Cadeau !!",
    "description": "j’espère que ce dernier cadeau va te plaire !! <br><i>Indice :</i><b>ça fait partie de tes points fort !</b>"
}
const jour5s2 = {
    "title": "Encore un peu d'attente",
    "description": "J-3 pour le dernier cadeau !! <br><i>Indice :</i><b>Ce cadeau peux être utilisé a plusieurs</b>"
}
const jour6s2 = {
    "title": "ça approche !",
    "description": "J-2 pour le cadeau 🤗!! <br><i>Indice :</i><b>Il va faire des jaloux dans certaines soirées</b>"
}
const jour7s2 = {
    "title": "Le dernier Cadeau !!",
    "description": "J-1 pour le cadeau !! Demain tu aura ton dernier cadeau, j’espère que tu as deja devinée <br><i>Indice final:</i><b>Il va falloir réfléchir !!</b>"
}


function get_from_key(key) {
    switch (key) {
        case "j1s0":
            return jour1s0;
        case "j2s0":
            return jour2s0;
        case "j3s0":
            return jour3s0;
        case "j4s0":
            return jour4s0;
        case "j1s1":
            return jour1s1;
        case "j2s1":
            return jour2s1;
        case "j3s1":
            return jour3s1;
        case "j4s1":
            return jour4s1;
        case "j5s1":
            return jour5s1;
        case "j6s1":
            return jour6s1;
        case "j7s1":
            return jour7s1;
        default:
            return null;
    }
}