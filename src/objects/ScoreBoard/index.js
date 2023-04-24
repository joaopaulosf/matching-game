import "./style.css"
import PlayerName from "../../components/PlayerName"
import PlayerVersus from "../../components/PlayerVersus"
import PlayerScore from "../../components/PlayerScore"

const ScoreBoard = () => {
    return `
        <header class="score-board">
            <section class="player-one">
                ${PlayerName("Player 1")}
                ${PlayerScore(2)}
            </section>
            ${PlayerVersus()}
            <section class="player-two">
                ${PlayerName("Player 2")}
                ${PlayerScore(1)}
            </section>
        </header>
    `
}

export default ScoreBoard