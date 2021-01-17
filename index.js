a = [2,1,7,5,3]

const firstDuplicate = arr => {
  const memory = {};

  for (let i = 0; i < arr.length; i++) {
    if (memory[arr[i]] !== undefined) {
      return arr[i];
    } else {
      memory[arr[i]] = arr[i];
    }
  }

  return "There are no duplicates."
};

firstDuplicate(a);