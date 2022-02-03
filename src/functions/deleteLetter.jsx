export function deleteLetter(row){
  console.log("logi");
    for (let i = 5; i >= 1; i--) {
        const elt = document.getElementById(`letter-${row}-${i}`);
        if (elt?.innerText !== '') {
          if(elt !== null){
            elt.innerText = '';
            break;

          }
        }
      }
}