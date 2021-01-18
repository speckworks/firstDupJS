a = [2, 1, 7, 2, 5, 3, 2, 5, 1]

const firstNonDuplicate = arr => {
     let freqCounter = [];

    // The issue using Map data structure is during the retrival. As it does not gaurantee the keys will be retrived in the same order as they were inserted
    // Hence, we use an array of frequency counter. But in this array keys are found using the ascii values of the character.

    arr.forEach(ch => {
        if (!freqCounter[ch])
            freqCounter[ch] = 1;
        else
            freqCounter[ch]++;
    });

    // Observe this array. It's kinda Map only.
    //console.log(freqCounter);

    for (let i = 0; i < arr.length - 1; i++) {
        let ch = arr[i];
        if (freqCounter[ch] == 1)
            return ch;
 }
}

firstNonDuplicate(a);