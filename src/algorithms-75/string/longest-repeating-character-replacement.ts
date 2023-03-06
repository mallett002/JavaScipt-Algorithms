function determineMostOccur(str) {
    const tested = [];
    let mostOccur = 0;
    let letter = '';

    for (const char of str) {
        if (!tested.includes(char)) {
            const regex = new RegExp(char, 'g');
            const match = str.match(regex);

            if (match && match.length && match.length > mostOccur) {
                mostOccur = match.length;
                letter = char;
            }

            tested.push(char);
        }
    }

    return letter;
}

function doOperations(str, limit, letter) {
    let largest = 0;
    let replacements = 0;
    let currCount = 0;
    
    for (let i = 0; i < str.length; i++) {
        // find the next "letter"
        const letterIndex = str.indexOf(letter);
        console.log({letter, atIndex: letterIndex});

        // look backwards from letter:
        let substrBefore = str.substring(i, letterIndex + 1);

        for (let j = substrBefore.length - 2; j >= 0 && replacements <= limit; j--) {
            
            // make sure we're not out of bounds
            if (j >= 0) {
                console.log('Looking at index: ', j);
                
                // if need to replace the char with "letter"
                if (substrBefore[j] !== letter) {
                    // update replacementCount (bc we replaced the letter)
                    replacements++;
                    currCount++;

                    if (currCount > largest) {
                        largest = currCount;
                    }

                } else { // does equal letter, move on ( no need to replace )
                    currCount++;
                    continue;
                }
            } else { // out of bounds going backwards, exit loop
                break;
            }
        }

        // Reset for looking forwards
        currCount = 0;
        replacements = 0;

        // Look forwards from letter:
        let substrAfter = str.substring(letterIndex, str.length);

        console.log({substrBefore, substrAfter})
        for (let j = 1; j <= substrAfter.length && replacements <= limit; j++) {
            if (substrAfter[j] !== letter) {

                replacements++;
                currCount++;

                if (currCount > largest) {
                    largest = currCount;
                }

            } else { // already equals letter
                currCount++;

                if (currCount > largest) {
                    largest = currCount;
                }

                continue;
            }
        }

        // Reset
        replacements = 0;
        currCount = 0;
    }
    
    return largest;
}



function characterReplacement(str, limit) {
    // figure out the one that occurs the most
    const letter = determineMostOccur(str);
    const count = doOperations(str, limit, letter);
    console.log({count})

    // const count = determinHighestConsecCount(newStr);
    

    // return count;
    return count;
};