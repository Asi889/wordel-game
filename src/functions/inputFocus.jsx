export function inputFocus (e) {
    // const focusNext = (e: any) => {
    // console.log(e);
    // console.log("event bitches");

    var target = e.srcElement || e.target;
    var maxLength = parseInt(target.attributes["maxlength"].value, 10);
    var myLength = target.value.length;
    if (myLength >= maxLength) {
        var next = target;
        while ((next = next.nextElementSibling)) {
            if (next == null) break;
            if (next.tagName.toLowerCase() === "input") {
                next.focus();
                console.log(word);
                console.log("word");

                break;
            }
        }
    }
    // Move to previous field if empty (user pressed backspace)
    else if (myLength === 0) {
        var previous = target;
        while ((previous = previous.previousElementSibling)) {
            if (previous == null) break;
            if (previous.tagName.toLowerCase() === "input") {
                previous.focus();
                console.log(word);
                console.log("word111");
                break;
            }
        }
    }
    //   };
}