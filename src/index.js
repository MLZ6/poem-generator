function generatePoem(event) {
  event.preventDefault();

  
  new Typewriter ("#poem",{
    strings: "The poem will go here",
    autoStart: true,
    cursor: null,
    delay: 50,
  });
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
