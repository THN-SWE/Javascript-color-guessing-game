playerChoice = getButton();
ansPosition = FindAnsPosition();
const ans_cols = genColor();
console.log(ans_cols);
function genColor() {
  const colors = [];
  for (i = 1; i <= 3; i++) {
    color = Math.ceil(Math.random() * 256);
    colors.push(color);
  }
  return colors;
}

function display_Hint() {
  let cols = ans_cols.toString().split(",").join(" ");
  const temp_cols = genColor();

  // console.log(cols);

  rggb = document.getElementById("RGB").innerHTML = "RGB: " + cols;
  red = document.getElementById("red").style.backgroundColor =
    "rgb(" + [ans_cols[0], 0, 0].join() + ")";
  green = document.getElementById("green").style.backgroundColor =
    "rgb(" + [0, ans_cols[1], 0].join() + ")";
  blue = document.getElementById("blue").style.backgroundColor =
    "rgb(" + [0, 0, ans_cols[2]].join() + ")";
}

function FindAnsPosition() {
  // storing all possible positions in the board
  const positions = [
    "col1",
    "col2",
    "col3",
    "col4",
    "col5",
    "col6",
    "col7",
    "col8",
    "col9",
  ];
  // getting a random position for the answer
  ansPositionID = positions[Math.floor(Math.random() * 9)];

  //   ansPosition = document.getElementById(ansPositionID);
  return ansPositionID;
}

function randomHexColor() {
  let [r, g, b] = randomRgbColor();
  let hr = r.toString(16).padStart(2, "0");
  let hg = g.toString(16).padStart(2, "0");
  let hb = b.toString(16).padStart(2, "0");
  return "#" + hr + hg + hb;
}
function randomInteger(max) {
  return Math.floor(Math.random() * (max + 1));
}

function randomRgbColor() {
  let r = randomInteger(255);
  let g = randomInteger(255);
  let b = randomInteger(255);
  return [r, g, b];
}

function createBoard() {
  const temp_cols = genColor();

  const positions = [
    "col1",
    "col2",
    "col3",
    "col4",
    "col5",
    "col6",
    "col7",
    "col8",
    "col9",
  ];
  // consfused in this line of code .............[copied from stackoverflow ]
  const notAnsPositionsIDs = [...positions].filter(function (letter) {
    return letter !== ansPosition;
  });
  console.log(notAnsPositionsIDs);

  document.getElementById(ansPosition).style.backgroundColor =
    "rgb(" + [ans_cols[0], ans_cols[1], ans_cols[2]].join() + ")";


    
  for (i = 0; i <= 7; i++) {
    notAnsPosition = document.getElementById(
      notAnsPositionsIDs[i]
    ).style.backgroundColor = randomHexColor();
  }

  //giving colors
}

function getButton(choosedID) {
 
  return choosedID;
}

function checkWin() {
  if (getButton() === ansPosition) {
    console.log("you win");
    return true
  }
//   console.log(ansPosition);
//   console.log(playerChoice);
}

display_Hint();
createBoard();
 
