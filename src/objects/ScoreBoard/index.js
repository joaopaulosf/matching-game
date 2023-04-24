import "./style.css"
import PlayerName from "../../components/PlayerName"
import PlayerVersus from "../../components/PlayerVersus"
import PlayerScore from "../../components/PlayerScore"
import ArrowDown from "../../components/ArrowDown"

const ScoreBoard = () => {
    return `
        <header class="score-board">
            ${ArrowDown()}
            <section class="player-one">
                ${PlayerName("Player 1")}
                ${PlayerScore(2)}
            </section>
            ${PlayerVersus()}
            <section class="player-two">
                ${PlayerName("Player 2")}
                ${PlayerScore(2)}
            </section>
        </header>
    `
}

export default ScoreBoard