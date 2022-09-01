document.getElementById("playButton").addEventListener("click", play);
document
  .getElementById("choice1")
  .addEventListener("click", () => choose("choice1"));
document
  .getElementById("choice2")
  .addEventListener("click", () => choose("choice2"));
document
  .getElementById("choice3")
  .addEventListener("click", () => choose("choice3"));

let songs = [
  "Come Together",
  "Gimme Shelter",
  "Country",
  "Boys Don't Cry",
  "Folsome Prison Blues",
  "Guns of Brixton",
  "Northeast Texas Women",
  "Boxcar",
  "Lowlife",
  "The World has turned and left me here",
];
let fakeSongs = [
  "Brown Sugar",
  "Loser",
  "Yellow Submerine",
  "Lodi",
  "Stairway to Heaven",
  "Dont Worrie",
  "Ace Of Spades",
  "Act Naturally",
  "Acid Tracks",
  "Bitches Brew",
  "Black Dog",
  "Chelsea Morning",
  "City Of New Orleans",
  "Climax Rag",
  "Diety",
  "Dirty Old Town",
  "Don't Fear The Reaper",
  "Easy Living",
  "Ever Fallen In Love?",
  "Fair Play",
];

// function getChoices() {
//   let choices = [];

//   let song = songs[Math.floor(Math.random() * songs.length)];
//   let fakes = fakeSongs.sort(() => 0.5 - Math.random()).slice(0, 2);

//   choices.push(song);
//   choices.push(...fakes);

//   return choices.sort(() => 0.5 - Math.random());
// }

//const nameS = document.getElementById(songNames) = getChoices();
let song;
let audio;
let choices;
let isPlaying = false;
let score = 0;
function play() {
  if (isPlaying) return;
  isPlaying = true;
  song = songs[Math.floor(Math.random() * songs.length)];
  let fakes = fakeSongs.sort(() => 0.5 - Math.random()).slice(0, 2);
  audio = new Audio("./songs/" + song + ".mp3");
  audio.play();

  choices = [song, ...fakes].sort(() => 0.5 - Math.random());
  updateButtonsLabels();
  showChoices();
  restoreButtonsColor();
  hideImg();
}
function choose(choiceId) {
  if (!isPlaying) {
    return;
  }
  isPlaying = false;
  let choiceButton = document.getElementById(choiceId);
  let chosen = document.getElementById(choiceId).innerText;
  if (chosen === song) {
    score++;
    choiceButton.style.backgroundColor = "green";
    console.log("correct");
  } else {
    score = 0;
    choiceButton.style.backgroundColor = "red";
    console.log("incorect");
  }
  audio.pause();
  updateScore();
  showImg();
}
function restoreButtonsColor() {
  for (let i = 1; i <= 3; i++)
    document.getElementById("choice" + i).style.backgroundColor =
      "darkslategrey";
}
function updateButtonsLabels() {
  for (let i = 1; i <= 3; i++)
    document.getElementById("choice" + i).innerText = choices[i - 1];
}

function showChoices() {
  document.getElementById("choicesContainer").style.display = "flex";
}
function updateScore() {
  document.getElementById("scoreNumber").textContent = score;
}
function showImg() {
  console.log("Showing Image");
  document.body.style.backgroundImage = 'url("./photos/' + song + '.jpg")';
  document.body.style.backgroundRepeat = "no-repeat";
  // document.body.style.backgroundSize = "cover";
}
function hideImg() {
  document.body.style.background = "";
}
