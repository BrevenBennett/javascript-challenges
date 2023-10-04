async function firstSixIncomplete() {
  const promise = await fetch("https://jsonplaceholder.typicode.com/todos")

  const result = await promise.json()

  const incompleteToDos = result.filter(elem => !elem.completed).slice(0, 6)

  console.log(incompleteToDos)
}

firstSixIncomplete();