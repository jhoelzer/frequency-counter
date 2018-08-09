// document.getElementById("countButton").onclick = function() {
//     var typedText = document.getElementById("textInput").value;
//     typedText = typedText.toLowerCase();
//     // This changes all the letter to lower case.
    
//     typedText = typedText.replace(/[^a-z'\s]+/g, "");
//     // This gets rid of all the characters except letters, spaces, and apostrophes.
//     letterCounts = {};
//     wordCounts = {};

//     for(let i = 0; i < typedText.length; i++) {
//         currentLetter = typedText[i];

//         if(letterCounts[currentLetter] === undefined) {
//             letterCounts[currentLetter] = 1;
//          } else {
//             letterCounts[currentLetter]++;
//          }
//     }

//     for(let letter in letterCounts) {
//         let span = document.createElement("span");
//         let textContent = document.createTextNode('"' + letter + "\": " + letterCounts[letter] + ", ");
//         span.appendChild(textContent);
//         document.getElementById("lettersDiv").appendChild(span);
//      }

     

//      for (let w = 0; w < typedText.length; w++) {
//          let currentWord = typedText[w];

//          if (wordCounts[currentWord] === undefined) {
//             wordCounts[currentWord] = 1;
//          } else {
//             wordCounts[currentWord]++
//          }
//      }

//      for(let word in wordCounts) {
//         let span = document.createElement("span");
//         let textContent = document.createTextNode('"' + word + "\": " + wordCounts[word] + ", ");
//         span.appendChild(textContent);
//         document.getElementById("wordsDiv").appendChild(span);
//      }

//      words = typedText.split(/\s/);
     
// }

document.getElementById("countButton").onclick = function() {
    let typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase();
    typedText = typedText.replace(/[^a-z'\s]+/g, "");

    const letterCounts = {};
    totalCount(letterCounts, typedText);
    toDiv('lettersDiv', letterCounts);

    const words = typedText.split(/\s/);
    const wordCounts = {};
    totalCount(wordCounts, words);
    toDiv('wordsDiv', wordCounts);
    
    function toDiv(letter, fullCount) {
        for (count in fullCount) {
            const span = document.createElement("span");
            const textContent = document.createTextNode('"' + count + "\": " + fullCount[count] + ", ");
            span.appendChild(textContent);
            document.getElementById(letter).appendChild(span);
        }
    }
    
    function totalCount(wordCounts, words) {
        for (let i = 0; i < words.length; i++) {
            const result = words[i];
            if (wordCounts[result] === undefined) {
                wordCounts[result] = 1;
            } else {
                wordCounts[result]++;
            }
        }
    }
}