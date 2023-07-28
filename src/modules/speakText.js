// speakText.js
export default function speakText(text, index) {
  const speakThis = new SpeechSynthesisUtterance(text);

  if (synth.voice != undefined) synth.speak(speakThis);

  console.log('from inside speakText');
}

function getVoices(synth) {
  return synth.getVoices();
}
