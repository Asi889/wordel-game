export function changeColor(currentRow, wordoftheday, splitedWord) {
    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const rndInt = randomIntFromInterval(1, 2)
    currentRow.value.letters.forEach((letter, index) => {
        if(letter.inword === true || letter.notInWord === true || letter.rightPosition === true){
            return
        }
        if (!wordoftheday.value.includes(letter.letter)) {
            letter.notInWord = true;
            if(rndInt === 1){
                letter.status = "🟨"

            }else{
                letter.status = "🟩"
            }
        }

        if (wordoftheday.value.includes(letter.letter)) {
            letter.inWord = true;
            if(rndInt === 1){
                
                letter.status = "🟩"
            }else{
                letter.status = "⬜"
            }
            splitedWord.value.forEach((char, index1) => {
                if (char === letter.letter && index1 === index) {
                    letter.rightPosition = true;
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