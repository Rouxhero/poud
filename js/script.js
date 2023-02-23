function set_modal(key) {
    if (check_date(key)) {
        const data = get_from_key(key);
        $("#modal-title").html(data["title"])
        $("#modal-body").html(data["description"])
        $("#modal").show()
    } else {
        $("#modal-title").html("Pas encore Madame 👀")
        $("#modal-body").html("Tu es encore un peu en avance ma petite madame !")
        $("#modal").show()
    }


}

function check_date(key) {
    day = new Date().getDate()
    month = new Date().getMonth() + 1
    if ((day >= 23 && month >= 2 && key == 'j1s0') ||
        (day >= 24 && month >= 2 && key == 'j2s0') ||
        (day >= 25 && month >= 2 && key == 'j3s0') ||
        (day >= 26 && month >= 2 && key == 'j4s0') ||
        (day >= 27 && month >= 2 && key == 'j1s1') ||
        (day >= 28 && month >= 2 && key == 'j2s1')
    ) {
        return true
    }
    keyD = parseInt(key[1])
    keyS = parseInt(key[3]) - 1
    dayK = keyD + keyS * 7
    if (day >= dayK && month >= 3) {
        return true
    }
}

function closeModal() {
    $("#modal").hide()
}
window.addEventListener("load", function() { $("#modal").hide() })