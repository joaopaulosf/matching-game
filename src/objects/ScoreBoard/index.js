import "./style.css"
import PlayerName from "../../components/PlayerName"
import PlayerVersus from "../../components/PlayerVersus"

const ScoreBoard = () => {
    return `
        <header class="score-board">
            ${PlayerName("P01")}
            ${PlayerVersus()}
            ${PlayerName("P02")}
        </header>
    `
}

export default ScoreBoard