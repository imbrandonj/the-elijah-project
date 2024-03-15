import leftBlueTriangle from '@root/assets/mp3/leftBlueTriangle.mp3';
import leftGreenTriangle from '@root/assets/mp3/leftGreenTriangle.mp3';
import leftRedTriangle from '@root/assets/mp3/leftRedTriangle.mp3';
import leftBlueCircle from '@root/assets/mp3/leftBlueCircle.mp3';
import leftGreenCircle from '@root/assets/mp3/leftGreenCircle.mp3';
import leftRedCircle from '@root/assets/mp3/leftRedCircle.mp3';
import leftBlueSquare from '@root/assets/mp3/leftBlueSquare.mp3';
import leftGreenSquare from '@root/assets/mp3/leftGreenSquare.mp3';
import leftRedSquare from '@root/assets/mp3/leftRedSquare.mp3';
import rightBlueTriangle from '@root/assets/mp3/rightBlueTriangle.mp3';
import rightGreenTriangle from '@root/assets/mp3/rightGreenTriangle.mp3';
import rightRedTriangle from '@root/assets/mp3/rightRedTriangle.mp3';
import rightBlueCircle from '@root/assets/mp3/rightBlueCircle.mp3';
import rightGreenCircle from '@root/assets/mp3/rightGreenCircle.mp3';
import rightRedCircle from '@root/assets/mp3/rightRedCircle.mp3';
import rightBlueSquare from '@root/assets/mp3/rightBlueSquare.mp3';
import rightGreenSquare from '@root/assets/mp3/rightGreenSquare.mp3';
import rightRedSquare from '@root/assets/mp3/rightRedSquare.mp3';

const audioMap = {
  leftBlueTriangle: leftBlueTriangle,
  leftGreenTriangle: leftGreenTriangle,
  leftRedTriangle: leftRedTriangle,
  leftBlueCircle: leftBlueCircle,
  leftGreenCircle: leftGreenCircle,
  leftRedCircle: leftRedCircle,
  leftBlueSquare: leftBlueSquare,
  leftGreenSquare: leftGreenSquare,
  leftRedSquare: leftRedSquare,
  rightBlueTriangle: rightBlueTriangle,
  rightGreenTriangle: rightGreenTriangle,
  rightRedTriangle: rightRedTriangle,
  rightBlueCircle: rightBlueCircle,
  rightGreenCircle: rightGreenCircle,
  rightRedCircle: rightRedCircle,
  rightBlueSquare: rightBlueSquare,
  rightGreenSquare: rightGreenSquare,
  rightRedSquare: rightRedSquare,
};

// This function returns the audio needed for the component calling it (duh):
export function getAudio(audioStr) {
  return audioMap[audioStr];
}
