export function changeColor(currentRow, wordoftheday, splitedWord, keboardDelay) {
    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const rndInt = randomIntFromInterval(1, 2)
    currentRow.value.letters.forEach((letter, index) => {
        if(letter.inword === true || letter.notInWord === true || letter.rightPosition === true){
            return
        }
        if (!wordoftheday.value.includes(letter.letter)) {
            // letter.notInWord = true;
            setTimeout(() => {
                letter.notInWord = true;
                keboardDelay.value = true
              },index * 250);
            if(rndInt === 1){
                letter.status = "🟨"

            }else{
                letter.status = "🟩"
            }
        }

        if (wordoftheday.value.includes(letter.letter)) {
                // letter.inWord = true;
                setTimeout(() => {
                letter.inWord = true;
                keboardDelay.value = true

                // letter.notInWord = true;
              },index * 250);
            if(rndInt === 1){
                
                letter.status = "🟩"
            }else{
                letter.status = "⬜"
            }
            splitedWord.value.forEach((char, index1) => {
                if (char === letter.letter && index1 === index) {
                    // letter.rightPosition = true;
                    setTimeout(() => {
                        letter.rightPosition = true;
                        keboardDelay.value = true
                        // letter.notInWord = true;
                      },index * 250);
                    if(rndInt === 1){
                        letter.status = "⬜"
        
                    }else{
                        letter.status = "🟨"
                    }
                }
            });
        }
    });
}