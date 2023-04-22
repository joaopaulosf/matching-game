import CardGame from "../CardGame";
import "./style.css"

const CardFrontBack = () => { 
    return `
        <article class="card-front-back">
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