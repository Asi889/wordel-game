export function deleteKey(success ,currentRow, guess) {
 
    if (success.success === true) {
        return;
      }
      for (const letter of [...currentRow.value.letters].reverse()) {
        if (letter.letter) {
          letter.letter = "";
          guess?.value.pop();
          break;
        }
      }
}