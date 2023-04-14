(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}]},{},[1]);
