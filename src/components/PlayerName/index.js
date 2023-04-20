import "./style.css"

const PlayerName = (player) => {
    return`
        <section class="player-name">
            <p class="name">${player}</p>
        </section>
    `;
};

export default PlayerName;