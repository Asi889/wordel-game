export function changeColorKeyBoard(computedKeyBoard, wordoftheday, splitedWord) {
    computedKeyBoard.value.map((char, charIndex) => {
        if(char.position === "notInWord" || char.position === "inWord" || char.position === "inPosition"){
            return
        }
        if (!wordoftheday.value.includes(char.letter)) {
          char.position = "notInWord";
        }
        if (wordoftheday.value.includes(char.letter)) {
          char.position = "inWord";
          splitedWord.value.forEach((letter, index) => {
            if (letter === char.letter && index == charIndex) {
              char.position = "inPosition";
            }
          });
        }
      });
}