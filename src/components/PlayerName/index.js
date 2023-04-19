import "./style.css"

const PlayerName = (playerOne, playerTwo) => {
    return`
        <section class="player-name">
            <p class="name">${playerOne}</p>
            <p class="name">${playerTwo}</p>
        </section>
    `;
};

export default PlayerName;