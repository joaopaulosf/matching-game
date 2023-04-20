import "./style.css"
import CardFrontBack from "../../components/CardFrontBack";


const BoardGame = (amountCards) => {
    const $htmlCardFrontBack = CardFrontBack();
    const $htmlContent = $htmlCardFrontBack.repeat(amountCards);

    return `
        <section class="board-game">
            ${$htmlContent}
        </section>
    `;
};

export default BoardGame;