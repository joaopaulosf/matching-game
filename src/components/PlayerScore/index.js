import "./style.css"

const PlayerScore = (points = 0) => {
    return `
        <ol data-points="${points}" class="player-score">
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ol>
    `
};

export default PlayerScore;