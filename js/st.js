var nombreAleatoire = Math.floor(Math.random()*100 + 1);
///Math.floor==Nombre sans virgule...Math.random==Nombre aleatoire
console.log("IA = " + nombreAleatoire);
///NOMBRE ALEATOIRE DE LORDINATEUR////////
var essai = 0;

function bouton(){
  var nbre = document.getElementById("tapez").value;
    var nbr1 = nombreAleatoire - 15
    var nbr2 = nombreAleatoire + 15
   if (nbre == ""){
         alert("Saisir un nombre!");
     }
  var diff = Math.abs(nbre - nombreAleatoire);
  //math abs remplace - Par + donc la difference
  console.log("utilisateur = " + nbre);


  if (diff==0){
  document.getElementById("droite").innerHTML = "GAGNE";
  document.getElementById("droite").style.color ="green";
}
  else if (diff<5){
  document.getElementById("droite").innerHTML = "Bouillant";
  document.getElementById("droite").style.color ="red";

} else if (diff<10){
  document.getElementById("droite").innerHTML = "Chaud";
  document.getElementById("droite").style.color ="#EC6400";

} else if (diff<20){
  document.getElementById("droite").innerHTML = "Tiede";
  document.getElementById("droite").style.color ="yellow";

} else if (essai==5){
  document.getElementById("droite").innerHTML = "Le nombre est entre "+nbr1 + " et " + nbr2;
  document.getElementById("droite").style.color ="green";
}
  else if (essai==10){
  document.getElementById("droite").innerHTML = "GAME OVER ! Le chiffre était "+ nombreAleatoire;
  document.getElementById("droite").style.color ="blue";
  location.reload();
} else  {
  document.getElementById("droite").innerHTML = "Froid";
  document.getElementById("droite").style.color = "lightblue";
}
  essai ++
  console.log("Essai = " + essai);
}


/////ENTREE/////
document.onkeypress = function(e){
console.log(e.keyCode);
if(e.keyCode=="13"){
    bouton()
  }
}
/////////////////////
