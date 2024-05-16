/* const form = document.getElementById("click");

form.addEventListener("click", function (event) {
  // 1.Impedisce il comportamento predefinito del modulo di inviare i dati al server
  event.preventDefault();
  console.log("click");
}); */

function generatecelle() {
  const arreyCelle = []; // array vuoto per creare le celle (quando lo richiamo?)
  const Tombola = document.getElementById("Tombola");

  for (let i = 1; i <= 77; i++) {
    const cella = document.createElement("div"); // creo un DIV
    cella.innerText = i; //do un valore alla cella
    cella.classList.add("cella"); //nome classe che abbiamo creato
    Tombola.appendChild(cella); // alla tombola attaccaci la cella
    arreyCelle.push(i);
  }
}
generatecelle();

//creazione del bottone
const bottone = document.createElement("button"); //creo bottone
bottone.innerText = "Tenta la sorte"; //faccio in modo che nel bottone ci sia scritto tenta la sorte
const divBottone = document.getElementById("divBottone"); //selezione l'elemento con quell'id
divBottone.appendChild(bottone);
