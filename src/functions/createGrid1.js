export function createGrid1 (gridImage,word){
    gridImage.value = word.value.map((letterObj) =>
        letterObj.letters
          .map((letter) => letter.status)
          .slice(0, 4)
          .join("")
      );
}