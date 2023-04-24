import "./style.css"
import PlayerName from "../../components/PlayerName"
import PlayerVersus from "../../components/PlayerVersus"
import PlayerScore from "../../components/PlayerScore"

const ScoreBoard = () => {
    return `
        <header class="score-board">
            ${PlayerName("Player 1")}
            ${PlayerScore(2)}
            ${PlayerVersus()}
            ${PlayerScore(1)}
            ${PlayerName("Player 2")}
        </header>
    `
}

export default ScoreBoard