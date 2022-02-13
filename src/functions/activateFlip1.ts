export function activateFlip1 (currentRow: any){
    currentRow.value.letters.map((char: any, index: number) => {
        setTimeout(() => {
          char.flipped = true;
        }, index * 250);
      });
}