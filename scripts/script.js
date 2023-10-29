menuButton = document.querySelector("nav:first-of-type > img");
kruis = document.querySelector("nav:last-of-type div img");
contact = document.querySelector("nav:last-of-type ul li:last-of-type a")
// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
menuButton.onclick = openMenu;
kruis.onclick = sluitMenu;
contact.onclick = sluitMenu;
// stap 3: voeg in de functie een class toe aan de nav
function openMenu(){
  navigatie = document.querySelector("nav:last-of-type");
  navigatie.classList.toggle("toonMenu");
}


function sluitMenu(){
  navigatie.classList.remove("toonMenu");
}