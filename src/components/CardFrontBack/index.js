import CardGame from "../CardGame";

const CardFrontBack = () => { 
    return `
        <article class="card-front-back">
            ${CardGame()}
            ${CardGame("vue-js", "vue-icon")}
        </article>
    `
};

export default CardFrontBack;