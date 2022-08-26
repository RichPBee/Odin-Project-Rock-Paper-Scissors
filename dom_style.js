const addWinBar = (winner) => {
    const scoreBar = document.createElement("div");
    scoreBar.setAttribute("class", "score-bar");
    winner.append(scoreBar);
}

addWinBar(document.querySelector("div.player-wins"));
addWinBar(document.querySelector("div.player-wins"));
