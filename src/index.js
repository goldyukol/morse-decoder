const MORSE_TABLE = {
  " ": " ",
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  ".-.--": "10",
};

function decode(expr) {
  let dividedByTen = [];

  for (let i = 0; i < expr.length; i += 10) {
    dividedByTen.push(expr.slice(i, i + 10));
  }

  const convertByTwo = (str) => {
    return str
      .split("")
      .map((_, index) => {
        return index % 2 === 0 ? str[index] + str[index + 1] : null;
      })
      .filter((checkItem) => checkItem);
  };

  const convertedToMorse = [];

  dividedByTen
    .map((dividedItem) => convertByTwo(dividedItem.split("00").join("")))
    .forEach((item) => {
      let letter = "";

      item.forEach((itemEl, itemElIndex) => {
        if (itemEl === "10") {
          letter += ".";
        } else if (itemEl === "11") {
          letter += "-";
        } else if (item.length - 1 === itemElIndex) {
          letter += " ";
        }
      });

      convertedToMorse.push(letter);
    });

  return convertedToMorse.map((el) => MORSE_TABLE[el]).join("");
}

module.exports = {
  decode,
};
