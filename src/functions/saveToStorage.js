export function saveToStorage(today,word, currentRowIndex,success, gridImage, computedGuess){
    
    let todayCheck = localStorage.getItem("today");
    if (!todayCheck) {
        localStorage.setItem("date", today);
    }
    setTimeout(() => {
        
        if (success.success === true) {
            localStorage.setItem("winner", true);
        }
    }, 1400);
    
    let guesses = JSON.parse(localStorage.getItem("guesses"));
    let firstGuess= [computedGuess.value]
    if(!guesses){
        localStorage.setItem('guesses', JSON.stringify(firstGuess))
    }else{
        guesses.push(computedGuess.value)
        localStorage.setItem("guesses", JSON.stringify(guesses))
    }

      let hjk = JSON.stringify(word.value);
      localStorage.setItem("word", hjk);
      localStorage.setItem("rowindex", currentRowIndex.value);
      localStorage.setItem("grid", gridImage.value);
      localStorage.setItem("grid", gridImage.value);
}