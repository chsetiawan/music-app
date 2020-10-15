const S3_DRUM_SOUND_URL =
  "https://music-react-app.s3-us-west-1.amazonaws.com/sounds/drums/";

const DRUM_PARTS_DATA = [
  {
    name: "Crash-1",
    sound: `${S3_DRUM_SOUND_URL}80s-CRASH1.mp3`,
    num: 0,
    keyCode: [89],
  },
  {
    name: "Crash-2",
    sound:
      "https://music-react-app.s3-us-west-1.amazonaws.com/sounds/drums/80s-CRASH2.mp3",
    num: 1,
    keyCode: [85],
  },
  {
    name: "Crash-3",
    sound:
      "https://music-react-app.s3-us-west-1.amazonaws.com/sounds/drums/80s-CRASH3.mp3",
    num: 2,
    keyCode: [73],
  },
  {
    name: "Hi-hat-open",
    sound:
      "https://music-react-app.s3-us-west-1.amazonaws.com/sounds/drums/80s-HHOPEN2.mp3",
    num: 3,
    keyCode: [84],
  },
  {
    name: "Hi-Hat-closed",
    sound:
      "https://music-react-app.s3-us-west-1.amazonaws.com/sounds/drums/80s-HHCLOSE1.mp3",
    num: 4,
    keyCode: [82],
  },
  {
    name: "Kick-Drum",
    sound:
      "https://music-react-app.s3-us-west-1.amazonaws.com/sounds/drums/80s-Bdrum1.mp3",
    num: 5,
    keyCode: [83],
  },
  {
    name: "Tom-1",
    sound:
      "https://music-react-app.s3-us-west-1.amazonaws.com/sounds/drums/80s-TOM1.mp3",
    num: 6,
    keyCode: [71, 86],
  },
  {
    name: "Tom-2",
    sound:
      "https://music-react-app.s3-us-west-1.amazonaws.com/sounds/drums/80s-TOM2.mp3",
    num: 7,
    keyCode: [72, 66],
  },
  {
    name: "Tom-3",
    sound:
      "https://music-react-app.s3-us-west-1.amazonaws.com/sounds/drums/80s-TOM3.mp3",
    num: 8,
    keyCode: [74, 78],
  },
  {
    name: "Tom-4",
    sound:
      "https://music-react-app.s3-us-west-1.amazonaws.com/sounds/drums/80s-TOM5.mp3",
    num: 9,
    keyCode: [75, 77],
  },
  {
    name: "Snare",
    sound:
      "https://music-react-app.s3-us-west-1.amazonaws.com/sounds/drums/80s-SNARE1.mp3",
    num: 10,
    keyCode: [68],
  },
];

export default DRUM_PARTS_DATA;
