document.addEventListener('DOMContentLoaded', () => {
    let mainText = document.querySelector('#main-text');
    let discordText = document.querySelector('#discord');
    let text = "";
    startUp(mainText, discordText, text);
});

async function startUp(mainText, discordText, text) {
    text = "Starting"
    updateText(mainText, text);
    for (let i = 0; i < 3; i++) {
        for (let i = 0; i < 3; i++) {
            await wait(300);
            text += ".";
            updateText(mainText, text);
        }
        await wait(500);
        text = "Starting";
        updateText(mainText, text);
    }
    text = "Booting Lost's portfolio...";
    updateText(mainText, text);
    await wait(1300);
    text = "";
    updateText(mainText, text);
    await wait(750);
    text = "... There's nothing here, yet";
    updateText(mainText, text);
    discordText.textContent = "If you would like, shoot me a DM on Discord! My username is 1lostmatter";
}

function updateText(mainText, text) {
    mainText.textContent = text;
}


function wait(amount) {
    return new Promise(resolve => setTimeout(resolve, amount));
}