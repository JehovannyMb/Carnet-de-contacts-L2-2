let prenom, nom, telephone, groupe, email, bio, dropBox, creer, bouttonCreer, list, icon_btn;
prenom = document.querySelector("#Prenom");
nom = document.querySelector("#Nom");
telephone = document.querySelector("#Telephone");
groupe = document.querySelector("#Groupe");
email = document.querySelector("#Email");
bio = document.querySelector("#Bio");
dropBox = document.querySelector(".dropBox");
bouttonCreer = document.querySelector('.creer');
list = document.querySelector(".list");
icon_btn = document.querySelector(".list_btn")

console.log(prenom.value);
bouttonCreer.addEventListener('click', function () {
    console.log(prenom.value);
    let tab = document.createElement('div');
    tab.innerHTML = dropBox.value + "\n" + prenom.value + nom.value + groupe.value + telephone.value + bio.value 
  
    list.appendChild(tab);
    console.log(tab);

});
addContact()

