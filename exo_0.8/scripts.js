// MASTERMIND

// Partie Métier (ECMAScript)

// Variables et Constantes

var colors=[
'#000000', // noir
'#FFFFFF', // blanc
'#CC3333', // rouge
'#ff9600', // orange
'#fff000', // jaune
'#0005c2' // bleu
];

var combinaison=[]; // Combinaison code à trouver
var reponses=[]; // Toutes les réponses du joueur
var combiActive=[]; // Combinaison joueur pour les tests

const GOOD_PLACE_COLOR ='GOOD_PLACE_COLOR'; // Couleur bien placée
const GOOD_COLOR='GOOD_COLOR'; // Bonne Couleur

var combiSize = 4; // Taille du code
var turnCount = 12; // Nombre de tours maximum
var nbColors = 6; // Nombre de couleurs du jeu

var turn=1; // Tour courant
var activecolonne=1; // Colonne courant

// Jeu Mastermind


window.addEventListener('load',()=>{
  gameZone();
  startNew();
  inputCombi();
});

// Fonctions

// Fonction pour une nouvelle partie

function startNew(){
  generateCombi();
  clearCombis();
  turn=1;
  activecolonne=1;
}


// Fonction pour génèrer une combinaison

function generateCombi(){
  for(i =0; i<=combiSize-1; i++){
    combinaison[i]=parseInt(Math.random()*nbColors);
  }
  //console.log(combinaison); //affiche combinaison dans la console
}


// Fontion pour créer la zone de jeux

function gameZone(){
  zone = document.getElementById('plateau');
  zone.innerHTML ='';
  ligne = document.createElement('tr');
  ligne.id = 'codeSecret';

  colonne = document.createElement('td');
  colonne.innerHTML ='';
  colonne.style.width = '32px';
  colonne.className ='Vide';
  ligne.appendChild(colonne);

  for(j=1; j<=combiSize;j++){
    colonne = document.createElement('td');
    colonne.innerHTML ='?';
    colonne.style.width = '32px';
    colonne.id = 'codeSecret-'+j;
    ligne.appendChild(colonne);
    zone.appendChild(ligne);
  }

  for(i=turnCount;i>0;i--){
    ligne = document.createElement('tr');
    ligne.id = 'tour-'+i;

    colonne = document.createElement('td');
    colonne.innerHTML = i;
    colonne.style.width = '32px';
    ligne.appendChild(colonne);

    for(j=1; j<=combiSize;j++){
      colonne = document.createElement('td');
      colonne.innerHTML ='';
      colonne.style.width = '32px';
      colonne.id = 'tour-'+i+'-'+j;
      ligne.appendChild(colonne);
    }

    colonne = document.createElement('td');
    colonne.style.width = '32px';
    colonne.id = 'Vide';
    colonne.className = 'Vide';
    ligne.appendChild(colonne);

    for(j=1; j<=combiSize;j++){
    colonne = document.createElement('td');
    colonne.innerHTML ='';
    colonne.style.width = '16px';
    colonne.id = 'resultat-'+i+'-'+j;
    ligne.appendChild(colonne);
    }
    zone.appendChild(ligne);
  }
}


function inputCombi(){ // interface de saisie ex : [['1','2','3','4']['5','0','4','2']]
  zoneColors = document.getElementById('selectionCouleur');
  zoneColors.innerHTML ='';
  ligneColors = document.createElement('tr');
  for(i=1;i<=nbColors;i++){
    var color=i-1;
    colonneColors = document.createElement('td');
    colonneColors.innerHTML ='';
    colonneColors.style.width = '32px';
    ligneColors.appendChild(colonneColors);

    pion = document.createElement('div');
    pion.className = 'pion';
    pion.style.background = colors[color];
    pion.setAttribute('onclick','selectCouleur('+color+');');
    colonneColors.appendChild(pion);
  }
  boutonOk = document.createElement('td');
  boutonOk.innerHTML ='Ok';
  boutonOk.style.width = '32px';
  boutonOk.id = 'boutonOk';
  boutonOk.setAttribute('onclick','traitementReponse();');
  ligneColors.appendChild(boutonOk);
  zoneColors.appendChild(ligneColors);
}

// Fonction qui selectionne la couleur

