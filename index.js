a = [2, 1, 7, 2, 5, 3, 2, 5, 1]

const firstNonDuplicate = arr => {
  const memory = {};

  for(let j = 0; j < arr.length; j++){
  memory[j] = arr[j];
  };

  return memory;

  for (let i = 0; i < arr.length; i++) {
    if (memory[arr[i]] == undefined) {
      return arr[i];
    } else {
      memory[arr[i]] = arr[i];
    }
  }

  return "There are no Non-duplicated numbers."
};

firstNonDuplicate(a);