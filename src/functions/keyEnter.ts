export function keyEnter(success: any ,currentRow: any, guess: any,event: any) {
 
    // if (keboardDelay.value === false) {
      //   return;
      // }
      if (success.success === true) {
        return;
      }
      for (const letter of currentRow.value.letters) {
        if (!letter.letter) {
          letter.letter = event.key;
          guess.value.push(event.key);
          break;
        }
      }
}