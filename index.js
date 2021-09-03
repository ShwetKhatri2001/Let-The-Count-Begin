VanillaTilt.init(document.querySelector(".container"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.2
});

const getVal = (event) => {
    event.preventDefault();
    calc.txt.value += event.target.innerText;
}