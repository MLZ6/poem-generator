function displayPoem(response){ 
  new Typewriter ("#poem",{
  strings: response.data.answer,
  autoStart: true,
  cursor: null,
  delay: 50,
});

}
function generatePoem(event) {
  event.preventDefault();

 let instructionsInput = document.querySelector("#user-instructions")
 let apiKey = "4te9f58ab5b4c4cd8o33b106e27f5729";
 let context = "You are a romantic Poem expert and love to write poems.Please generate a 4 line poem  and seperate each line with a <br />.Make sure to follow user instructions below.Do not include a title to the poem.Sign the poem with 'SheCodes AI' inside a <strong> element at the bottom of the poem";
 let prompt =` User instructions: Generate a poem about ${instructionsInput.value}`;
 let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

 axios.get(apiURL).then(displayPoem);
  
  
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
