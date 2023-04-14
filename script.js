const fruitForm = document.querySelector("#inputSection form")
const fruitList = document.querySelector("#fruitSection ul")
const fruitNutrition = document.querySelector("#nutritionSection ul")

fruitForm.addEventListener("submit", extractFruit)
function extractFruit(e){
    e.preventDefault()
    addFruit(e.target[0].value)
    fetchFruiteData(e.target[0].value)
    e.target[0].value = ""
}

function fetchFruiteData (fruit){
    fetch(`https://fruity-api.onrender.com/fruits/${fruit}`)
        // .then((resp) => resp.json())
        .then(processResponse)
        .then(data => addFruit(data))
        .catch(e => console.log(e))
}
function addFruit(fruit){
    const li = document.createElement("li")
    li.textContent = fruit.name
    fruitList.appendChild(li)
    fruitList.addEventListener("click", removeFruit)
    function removeFruit(e){
    e.target.remove()
}
    // calories += fruit.fruitNutrition.calories
    // fruitNutrition.textContent = "Total amount fo calories in your fruit salad is " + calories

}


  

// addFruit("Mango")

// addFruit("orage")

// addFruit("strawbery")

// addFruit("Mango")
// addFruit("Mango")
// addFruit("Mango")