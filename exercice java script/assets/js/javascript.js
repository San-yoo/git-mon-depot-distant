var reponse1 = window.prompt("Saisissez votre nom");
var reponse2 = window.prompt("Saisissez votre prénom");
if (window.confirm("etes vous un homme?") == true)
{ 
   var sexe="monsieur"
 }

 if (window.confirm("etes vous une femme?") == true)
{ 
    var sexe="Madame"
 }

 window.alert("Bonjour"+sexe+reponse1+reponse2+"Bienvenue sur notre site web!")
 