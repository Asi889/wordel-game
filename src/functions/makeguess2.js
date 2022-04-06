import { handlePopUp } from "./handlePopUp"
import { changeColor } from "./changeColor"
import { changeColorKeyBoard } from "./changeColorKeyBoard"
import { createGrid1 } from "./createGrid1"
import { activateFlip1 } from "./activateFlip1.ts"
import { saveToStorage } from "./saveToStorage"

export function makeguess2(keboardDelay, computedGuess, allTheWord, success, currentRow, guess, wordoftheday, splitedWord, computedKeyBoard, currentRowIndex, guessNum, statistics, popUpValue, wiggle, gridImage, today, word, finalLetters, allLetters, duplicatedletters, splitedWordCopy) {
  // keboardDelay.value = false;

  if (success.success === true) {
    return;
  }
  /////////// not enough characters   ////////////
  if (computedGuess.value.length < 5) {
    handlePopUp(popUpValue, currentRow, wiggle, "אין מספיק אותיות");
    return;

  }

  /////////// Not in the database ////////////
  if (!allTheWord.includes(computedGuess.value)) {
    handlePopUp(popUpValue, currentRow, wiggle, "לא במאגר");
    return;
  }

  ////// change color /////
  // let p = new Promise((resolve, reject) => {
  //   let atest = false
  //   changeColor(currentRow, wordoftheday, splitedWord,keboardDelay, atest );
  //   console.log(atest);

  //   if(atest){
  //     resolve("resolved")
  //   }else {
  //     reject("rejected")
  //   }
  // });

  changeColor(currentRow, wordoftheday, splitedWord, keboardDelay, duplicatedletters, splitedWordCopy);
  changeColorKeyBoard(computedKeyBoard, wordoftheday, splitedWord);

  ////// Create Gtrid Img /////
  createGrid1(gridImage, word)
  setTimeout(() => {
    ;
  }, 4000);
  ///// Correct guess  /////
  if (computedGuess.value === wordoftheday.value) {
    currentRowIndex.value = currentRowIndex.value + 1;
    setTimeout(() => {
      saveToStorage(today, word, currentRowIndex, success, gridImage, computedGuess)
      success.success = true;
    }, 1300);
    return;
  }

  ////// In database but wrong guess  /////
  if (
    computedGuess.value !== wordoftheday.value &&
    allTheWord.includes(computedGuess.value)
  ) {
    activateFlip1(currentRow)
    currentRowIndex.value = currentRowIndex.value + 1;
    guessNum.value = guessNum.value + 1;
    // p.then((message)=>{
    //   saveToLocalStorage();
    //   console.log(message);

    // })
    const fastGuess = computedGuess
    setTimeout(() => {
      saveToStorage(today, word, currentRowIndex, success, gridImage, computedGuess)
    }, 1000)

    if (currentRowIndex.value < 5) {
      setTimeout(() => {
        guess.value = [];
      }, 1050);
    }

    if (currentRowIndex.value === 5) {
      setTimeout(() => {
        statistics.statistics = true;
      }, 1200);
      return;
    }
  }
}