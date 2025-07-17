const citations = [
  { texte: "Le succès n’est pas la clé du bonheur. Le bonheur est la clé du succès.", auteur: "Albert Schweitzer", theme: "motivation" },
  { texte: "La simplicité est la sophistication suprême.", auteur: "Léonard de Vinci", theme: "art" },
  { texte: "Le code est comme l’humour. Quand tu dois l’expliquer, c’est qu’il n’est pas bon.", auteur: "Cory House", theme: "informatique" },
  { texte: "Nous ne pouvons rien faire avec un objet qui n'a pas de nom", auteur: "Maurice Blanchot", theme: "informatique" },
  { texte: "Le voyage de mille lieues commence par un pas.", auteur: "Lao Tseu", theme: "motivation" },
  { texte: "Dans la vie, rien n’est à craindre, tout est à comprendre.", auteur: "Marie Curie", theme: "sciences"},
  { texte: "Mon travail mathématique implique une imagination considérable.", auteur: "Ada Lovelace", theme: "informatique"},
  { texte: "Défendez votre droit de penser, car même penser de manière erronée vaut mieux que ne pas penser.", auteur:"Hypathie d'Alexandrie", theme:"philosophie"}
];

//base de données des citations classées TEXTE/AUTEUR/THEME, avec une CONST === La déclaration const permet de créer une constante nommée 
// accessible uniquement en lecture. Cela ne signifie pas que la valeur contenue est immuable, 
// uniquement que l'identifiant ne peut pas être réaffecté. Autrement dit la valeur d'une constante ne peut pas être modifiée par des réaffectations ultérieures. 
// Une constante ne peut pas être déclarée à nouveau.

// Fonction pour obtenir une citation aléatoire selon un thème


function obtenirCitation(theme) {                                    //Une fonction est une portion de code qui peut être appelée par d'autres codes 
                                                                    // ou par elle-même ou par une variable qui se réfère à la fonction.
                                                                    // création d'une fonction appelée 'obtenirCitation' qui prend un paramètre 'theme'.
                                                                    //Paramètre/ theme sera choisi par l’utilisateur

  const citesFiltrees = citations.filter(cite => cite.theme === theme); // const déclare la variable 'citeFiltrees"   
                                                                        // "citations" renvoie à la base de données
                                                                        // 'filter' est une méthode des tableaux
                                                                        //'cite.theme === theme' = fonction fléchée (arrow function)
                                                                        //'cite' est chaque élément du tableau citations pris un par un
                                                                        //cite.theme === theme = la citation correspond bien à la demande de l'utilisateur = prompt

  if (citesFiltrees.length === 0) {                                     //première condition, si le thème n'existe pas = NULL
    return null;
  }
  const indexAleatoire = Math.floor(Math.random() * citesFiltrees.length); //calcul aléatoire pour récupérer une citation 

  return citesFiltrees[indexAleatoire];                                    //La fonction retourne une citation choisie au hasard parmi les citations filtrées
}

// Variable qui récupère le thème choisi par l'utilisateur
const themeChoisi = prompt("Choisis un thème : motivation, art, informatique, philosophie, sciences");

// Appeler la fonction avec le thème choisi
const citation = obtenirCitation(themeChoisi);

// Afficher le résultat
if (citation) {
  console.log(`“${citation.texte}” — ${citation.auteur}`);
} else {
  console.log("Désolé, aucune citation pour ce thème.");
}


// ` Ce caractère permet d’écrire une chaîne de texte multi-lignes ou contenant des variables dynamiques, grâce à la syntaxe ${...}

// source principale : https://developer.mozilla.org/fr/docs/Web