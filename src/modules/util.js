// Return a random number from 0 to max
export function randomNum(max) {
  return Math.floor(Math.random() * max);
}

// Window speech synthesis
// `text` argument is the spoken string
export function speakText(text) {
  if ("speechSynthesis" in window) {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
}
