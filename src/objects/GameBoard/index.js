import "./style.css"
import CardFrontBack from "../../components/CardFrontBack";
import cards from "./data";


const BoardGame = () => {
    const hideCards = ($cardsActive) => {
        $cardsActive.forEach((card) => card.classList.remove("-active"))
    }

    const playerSwap = () => {
        const $arrowDown = document.querySelector(".arrow-down")
        const currentPlayer = $arrowDown.getAttribute("data-currentplayer")

        $arrowDown.setAttribute("data-currentplayer", currentPlayer == 1 ? 2 : 1)
    }

    window.boardGame = {};
    window.boardGame.handleClick = () => {
        const $boardGame = document.querySelector(".board-game");
        const $cardsActive = $boardGame.querySelectorAll(".card-front-back.-active")

        if($cardsActive.length === 2) {
            setTimeout(() => {
                playerSwap()
                hideCards($cardsActive)
            }, 700);
        }
    }
    const htmlCardsList = cards.map((card)=> CardFrontBack(card.icon, card.altIcon));
    const $htmlCards = htmlCardsList.join("")

    return `
        <section class="board-game" onclick="boardGame.handleClick()">
            ${$htmlCards}
        </section>
    `;
};

export default BoardGame;