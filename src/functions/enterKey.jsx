export function enterKey(row,event){
  console.log("works");
  for (let i = 1; i <= 5; i++) {
    const elt = document.getElementById(`letter-${row.value}-${i}`);
    if (elt?.innerHTML === "") {
      elt.innerText = event.key;
      break;
    }
  }
}