export function getTodayWord():string{
    // const index = 0;
    // return allWords[index]
    const now = new Date()
  const start = new Date(2022, 0, 0)
  const diff = Number(now) - Number(start)
  let day = Math.floor(diff / (1000 * 60 * 60 * 24))
  while (day > allWords.length) {
    day -= allWords.length
  }
  return allWords[day]
}

export const alphab =[
      
  {letter: "א", position:"", color: "blue"},
  {letter: "ב", position:"", color: "blue"},
  {letter: "ג", position:"", color: "purpule"},
  {letter: "ד", position:"", color: "purpule"},
  {letter: "ה", position:"", color: "red"},
  {letter: "ו", position:"", color: "orange"},
  {letter: "ז", position:"", color: "orange"},
  {letter: "ח", position:"", color: "green"},
  {letter: "ט", position:"", color: "green"},
  {letter: "י", position:"", color: "blue"},
  {letter: "כ", position:"", color: "blue"},
  {letter: "ל", position:"", color: "purpule"},
  {letter: "מ", position:"", color: "red"},
  {letter: "נ", position:"", color: "orange"},
  {letter: "ס", position:"", color: "orange"},
  {letter: "ע", position:"", color: "orange"},
  {letter: "פ", position:"", color: "green"},
  {letter: "צ", position:"", color: "green"},
]

export const restOfElphabet1 = [{letter: "ת", position:"", color: "purpule"},{letter: "ש", position:"", color: "purpule"},{letter: "ר", position:"", color: "red"},{letter: "ק", position:"", color: "purpule"},]


export const allWords =[
    'אנאלי',
    'בנאלי',
    'שלמנו',
    'יכלנו',
    'היותו',
    'אימהו',
    'הלכנו',
    'נרגלה',
    'רוגלך',
    'מאפיה',
]
