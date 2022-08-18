
// task 1 

// let tab =  window.open("","new", "width=300,height=300,left=50,top=50")
// setTimeout(() =>{
//  tab.window.resizeTo(500,500)
// // tab.moveTo(200,200)
// }, 2000)

// setTimeout(() =>{

//    tab.moveTo(200,200)
//    }, 4000)

// setTimeout(() =>{
//     tab.close()

// },6000)


// task 2

// let btnChange = document.querySelector("button#btn")

// btnChange.addEventListener("click", () => {

//     let text = document.querySelector('p#text')
//     text.setAttribute("class", "change")
// })


// task 3 

// let btn1 = document.querySelector('button#btn1')
// let btn2 = document.querySelector('button#btn2')
// let btn3 = document.querySelector('button#btn3')
// let link =  document.querySelector('a#link')


// btn1.addEventListener('click', () => {
//     document.body.style.background = "blue"
// })

// btn2.addEventListener("dblclick", () => {
//     document.body.style.background = "pink"
// })

// btn3.addEventListener("mousedown", () => {
//     document.body.style.background = "brown"
// })

// btn3.addEventListener("mouseup", () => {
//     document.body.style.background = "white"
// })


// link.addEventListener("mouseenter", (e) => {
//     document.body.style.background = "yellow"
// })  

// link.addEventListener("mouseleave", (e) => {
//     document.body.style.background = "white"
// })  

// task 4

// let choose = document.querySelector("select#choose")
// let btnDelete = document.querySelector("button#btnDelete")

// btnDelete.addEventListener('click', () => {
//     choose.remove(choose.value)
// })

// task 5 

// let btnLive = document.querySelector('button#btnLive')
// let output = document.querySelector('div#output')

// btnLive.addEventListener("click", () => {
//     output.innerHTML += "<p>I was pressed!</p>"
// })

// btnLive.addEventListener("mouseover", (e) => {
//     output.innerHTML += "<p>Mouse on me!</p>"
// })

// btnLive.addEventListener("mouseout", (e) => {
//     output.innerHTML += "<p>Mouse is not on me!</p>"
// })

// task 6 

// window.addEventListener("load", () => {
//     setInterval(() => {
//         document.body.innerText = `Width: ${window.innerWidth}, Height: ${window.innerHeight}`

//     }, 100)
// })

// task 7 

let country = document.querySelector('select#country')
let cities = document.querySelector('select#cities')
let output = document.querySelector('div#output')

function removeAll () {

    for (let i = 0; i < 4; i++) {
        cities.remove(cities[i])
    }
}

function addNew (arr) {
    for (let i = 0; i < arr.length; i++) {
        let option = document.createElement('option')
        option.text = arr[i]
        cities.add(option,undefined)
    }
}
function ouputText() {
    output.innerHTML = country.value + ",  " + cities.value 

}

country.addEventListener('change', () => {
    if(country.value == "USA"){
        removeAll()
        addNew(["New-York", "Washington", "Chikago"])
} else if(country.value == "Ukraine"){
    removeAll()
    addNew(["Lviv", "Kyiv","Kharkiv", "Odessa"])
} else {
    removeAll()
    addNew(["Berlin", "Hamburg", "Munich"])
}
ouputText()})

cities.addEventListener('change', () => {
    ouputText()
})

