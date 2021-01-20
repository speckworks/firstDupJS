//a = [2, 1, 7, 2, 5, 3, 2, 5, 1]
a = "aabbccddee"

const firstNonDuplicate = s => {
     let freqCounter = {};
      let arr = s.split('');
console.log(arr);
    arr.forEach(ch => {
        if (!freqCounter[ch])
            freqCounter[ch] = 1; 
        else
            freqCounter[ch]++;
    });

//console.log(freqCounter);
    //console.log(freqCounter);

    for (let i = 0; i < arr.length; i++) {
        let ch = arr[i];
        if (freqCounter[ch] == 1)
            return ch;
    }
   
 if(Object.keys(freqCounter).every(key => freqCounter[key] > 1)){return "_"};


}

firstNonDuplicate(a);