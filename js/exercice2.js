
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

// création du header et du main
const header = createDOMElement("header", "", document.body);
const main = createDOMElement("main", "", document.body);

// création des 3 boutons : compétences, Expérience et formation
const buttonCompetences = createDOMElement("button", "Compétences", header, [{ name: "id", value: "btn-skills" }]);
const buttonExperience = createDOMElement("button", "Expérience", header, [{ name: "id", value: "btn-experience" }]);
const buttonFormation = createDOMElement("button", "Formation", header, [{ name: "id", value: "btn-training" }]);

// Contenu du paragraphe des compétences
const texteCompetences = `La compétence désigne la mobilisation d'un ensemble de ressources (savoir, savoir-faire, 
savoir-être), en vue de résoudre une situation complexe appartenant à une famille de situations-problèmes 
(Roegiers, 2010). Il s'agit de compétence de base pour désigner les compétences qui doivent être acquises pour 
pouvoir passer d'une année à l'autre, ou d'un cycle à l'autre. La formation continue permettra à chacun d'accroître 
ses compétences de base initialement acquises mais aussi acquérir d'autres compétences dans d'autres sphères du 
savoir. La double ou triple compétence de base n'est plus exceptionnelle. Dans le domaine professionnel, la compétence 
sera définie comme un savoir-agir résultant de la mobilisation et de l'utilisation efficaces d'un ensemble de ressources 
internes ou externes dans des situations relevant d'un contexte professionnel. Dans une définition comme dans l'autre, 
la compétence est fortement liée à la notion de situation problème, qui appartient à une famille de situations bien 
délimitée. On peut alors définir une compétence comme étant un savoir en action. Plusieurs observateurs français ont 
apporté leur lecture de la compétence dans le cadre d'une économie des savoirs et de guerre économique où la compétence 
est un élément essentiel pour les organisations et en particulier les entreprises. Selon Michel Parlier5, la compétence 
a quatre caractéristiques. Selon lui, la compétence est opératoire et finalisée: elle est toujours « compétence à agir », 
elle est indissociable d'une activité; elle est également apprise: le travailleur devient compétent par construction 
personnelle et par construction sociale. Elle est structurée et combine (ce n'est pas une simple addition) des savoir
agir, vouloir agir et pouvoir agir; enfin, elle est abstraite et hypothétique : on ne peut pas observer directement 
la compétence réelle (à ne surtout pas confondre avec la compétence requise ou prescrite), mais on peut observer ses 
manifestations, ses conséquences. la compétence comprend trois dimensions. La première, une attitude de prise d'initiative 
et de responsabilité face aux situations dont l'individu ou le groupe a la charge et auxquels ils se confrontent, en visant 
la réussite de leur action. La seconde, des savoirs d'action qui expriment l'intelligence pratique de ces situations et 
s'appuient sur la mobilisation de l'expérience et de connaissances acquises en formation. La troisième et dernière, 
l'existence, le développement, la consolidation et la mobilisation de réseaux d'acteurs qui contribuent directement à la 
prise en charge des situations ou apportent un soutien.`;

// Contenu du paragraphe d'expérience
const texteExperience = `L'expérience est la connaissance acquise à travers l'interaction avec l'environnement. Une expérience 
est un enchaînement d'événements dont on peut tirer une leçon par un retour d'expérience. La connaissance issue de l'expérience 
s'oppose à celle qui relève d'une élaboration théorique. L'expérience d'une personne est l'ensemble des savoirs qu'elle a acquis 
par la pratique, et non seulement par un enseignement formel. Lorsque cette connaissance est socialement partagée et construite 
dans l'intersubjectivité, il s'agit d'expérience sociale. En philosophie, l'expérience est un concept central du pragmatisme, 
par opposition aux doctrines idéalistes qui supposent une connaissance a priori. Une expérience scientifique est une interaction 
avec l'environnement destinée à vérifier une hypothèse dans le cadre d'une théorie réfutable. L'observateur définit et note 
précisément les conditions de réalisation afin qu'elle soit reproductible. La méthode scientifique codifie des règles 
d'expérimentation, l'épistémologie étudie leur validité. L'expérience est la connaissance acquise à travers l'interaction avec l'environnement. Une expérience 
est un enchaînement d'événements dont on peut tirer une leçon par un retour d'expérience. La connaissance issue de l'expérience 
s'oppose à celle qui relève d'une élaboration théorique. L'expérience d'une personne est l'ensemble des savoirs qu'elle a acquis 
par la pratique, et non seulement par un enseignement formel. Lorsque cette connaissance est socialement partagée et construite 
dans l'intersubjectivité, il s'agit d'expérience sociale. En philosophie, l'expérience est un concept central du pragmatisme, 
par opposition aux doctrines idéalistes qui supposent une connaissance a priori. Une expérience scientifique est une interaction 
avec l'environnement destinée à vérifier une hypothèse dans le cadre d'une théorie réfutable. L'observateur définit et note 
précisément les conditions de réalisation afin qu'elle soit reproductible. La méthode scientifique codifie des règles 
d'expérimentation, l'épistémologie étudie leur validité. L'expérience est la connaissance acquise à travers l'interaction avec l'environnement. Une expérience 
est un enchaînement d'événements dont on peut tirer une leçon par un retour d'expérience. La connaissance issue de l'expérience 
s'oppose à celle qui relève d'une élaboration théorique. L'expérience d'une personne est l'ensemble des savoirs qu'elle a acquis 
par la pratique, et non seulement par un enseignement formel. Lorsque cette connaissance est socialement partagée et construite 
dans l'intersubjectivité, il s'agit d'expérience sociale. En philosophie, l'expérience est un concept central du pragmatisme, 
par opposition aux doctrines idéalistes qui supposent une connaissance a priori. Une expérience scientifique est une interaction 
avec l'environnement destinée à vérifier une hypothèse dans le cadre d'une théorie réfutable. L'observateur définit et note 
précisément les conditions de réalisation afin qu'elle soit reproductible. La méthode scientifique codifie des règles 
d'expérimentation, l'épistémologie étudie leur validité.`

