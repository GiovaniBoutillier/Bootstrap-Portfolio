var personnage = prompt("Comment se nomme le personnage ? (Masculin)");
    document.getElementById('personnage').innerHTML = personnage;
    console.log(personnage)

var habitation = prompt("D'ou vient t-il ?");
    document.getElementById("habitation").innerHTML = habitation;
    console.log(habitation)

var age = prompt("Quel âge a t'il? (Pas de lettre)");
    document.getElementById("age").innerHTML = age;
    console.log(age)

var relation =prompt("Est il marié ou célibataire?");
    document.getElementById("relation").innerHTML = relation ;
    console.log(relation)

var foret = prompt("Comment se nomme la forêt où la personne va se rendre ? (exple: la foret enchanté)");
    document.getElementById("foret").innerHTML = foret;
    console.log(foret)



alert("N'en dites pas plus !! Je vais vous raconter l'histoire de " + personnage + " et de " + foret + " ! " + "Passer Votre souris sur l'image afin de voir l'hisoire ! Bonne lecture !!" )
