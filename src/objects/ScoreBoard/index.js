import "./style.css"
import PlayerName from "../../components/PlayerName"

const ScoreBoard = () => {
    return `
        <header class="score-board">
            ${PlayerName("P01")}
            ${PlayerName("P02")}
        </header>
    `
}

export default ScoreBoard