function selectCouleur(color){
  combiActive[activecolonne-1]=color;
  caseActive = document.getElementById('tour-'+turn+'-'+activecolonne);
  caseActive.innerHTML = '';
  pion = document.createElement('div');
  pion.className = 'pion';
  pion.style.background = colors[color];
  caseActive.appendChild(pion);
  if(activecolonne == combiSize){
    activecolonne = 1;
  }else activecolonne++;
}

// Fonction qui traitre la réponse du joueur et fait avancer le jeu

function traitementReponse(){
  addCombi(combiActive);
  let indicesIA=compare(combiActive);
  displayCombiResponse(indicesIA);
  if(hasWin(indicesIA)){
    displayResponse('Victoire');
    displayCombi();
  }
  turn++;
  if(isTerminated()){
    displayResponse('Défaite');
    console.log('hello');
    displayCombi();
  }
  activecolonne=1;
  combiActive=[];
}

function displayCombiResponse(combi){ //=> affiche la combinaison réponse de l’IA
  for(i=1;i<=combiSize;i++){
    zoneResultat = document.getElementById('resultat-'+turn+'-'+i);
    if(combi[i-1]==GOOD_PLACE_COLOR){
      pion = document.createElement('div');
      pion.className = 'goodPlaceColor';
      zoneResultat.appendChild(pion);
    }
    if (combi[i-1]==GOOD_COLOR){
      pion = document.createElement('div');
      pion.className = 'goodColor';
      zoneResultat.appendChild(pion);
    }
  }
}

// Fonction qui vide les combinaisons

function clearCombis(){
  reponses=[];
}


//Fonction qui ajoute la combinaison dans la liste

function addCombi(combi){
  reponses[turn-1]=combi;
}


// Fonction qui compare la combinaison à trouver et une combi vecteur réponse avec des GOOD_PLACE_COLOR et GOOD_COLOR

function compare(combi){
  let combinaisonReponse=[];
  let i=0;
  let code = combinaison.slice(0);
  let combiJ = combi.slice(0);
  for(j=0; j<=combiSize-1; j++){ // Recherche des couleurs bien placées
    if(combiJ[j]===code[j]){
      combinaisonReponse[i]=GOOD_PLACE_COLOR;
      code[j]=9; // valeur qui ne correspond à aucune couleur
      combiJ[j]=9; // évite d'avoir un GOOD_COLOR en doublon avec un GOOD_PLACE_COLOR
      i++;
    };
  };
  for(j=0; j<=combiSize-1; j++){ // Recherche des autres bonnes couleurs
    if (code[j] === 9) {
    }else{
      let firstsamecolor = combiJ.indexOf(code[j]);
      if (firstsamecolor === -1) {
      }else{
        combinaisonReponse[i]=GOOD_COLOR;
        code[j]=9; // valeur qui ne correspond à aucune couleur
        combiJ[firstsamecolor]=9; // évite d'avoir un GOOD_COLOR en doublon
        i++;
      };
    };
  };
  return combinaisonReponse;
}


// Fonction qui détermine si le joueur a gagné

function hasWin(reponseIA){
  let win=0;
  for (i=0;i<combiSize;i++){
    if (reponseIA[i]==GOOD_PLACE_COLOR){
    win++;
    };
  };

  if (win==4){
    return true;
  }else{
    return false;
  };
}


// Fonction qui détermine si la partie est terminée

function isTerminated(){
  if (turn<=turnCount){
    return false;
  }else{
    return true;
  }

}

function displayCombi(){ //=> affiche la combinaison secrete
  for(i=0;i<combiSize;i++){
    j=i+1;
    zoneSecret = document.getElementById('codeSecret-'+j);
    zoneSecret.innerHTML ='';
    lecodeSecret = document.createElement('div');
    lecodeSecret.className = 'pion';
    lecodeSecret.style.background = colors[i];
    zoneSecret.appendChild(lecodeSecret);
  }
}

//function get activeCombi():combinaison // retourne la combinaison active







function displayResponse(type){ // affiche perdu ou victoire
  zoneColors = document.getElementById('selectionCouleur');
  zoneColors.innerHTML ='';
  if(type=='Victoire'){
  zoneMessage = document.getElementById('issue');
  zoneMessage.innerHTML ='Vous avez gagné !';
  zoneMessage.className ='Victoire';
  }else {zoneMessage = document.getElementById('issue');
    zoneMessage.innerHTML ='Vous avez perdu !';
    zoneMessage.className ='Defaite';
  }
}




function newGame(){ //=> initialise une nouvelle partie

}
