/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

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

//    3   7  11
// AAGDJWKDSKKD
function findNextIndex(start, str, letter) {
    // if just starting and first char is "letter", return 0
    if (start === 0 && str[0] === letter) return 0;

    // get the substring
    const substr = str.substring(start + 1, str.length);

    // find the next index
    const nextIndex = substr.indexOf(letter);

    // figure out the real index with full string
    if (nextIndex >= 0) {
        return nextIndex + start + 1; // add in the index of where starting + (1 bc we're not including the current index of "letter")
    }

    return -1;
    
}

function doOperations(str, limit, letter) {
    let largest = 0;
    let replacements = 0;
    let currCount = 0;
    
    for (let i = 0; i < str.length; i++) {
        // set i to be the next index of "letter"

        i = findNextIndex(i, str, letter);

        if (i === -1) {
            break;
        }

        console.log({letter, atIndex: i});

        // look backwards from letter:
        // TODO: redo this:
        let substrBefore = str.substring(0, i + 1);

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
        let substrAfter = str.substring(i, str.length);

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
