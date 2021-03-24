// global constants

const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const timeavailable=100;
//Global Variables
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var timeleft =20;
var x;
var mistakemax =3;
var mistakes;

function startGame() {
  //initialize game variables
  timeleft =20;
  progress = 0;
  gamePlaying = true;
  mistakes =0;
  setRandom()
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  clearInterval();
  gamePlaying = false;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 500,
  6: 550
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

function playsound(btn)
{
  var temp="";
  temp = "pic" + btn;
  document.getElementById('myAudio').play();
  document.getElementById(temp).style.display = "inline-block";
}

function stopimage(btn)
{
  var temp="";
  temp = "pic" + btn;
  document.getElementById(temp).style.display = "none";
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  clearInterval(x);
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  clueHoldTime=1000-(progress*50)
  setTimeout(starttimer,delay);
}


function loseGame() {
  clearInterval(x);
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("You Win!");
}

function guess(btn) {
  //console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
    
  }

  timeleft=20;
  if (btn == pattern[guessCounter]) {
    if (guessCounter == progress) {
      progress++;
      playClueSequence();
      if (progress == pattern.length) 
      winGame();
    }
    else {
            guessCounter++;
            console.log("this is progress:" + progress);
            console.log("this is guesscounter:" + guessCounter);
      }

  } else 
    {
      mistakes++;
      document.getElementById("mistakecount").innerHTML = "Mistakes: " + mistakes;
      if(mistakes>=3)
      {
        loseGame();
      }

    }
}


function setRandom(){
  for(var i=0;i<pattern.length;i++)
    {
      pattern[i]=Math.floor((Math.random() * 6)+1);
      console.log(pattern[i])
    }
}


function starttimer(){
    x = setInterval(function() {
    timeleft-=1;
      if(timeleft <= 0)
        {
          loseGame();
          clearInterval(x);
          document.getElementById("Timer").innerHTML = "Out of time";
          return;
        }

  document.getElementById("Timer").innerHTML = ""+timeleft
  },500);
}
