'use strict';

const backgroundColor = '#070713';
const foregroundColor = '#FFA42E';
const borderColor = '#121234';
const cursorColor = '#FFA42E';

// blue and cyan swapped
const black = "#333333";
const red = "#FF1430"; 
const green = "#2EFF5B"; 
const yellow = "#FFCA49";
const blue = "#4DFFC1";
const magenta = "#F314FF";
const cyan = "#4763FF";
const white = "#FFFFFF";

const colors = {
  black: black,
  red: red,
  green: green,
  yellow: yellow,
  blue: blue,
  magenta: magenta,
  cyan: cyan,
  white: white,
  lightBlack: black,
  lightRed: red,
  lightGreen: green,
  lightYellow: yellow,
  lightBlue: blue,
  lightMagenta: magenta,
  lightCyan: cyan,
  lightWhite: white,
};

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
    `,
    css: `
      ${config.css || ''}
      .tabs_list .tab_tab.tab_active .tab_text  {
        background: ${backgroundColor};
      }
      .tab_active:before {
        border-color: ${borderColor};
      }
    `,
  });
};
