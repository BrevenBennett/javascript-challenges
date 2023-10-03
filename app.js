function convertToBoolean(arr) {
  let boolean = []
  for (i = 0; i < arr.length; ++i) {
    boolean.push(!!arr[i])
  }
  return boolean

  // return arr.map(elem => !!elem)
}

console.log(convertToBoolean([500, 0, "Breven", '', []]))