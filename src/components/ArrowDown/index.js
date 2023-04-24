import "./style.css"

const ArrowDown = (currentPlayer = 1) => {
    return `
        <img class="arrow-down" data-currentPlayer="${currentPlayer}" src="./src/images/arrow-down.svg" alt="arrow-down">
    `
};

export default ArrowDown;