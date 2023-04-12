const fruitForm = document.querySelector("#inputSection form")
const fruitList = document.querySelector("#fruitSection ul")

fruitForm.addEventListener("submit", extractFruit)
function extractFruit(e){
    e.preventDefault()
    addFruit(e.target[0].value)
    // console.log(e)
    // console.log(e.target[0].value)
    e.target[0].value = ""
}

function addFruit(fruit){
    const li = document.createElement("li")
    li.textContent = fruit
    fruitList.appendChild(li)
}

// addFruit("Mango")

// addFruit("orage")

// addFruit("strawbery")

// addFruit("Mango")
// addFruit("Mango")
// addFruit("Mango")