// Contenu du paragraphe "Formation"
const texteFormation = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus commodi omnis sed sint vero fugit voluptatum,
natus, accusantium quae corrupti ad sit veritatis distinctio quaerat adipisci totam et odio dolorum laudantium
harum voluptatibus. Porro omnis hic fuga, et laborum voluptatum facilis earum, quas aperiam quo recusandae odit
perspiciatis nam alias ut officia! Eum, ipsum exercitationem, id praesentium neque nulla perspiciatis rerum
repudiandae placeat, voluptas cum. Repellendus odit dolorum quibusdam perferendis ullam, distinctio sit velit
sunt, veniam porro sed sint temporibus, unde quasi ea deleniti laudantium illum? Delectus corrupti nihil omnis
eligendi totam harum dolorem porro iste esse, sint asperiores alias vel modi ut earum! Maiores quo sed
voluptatum? Labore atque iure accusamus quos, ut error nihil obcaecati hic, voluptate consequatur quas veniam
quisquam, voluptas fugit asperiores pariatur! Voluptate esse laboriosam harum odio. Ipsa quo alias molestiae
molestias non eum, earum voluptates eveniet nesciunt natus, ea dignissimos necessitatibus, quos impedit harum
debitis praesentium voluptatem tempore eligendi. Repudiandae, voluptatum! Voluptatem, dolorem. Corporis nihil
nisi nostrum consectetur ea voluptates voluptatem, possimus velit autem repellendus quod at a quos doloribus
atque fugiat illo eaque doloremque, vero maxime quia dolorem dolorum? Beatae aperiam, libero perferendis alias
reprehenderit voluptatem perspiciatis omnis voluptate repellendus accusamus consequuntur recusandae consequatur
facilis ratione laudantium, deserunt provident. Quis minima amet commodi facere numquam quas qui dolorum
aspernatur doloremque eius. Voluptates dolores rem quia dignissimos cum vel ullam nostrum ex corrupti minima
similique qui delectus laborum aut, necessitatibus et. Quasi quaerat labore quam alias magni quod ipsum debitis
deserunt, ad minima suscipit, laudantium modi quisquam veniam nemo sunt ut minus sint? Porro officiis asperiores
architecto deserunt accusantium ipsa quibusdam molestias debitis cupiditate adipisci qui harum provident sit
unde possimus nam illum exercitationem amet soluta alias, laborum, libero animi. Rerum repellendus possimus
culpa. Perferendis ipsa in dolorum modi repudiandae, quam distinctio explicabo cupiditate.`;

// Gestion de l'événement click du bouton "Compétences".
buttonCompetences.onclick = function (event) {
  const h1 = document.querySelectorAll("h1");
  const p = document.querySelectorAll("p");
  // Si un h1 et un paragraphe sont déja présent, le click sur le bouton cache le titre et le
  // paragraphe déja présents.
  if (p != null) {
    for (let i = 0; i < p.length; i++) {
      h1[i].hidden = true;
      p[i].hidden = true;
    }
    //On ajoute dans la balise main: un titre de niveau 1 (h1) ayant pour intitulé « Compétences » 
    //et un paragraphe contenant le texte de la const "texteCompetences".
    createDOMElement("h1", `Compétences`, main);
    createDOMElement("p", texteCompetences, main);
  }
}

// Gestion de l'événement click du bouton "Expérience".
buttonExperience.onclick = function (event) {
  // Si un h1 et un paragraphe sont déja présent, le click sur le bouton cache le titre et le
  // paragraphe déja présents.
  const h1 = document.querySelectorAll("h1");
  const p = document.querySelectorAll("p");
  if (p != null) {
    for (let i = 0; i < p.length; i++) {
      h1[i].hidden = true;
      p[i].hidden = true;
    }
    //On ajoute dans la balise main: un titre de niveau 1 (h1) ayant pour intitulé « Expérience » 
    //et un paragraphe contenant le texte de la const "texteExperience".
    createDOMElement("h1", `Expérience`, main);
    createDOMElement("p", texteExperience, main);
  }
}

// Gestion de l'événement click du bouton "Formation".
buttonFormation.onclick = function (event) {
  // Si un h1 et un paragraphe sont déja présent, le click sur le bouton cache le titre et le
  // paragraphe déja présents.
  const h1 = document.querySelectorAll("h1");
  const p = document.querySelectorAll("p");
  if (p != null) {
    for (let i = 0; i < p.length; i++) {
      h1[i].hidden = true;
      p[i].hidden = true;
    }
    //On ajoute dans la balise main: un titre de niveau 1 (h1) ayant pour intitulé « Formation » 
    //et un paragraphe contenant le texte de la const "texteFormation".
    createDOMElement("h1", `Formation`, main);
    createDOMElement("p", texteFormation, main);
  }
}