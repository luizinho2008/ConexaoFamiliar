let checkForm = true;

document.getElementById("messageInput").addEventListener("input", (e) => {
    const mensagem = e.target.value;

    const palavroes =
    ["boquete", "caralho", "foda", "foda-se", "foder", "Nem fodendo", "pau", "pica",
    "porra", "puta", "merda", "pariu", "punheta", "cu", "trepar", "buceta",
    "xoxota", "cacete", "siririca", "arrombado", "babaca", "brocha", "bicha",
    "boiola", "cracudo", "piranha", "vagabundo", "viado", "corno", "trouxa"];

    checkForm = true;
    document.getElementById("invalidMessage").style.display = "none";

    for (var i = 0; i < palavroes.length; i++) {
        if (mensagem.toLowerCase().includes(palavroes[i])) {
            checkForm = false;
            document.getElementById("invalidMessage").style.display = "block";
            break;
        }
    }
    canSend();
});

const canSend = () => {
    document.getElementById("button").disabled = !checkForm;
}