const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");

const emoji = [];

async function getEmoji() {
  let reponse = await fetch(
    "https://emoji-api.com/emojis?access_key=5b384a6090acb13139bc41e666f65ddf8fdaf412"
  );

  data = await reponse.json();

  for (let i = 0; i < 1500; i++) {
    emoji.push({
      emojiName: data[i].character,
      emojiCode: data[i].unicodeName,
    });
  }
}

getEmoji();

btnEl.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * emoji.length);
  btnEl.innerText = emoji[randomNum].emojiName;
  emojiNameEl.innerHTML = emoji[randomNum].emojiCode;
});
