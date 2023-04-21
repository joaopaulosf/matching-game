import "./style.css";

const CardGame = (icon="vscode", alt="vscode-icon") => {
    return `
        <article class="card-game">
            <img src= "./src/images/${icon}.png" alt="${alt}">
        </article>
    `;
};

export default CardGame;