export function changeColor(currentRow, wordoftheday, splitedWord, keboardDelay, duplicatedletters, splitedWordCopy) {
    
    const duplicatedLetters = [];
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

            // duplicatedletters = splitedWordCopy.filter((item, pos)=> splitedWordCopy.indexOf(item) !== pos)
            // console.log(duplicatedletters);
            // console.log("duplicatedletters");
            
            // const toFindDuplicates = (arry)=>{

            //     return arry.value.filter((item, index) => arry.value.indexOf(item) !== index)
            // } 
            // const duplicateElementa = toFindDuplicates(splitedWord);
            // if(duplicateElementa?.length>0){
                
                
            //     setTimeout(() => {
            //         letter.doubleLetter = true;
            //         keboardDelay.value = true
                    
            //         // letter.notInWord = true;
            //     },index * 250);
            // }else{

            // }
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
                // letter.inWord = true;
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