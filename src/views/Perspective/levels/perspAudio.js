// voice: en-US-Neural2-D

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
import leftCat from '@root/assets/mp3/leftCat.mp3';
import leftDog from '@root/assets/mp3/leftDog.mp3';
import leftCow from '@root/assets/mp3/leftCow.mp3';
import leftPig from '@root/assets/mp3/leftPig.mp3';
import leftTurtle from '@root/assets/mp3/leftTurtle.mp3';
import leftFish from '@root/assets/mp3/leftFish.mp3';
import leftOwl from '@root/assets/mp3/leftOwl.mp3';
import leftSnake from '@root/assets/mp3/leftSnake.mp3';
import leftHorse from '@root/assets/mp3/leftHorse.mp3';
import leftTiger from '@root/assets/mp3/leftTiger.mp3';
import leftBee from '@root/assets/mp3/leftBee.mp3';
import leftSnail from '@root/assets/mp3/leftSnail.mp3';
import leftShark from '@root/assets/mp3/leftShark.mp3';
import leftGoat from '@root/assets/mp3/leftGoat.mp3';
import leftSheep from '@root/assets/mp3/leftSheep.mp3';
import rightCat from '@root/assets/mp3/rightCat.mp3';
import rightDog from '@root/assets/mp3/rightDog.mp3';
import rightCow from '@root/assets/mp3/rightCow.mp3';
import rightPig from '@root/assets/mp3/rightPig.mp3';
import rightTurtle from '@root/assets/mp3/rightTurtle.mp3';
import rightFish from '@root/assets/mp3/rightFish.mp3';
import rightOwl from '@root/assets/mp3/rightOwl.mp3';
import rightSnake from '@root/assets/mp3/rightSnake.mp3';
import rightHorse from '@root/assets/mp3/rightHorse.mp3';
import rightTiger from '@root/assets/mp3/rightTiger.mp3';
import rightBee from '@root/assets/mp3/rightBee.mp3';
import rightSnail from '@root/assets/mp3/rightSnail.mp3';
import rightShark from '@root/assets/mp3/rightShark.mp3';
import rightGoat from '@root/assets/mp3/rightGoat.mp3';
import rightSheep from '@root/assets/mp3/rightSheep.mp3';

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
  leftCat: leftCat,
  leftDog: leftDog,
  leftCow: leftCow,
  leftPig: leftPig,
  leftTurtle: leftTurtle,
  leftFish: leftFish,
  leftOwl: leftOwl,
  leftSnake: leftSnake,
  leftHorse: leftHorse,
  leftTiger: leftTiger,
  leftBee: leftBee,
  leftSnail: leftSnail,
  leftShark: leftShark,
  leftGoat: leftGoat,
  leftSheep: leftSheep,
  rightCat: rightCat,
  rightDog: rightDog,
  rightCow: rightCow,
  rightPig: rightPig,
  rightTurtle: rightTurtle,
  rightFish: rightFish,
  rightOwl: rightOwl,
  rightSnake: rightSnake,
  rightHorse: rightHorse,
  rightTiger: rightTiger,
  rightBee: rightBee,
  rightSnail: rightSnail,
  rightShark: rightShark,
  rightGoat: rightGoat,
  rightSheep: rightSheep,
};

// This function returns the audio needed for the component calling it (duh):
export function getAudio(audioStr) {
  return audioMap[audioStr];
}
