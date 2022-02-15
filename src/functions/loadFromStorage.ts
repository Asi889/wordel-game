import { createGrid1 } from "./createGrid1";
import { changeColorKeyBoard } from "./changeColorKeyBoard";
import { loadColorKeyBoard } from "./loadColorKeyBoard";
export function loadFromStorage(
  gridImage: any,
  word: any,
  currentRowIndex: any,
  success: any,
  statistics: any,
  firstTimer: any,
  today: any,
  wordoftheday: any,
  splitedWord: any,
  allLetters: any,
  finalLetters: any,
  layout: any
) {
  const date = localStorage.getItem("date");
  if (!date) {
    layout.settings = false;
    layout.main = false;
    layout.info = true;
    return;
  }

  if (date !== today) {
    localStorage.removeItem("date");
    localStorage.removeItem("guesses");
    localStorage.removeItem("word");
    return;
  }

  const storageWord = JSON.parse(localStorage.getItem("word") as any);
  const guesses = JSON.parse(localStorage.getItem("guesses") as any);
  const rowNum = JSON.parse(localStorage.getItem("rowindex") as any);
  const winnerCheck = JSON.parse(localStorage.getItem("winner") as any);
  const grid4 = [localStorage.getItem("grid")] as Array<any>;
  if (guesses) {

    guesses.forEach((guess: any) => {
      let splited = [guess.split("").reverse()];

      splited[0].forEach((letter: any, letterIndex: any) => {
        allLetters.forEach((char: any) => {
          if (letter == char.letter || letter === finalLetters[char.letter] ) {

            if (!wordoftheday.value.includes(letter)) {
              char.position = "notInWord";
            }
            if (wordoftheday.value.includes(letter)) {
              char.position = "inWord";
              splitedWord.value.forEach((letter1: any, index: any) => {
                if (letter1 === char.letter && index == letterIndex) {
                  char.position = "inPosition";
                }
              });
            }
          }
        });
      });
    });
  }

  if (grid4) {
    let flatGrid= grid4[0].replaceAll(',', '')
    // let ggg = flatGrid.
    gridImage.value = [grid4[0].replaceAll(',', '')];
    
    
    // createGridImage();
    // createGrid1(gridImage, word);
  }

  if (!storageWord || !rowNum) {
    return;
  }
  let rowCount = 0;
  if (date) {
    word.value = storageWord;
    word.value.forEach((wordObj: any) => {
      if (!wordObj.tried === false) {
        rowCount = rowCount + 1;
      }
    });
    currentRowIndex.value = rowNum;
    if (winnerCheck) {
      setTimeout(() => {
        success.success = true;
      }, 1000);
    }
    if (rowNum === 5) {
      setTimeout(() => {
        statistics.statistics = true;
      }, 1000);
    }
  }
}
