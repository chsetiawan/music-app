const S3_DRUM_SOUND_URL =
  "https://music-react-app.s3-us-west-1.amazonaws.com/sounds/drums/";

const DRUM_DATA = {
  drumCircleCoords: {
    name: "drum-pic",
    areas: [
      { id: 0, shape: "circle", coords: [92, 300, 60] },
      { id: 1, shape: "circle", coords: [98, 130, 60] },
      { id: 2, shape: "circle", coords: [220, 173, 50] },
      { id: 3, shape: "circle", coords: [342, 143, 60] },
      { id: 4, shape: "circle", coords: [467, 92, 60] },
      { id: 5, shape: "circle", coords: [222, 318, 60] },
      { id: 6, shape: "circle", coords: [428, 290, 60] },
      { id: 7, shape: "circle", coords: [307, 445, 60] },
      { id: 8, shape: "circle", coords: [158, 505, 60] }
    ]
  },
  drumPartsData: [
    {
      name: "Hi-hat-open",
      sound:
        `${S3_DRUM_SOUND_URL}80s-HHOPEN2.mp3`,
      num: 0,
      keyCode: [84],
    },
    {
      name: "Crash-2",
      sound:
        `${S3_DRUM_SOUND_URL}80s-CRASH2.mp3`,
      num: 1,
      keyCode: [85],
    },
    {
      name: "Tom-1",
      sound:
        `${S3_DRUM_SOUND_URL}80s-TOM1.mp3`,
      num: 2,
      keyCode: [71, 86],
    },
    {
      name: "Tom-2",
      sound:
        `${S3_DRUM_SOUND_URL}80s-TOM2.mp3`,
      num: 3,
      keyCode: [72, 66],
    },
    {
      name: "Crash-3",
      sound:
        `${S3_DRUM_SOUND_URL}80s-CRASH3.mp3`,
      num: 4,
      keyCode: [73],
    },
    {
      name: "Snare",
      sound:
        `${S3_DRUM_SOUND_URL}80s-SNARE1.mp3`,
      num: 5,
      keyCode: [68],
    },
    {
      name: "Tom-3",
      sound:
        `${S3_DRUM_SOUND_URL}80s-TOM3.mp3`,
      num: 6,
      keyCode: [74, 78],
    },
    {
      name: "Kick-Drum",
      sound:
        `${S3_DRUM_SOUND_URL}80s-Bdrum1.mp3`,
      num: 7,
      keyCode: [83],
    },
    {
      name: "Hi-Hat-closed",
      sound:
        `${S3_DRUM_SOUND_URL}80s-HHCLOSE1.mp3`,
      num: 8,
      keyCode: [82],
    },
    {
      name: "Tom-4",
      sound:
      `${S3_DRUM_SOUND_URL}80s-TOM5.mp3`,
      num: 9,
      keyCode: [75, 77],
    },
    {
      name: "Crash-1",
      sound: `${S3_DRUM_SOUND_URL}80s-CRASH1.mp3`,
      num: 10,
      keyCode: [89],
    },
  ]
};

export default DRUM_DATA;