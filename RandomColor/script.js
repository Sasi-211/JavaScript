let colorCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']

const changeColor = () => {
    let display = document.getElementById("display")
    let randomColor = "#";

    for (let i = 0; i < 6; i++) {
        let randNumber = Math.floor(Math.random() * 16)
        randomColor += colorCode[randNumber]
    }

    display.style.backgroundColor = randomColor

    console.log(randomColor);

    // let copy = () => {
    //     let randomColor = copy
    // }


}