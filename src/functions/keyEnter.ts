export function keyEnter(success: any ,currentRow: any, guess: any,event: any, wordoftheday: string, finalLetters: any) {
 
    // if (keboardDelay.value === false) {
      //   return;
      // }
      if (success.success === true) {
        return;
      }
      // currentRow.value.letters.forEach((letter: any)=>{
      //   if (!letter.letter) {
      //     letter.letter = event.key
      //     guess.value.push(event.key)
      //     // break
      //     return false
      //   }
      // })

      for (const letter of currentRow.value.letters) {
        if (!letter.letter) {
          if(letter.id === 5){
            if(finalLetters[event.key]){
              letter.letter = finalLetters[event.key]
              guess.value.push(finalLetters[event.key]);
              break;
            }
          }
          letter.letter = event.key;
          guess.value.push(event.key);
          break;
        }
      }
}