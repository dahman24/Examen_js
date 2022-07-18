function mycode() {
    //Récupération de l'élément DOM représentant un paragraphe contenant du texte
    const p = document.querySelector("p");
    //cacher le paragraphe
    document.body.appendChild(p).hidden = true;

    //Boîte de dialogue avec message
    let dialog = prompt("Voulez-vous voir le contenu de cette page (o/n)?");
    //Si l'utilisateur entre "o" ou "O", le paragraphe s’affiche
    if (dialog == "o" || dialog == "O") {
        document.body.appendChild(p).hidden = false;
    }
}
window.onload = mycode;