// Event Handling 
/*
const change = () => {
    let display = document.getElementById("display")
    display.innerHTML = "Bye Sir"
    display.style.color = "red"
    display.style.backgroundColor = "lightgreen"
    // display.style.backgroundImage = URL("https://cdn.britannica.com/13/225313-050-3519547A/Lime-butterfly-Papilio-demoleus-feeding-on-flower.jpg")
}
*/


    let display = document.getElementById("display")
    let count = -1

    const inc = () => {
        count++
        display.innerHTML = count
}

inc()
