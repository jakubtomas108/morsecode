const { readFileSync } = require("fs");

const morseCode = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "----": "ch",
  "..": 'i',
  ".---": "j",
  "-.-": "k",
  ".-..": 'l',
  "--": 'm',
  "-.": 'n',
  "---": 'o',
  ".--.": 'p',
  "--.-": 'q',
  ".-.": 'r',
  "...": 's',
  "-": "t",
  "..-": 'u',
   "...-": 'v',
  ".--": 'w',
  "-..-": 'x',
  "-.--": "y",
  "--..": 'z',
  ".-.-.-.": '.',
  "--...": '(',
  "-.--.-": ")",
  "-.-.-.": ';',
  ".-..-.": "\""
};

const code = readFileSync(`${process.argv[2]}`, "utf8") 

if (code) {
  const translateMorseCode = (code) => {
    return code.split(" ").map(key => morseCode[key]).join("")
  }
  
  eval(translateMorseCode(code))
} else {
  console.log("Wrong file")
}

