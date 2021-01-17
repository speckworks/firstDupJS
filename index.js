a = [2,1,3,5,3,2]

const firstDuplicate = arr => {
  const memory = {};

  for (let i = 0; i < arr.length; i++) {
    if (memory[arr[i]] !== undefined) {
      return arr[i];
    } else {
      memory[arr[i]] = arr[i];
    }
  }

  return -1;
};

firstDuplicate(a);