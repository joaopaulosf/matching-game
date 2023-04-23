import CardGame from "../CardGame";
import "./style.css";

const CardFrontBack = () => {
    window.cardFrontBack = {};
    window.cardFrontBack.handleClick = (event) => {
        const $origin = event.target;
        const $cardFrontBack = $origin.closest(".card-front-back");
        $cardFrontBack.classList.toggle("-active");
    }

    return `
        <article class="card-front-back" onclick="cardFrontBack.handleClick(event)">
            <div class="card -front">
                ${CardGame()}
            </div>
            <div class="card -back">
                ${CardGame("vue-js", "vue-icon")}
            </div>
        </article>
    `
};

export default CardFrontBack;