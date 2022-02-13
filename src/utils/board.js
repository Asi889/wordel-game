export const board = () => {
    let tiles= []
    const g = () => {
        for (let i = 1; i < 6; i++) {
            let wordObj= {rowNUm: i, tried: false, letters:[] }
            tiles.push(wordObj)
            for (let j = 1; j < 6; j++) {
                let wrodJ= { id: j, letter: "", inWord: "", rightPosition: "", notInWord: "", status: "", flipped: false }
                wordObj.letters.push(wrodJ)
            }
        }
        return tiles
    }
    g()
    return tiles
}


// const b = [
//     {
//         rowNum: 1,
//         id: 1,
//         tried: false,
//         letters: [
//             { id: 1, letter: "", inWord: "", rightPosition: "", notInWord: "", status: "", flipped: false },
//             { id: 2, letter: "", inWord: "", rightPosition: "", notInWord: "", status: "", flipped: false },
//             { id: 3, letter: "", inWord: "", rightPosition: "", notInWord: "", status: "", flipped: false },
//             { id: 4, letter: "", inWord: "", rightPosition: "", notInWord: "", status: "", flipped: false },
//             { id: 5, letter: "", inWord: "", rightPosition: "", notInWord: "", status: "", flipped: false },
//         ],
//     },
//     {
//         rowNum: 2,
//         id: 2,
//         tried: false,
//         letters: [
//             { id: 1, letter: "", inWord: "", rightPosition: "", notInWord: "", status: "", flipped: false },
//             { id: 2, letter: "", inWord: "", rightPosition: "", notInWord: "", status: "", flipped: false },
//             { id: 3, letter: "", inWord: "", rightPosition: "", notInWord: "", status: "", flipped: false },
//             { id: 4, letter: "", inWord: "", rightPosition: "", notInWord: "", status: "", flipped: false },
//             { id: 5, letter: "", inWord: "", rightPosition: "", notInWord: "", status: "", flipped: false },
//         ],
//     },
//     {
//         rowNum: 3,
//         id: 3,
//         tried: false,
//         letters: [
//             { id: 1, letter: "", inWord: "", rightPosition: "", notInWord: "", status: "", flipped: false },
//             { id: 2, letter: "", inWord: "", rightPosition: "", notInWord: "", status: "", flipped: false },
//             { id: 3, letter: "", inWord: "", rightPosition: "", notInWord: "", status: "", flipped: false },
//             { id: 4, letter: "", inWord: "", rightPosition: "", notInWord: "", status: "", flipped: false },
//             { id: 5, letter: "", inWord: "", rightPosition: "", notInWord: "", status: "", flipped: false },
//         ],
//     },
//     {
//         rowNum: 4,
//         id: 4,
//         tried: false,
//         letters: [
//             { id: 1, letter: "", inWord: "", rightPosition: "", notInWord: "", status: "", flipped: false },
//             { id: 2, letter: "", inWord: "", rightPosition: "", notInWord: "", status: "", flipped: false },
//             { id: 3, letter: "", inWord: "", rightPosition: "", notInWord: "", status: "", flipped: false },
//             { id: 4, letter: "", inWord: "", rightPosition: "", notInWord: "", status: "", flipped: false },
//             { id: 5, letter: "", inWord: "", rightPosition: "", notInWord: "", status: "", flipped: false },
//         ],
//     },
//     {
//         rowNum: 5,
//         id: 5,
//         tried: false,
//         letters: [
//             { id: 1, letter: "", inWord: "", rightPosition: "", notInWord: "", status: "", flipped: false },
//             { id: 2, letter: "", inWord: "", rightPosition: "", notInWord: "", status: "", flipped: false },
//             { id: 3, letter: "", inWord: "", rightPosition: "", notInWord: "", status: "", flipped: false },
//             { id: 4, letter: "", inWord: "", rightPosition: "", notInWord: "", status: "", flipped: false },
//             { id: 5, letter: "", inWord: "", rightPosition: "", notInWord: "", status: "", flipped: false },
//         ],
//     },
// ]