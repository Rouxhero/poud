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
    "description": "Il va falloir encore attendre  ! Pour attendre, il va falloir deviner les cadeaux de la semaine prochaine<br><i>Indice : </i><b>Ils sont 3</b>"
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
        default:
            return null;
    }
}