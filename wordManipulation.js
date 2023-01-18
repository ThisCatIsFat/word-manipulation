// user input
const askForWord = prompt("Please enter a word");

/* i wasn't sure hoe to reverse a string but found out you can make it an array first, use a reverse method on it then turn it back into a string
 https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
i had a lot of trouble with how to change every second letter, found out you can me the letter an index a key/value pair by making  a map
 and then using a ternary operator to change the letter at a certain position, you can also use this method to change every 6th letter into a capital
 https://stackoverflow.com/questions/71296413/change-even-character-in-string-with-the-for-loop */

function wordManipulation(word) {
  // reversing the word
  const reverse = word.split("").reverse().join("");
  console.log(reverse);

  // change every 2nd letter into a !
  let every2ndLetter = [...word].map((letter, index) => {
    return index % 2 != 0 ? "!" : letter;
  });
  console.log(every2ndLetter.join(""));

  // split up string to make an array - easier to manipulate
  let arrayWord = word.split("");
  // use map to change ever 6th letter into uppercase
  let capital = arrayWord
    .map((letter, index) => (index % 6 == 5 ? letter.toUpperCase() : letter))
    .join("");

  console.log(capital);

  // use loop to add the ascii values into an array
  let ascii = [];
  for (let i = 0; i < word.length; i++) {
    ascii.push(word.charCodeAt(i));
  }
  // turn the logged values into an array
  console.log(ascii);
}

// call function
wordManipulation(askForWord);
