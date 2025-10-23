export const DEFAULT_APP_SETTINGS = {
  skin: "STANDARD",
  backgroundImg: "",
  title: "selecciona los items correctos",
  items: [],
  itemsNumber: 6,
  itemsType: "LETTERS",
  rounds: 1,
};

export const ITEMSTYPE = {
  LETTERS: "LETTERS",
  NUMBERS: "NUMBERS",
  SHAPES: "SHAPES",
  COLORED_SHAPES: "COLORED_SHAPES",
  COLORS: "COLORS",
  CUSTOM: "CUSTOM",
};

export const ICONS = [
  "Triangle",
  "Square",
  "Circle",
  "Rhombus",
  "Spades",
  "Hearts",
  "Clubs",
  "Diamonds",
  "Star",
  "Moon",
  "Sun",
  "Puzzle",
  "Pentagon",
  "Hexagon",
];

export const COLORS = [
  "Red",
  "Green",
  "Blue",
  "Yellow",
  "Orange",
  "Pink",
  "Cyan",
  "Purple",
  "#8B4513", //brown
  "Black",
  "Gray",
  "White",
  "Turquoise",
  "Lime",
];

export const THEMES = {
  STANDARD: "STANDARD",
  RETRO: "RETRO",
  FUTURISTIC: "FUTURISTIC",
};

export const THEME_ASSETS = {
  [THEMES.STANDARD]: {
    backgroundImg: "images/basic_bg.png",
    buttonAudio: "sounds/button.wav",
  },
  [THEMES.RETRO]: {
    backgroundImg: "images/retro_bg.png",
    torchAudio: "sounds/torch.wav",
  },
  [THEMES.FUTURISTIC]: {
    backgroundImg: "images/futuristic_bg.png",
    buttonAudio: "sounds/button.wav",
  },
};

export const ESCAPP_CLIENT_SETTINGS = {
  imagesPath: "./images/",
};
