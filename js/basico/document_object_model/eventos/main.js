window.addEventListener("load", () => {
  console.log("A página foi carregada!");
});

addEventListener("click", (event) => {
  event.preventDefault();
  /*
        Retorna todas as informações do evento
        console.log(event);
    */
  // Retona o elemento clicado.
  console.log(event.target);
  // Retorna o textContent do elemento clicado.
  console.log(event.target.textContent);
});
