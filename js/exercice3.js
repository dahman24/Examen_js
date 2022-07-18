/**
* Crée un élément du DOM et le retourne
* @param {String} markupname 
* @param {String} text 
* @param {DomElement} parent 
* @param {Array} attributes
* @return {DomElement}
*/
function createDOMElement(markupname, text, parent, attributes = []) {
    const dom_element = document.createElement(markupname);
    dom_element.textContent = text;
    parent.appendChild(dom_element);

    if (attributes.length) {
        attributes.forEach((attribute => {
            if (attribute.name && attribute.value) {
                dom_element.setAttribute(attribute.name, attribute.value);
            }
        }))
    }
    return dom_element;
}
// creation de la constante select est ses attributs
const select = document.querySelector("select");
select.setAttribute("style", "display:flex; flex-direction: row; cursor: pointer");

//on ajoute un « écouteur d'événement » qui s'active lorsque l'on change de pays dans la liste déroulante
select.addEventListener("change", function () {
    selectedPays = select.options[this.selectedIndex].value

    // supprimer le la barre de recherche pour la création d'une nouvelle lorsque l'utilisateur fait
    // un nouveau choix dans la liste déroulante des pays.
    const searchBarSearch = document.getElementById("myInput");
    if (searchBarSearch != null) {
        searchBarSearch.remove();
    }
    // supprimer le titre h2 pour la création d'un nouvel tittre h2 lorsque l'utilisateur fait
    // un nouveau choix dans la liste déroulante des pays.
    const h2Search = document.querySelector("h2");
    if (h2Search != null) {
        h2Search.remove();
    }
    // cacher la liste des université affichée sur la page web pour la création d'une nouvelle lorsque l'utilisateur fait
    // un nouveau choix dans la liste déroulante des pays.
    const olSearch = document.querySelectorAll("ol");
    const liSearch = document.querySelectorAll("li");
    if (olSearch != null) {
        for (let i = 0; i < olSearch.length; i++) {
            olSearch[i].hidden = true;
            liSearch[i].hidden = true;
        }
    }
    // selon le choix de l'utilisateur du pays dans la liste déroulante on attribus le lien url 
    // correspondant.
    switch (selectedPays) {
        case "France":
            fetch("http://universities.hipolabs.com/search?country=France")
                .then(response => {
                    console.log(`response.status`, response.status);
                    return response.json();
                })
                .then(data => {
                    console.log(`donnée récupérée : `, data);
                    renderUniversities(data);
                })
                .catch(error => {
                    console.log(`Erreur catchée dans fetch :`, error);
                });

            break;
        case "Allemagne":
            fetch("http://universities.hipolabs.com/search?country=Germany")
                .then(response => {
                    console.log(`response.status`, response.status);
                    return response.json();
                })
                .then(data => {
                    console.log(`donnée récupérée : `, data);
                    renderUniversities(data);
                })
                .catch(error => {
                    console.log(`Erreur catchée dans fetch :`, error);
                });

            break;
        case "Andorre":
            fetch("http://universities.hipolabs.com/search?country=Andorra")
                .then(response => {
                    console.log(`response.status`, response.status);
                    return response.json();
                })
                .then(data => {
                    console.log(`donnée récupérée : `, data);
                    renderUniversities(data);
                })
                .catch(error => {
                    console.log(`Erreur catchée dans fetch :`, error);
                });
            break;
    }
    // Une fonction qui permet d'afficher les universités 
    function renderUniversities(data) {
        const nombreUniversites = data.length;
        // si ce nombre est inférieur à 50, on affiches une liste de fiches récapitulatives des
        // universités
        if (nombreUniversites < 50) {
            const h2 = createDOMElement("h2", "Nombre d’universités : " + data.length, document.body, []);
            const ol = createDOMElement("ol", "", document.body, []);
            data.forEach(universitie => {
                const li = createDOMElement("li", universitie.name, ol, []);
            })
            // si ce nombre est supérieur à 50, on affiches:
            // - une nouvelle barre de recherche apparait. elle permettra de filtrer les résultats par leur nom.
        } else {
            // Creation de la barre de recherche et ajout d'un écouteur lorsque myFunction(data)
            // est modifié suite à l'application du filtre sur les noms des universités présentes
            // dans la liste récapitulatives affichée sur la page web.
            const searchBar = createDOMElement("input", "", document.body, [{ name: "type", value: "text" },
            { name: "id", value: "myInput" },
            { name: "placeholder", value: "Recherche université(s) ..." },
            { name: "title", value: "Type in a name" }])
                .addEventListener("input", () => { myFunction(data) });
            // filtrer les résultats par leur nom. une fois que l’internaute a entré plus de 2 lettres, on
            // affiche la liste de fiches récapitulatives des universités.
            function myFunction() {
                let input, filter, ul, li, i, txtValue;
                input = document.getElementById("myInput");
                filter = input.value.toUpperCase();
                ul = document.getElementsByTagName("ul");
                li = document.querySelectorAll("li");
                for (i = 0; i < li.length; i++) {
                    a = li[i];
                    txtValue = a.textContent || a.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        li[i].style.display = "";
                    } else {
                        li[i].style.display = "none";
                    }
                }
            }
            // fiches récapitulatives des universités
            const h2 = createDOMElement("h2", "Nombre d’universités : " + data.length, document.body, []);
            const ol = createDOMElement("ol", "", document.body, []);
            data.forEach(universitie => {
                const li = createDOMElement("li", universitie.name, ol, []);
            })
        }
    }
});