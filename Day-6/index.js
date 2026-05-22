// Error Handling

// try {
//     console.log(y)

// } catch (err){
//     console.log(err);
// }

// console.log(`Bujji`)



// Time intervals
// function myFun () {
//     console.log(-1);
// }

// setTimeout(myFun, 2000)

// setInterval(myFun, 2000)

// clearInterval  


// random image generator

fetch("https://dog.ceo/api/breeds/image/random")
.then((res) => res.json())
.then((data) => console.log(data.status))
.catch(err => console.log(err))

let display = document.getElementById("display")

const changeImage = async () => {
    try {
        const res = await fetch('https://dog.ceo/api/breeds/image/random')
        const data = await res.json()
        console.log(data.fact);        
        display.style.backgroundImage = `url(${data.message})`
        // display.innerHTML = `<p>${data.fact}</p>`
    } catch(err) {
        console.log(err)
    }
}

// https://catfact.ninja/fact
