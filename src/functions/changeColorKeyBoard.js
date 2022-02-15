import {endLettersReverse} from "../utils/letters"

export function changeColorKeyBoard(computedKeyBoard, wordoftheday, splitedWord) {
  
  computedKeyBoard.value.map((char, charIndex) => {
        if(char.position === "notInWord" || char.position === "inWord"){
            return
        }
        if (!wordoftheday.value.includes(char.letter)) {
          char.position = "notInWord";
        }
        if (wordoftheday.value.includes(char.letter) || wordoftheday.value.includes(endLettersReverse[char.letter])) {
          char.position = "inWord";
          splitedWord.value.forEach((letter, index) => {
            if (letter === char.letter && index == charIndex ) {
              char.position = "inPosition";
            }
          });
        }
      });
}