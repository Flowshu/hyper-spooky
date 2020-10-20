'use strict';

const backgroundColor = '#070713';
const foregroundColor = '#FFA42E';
const borderColor = '#121234';
const cursorColor = '#FFA42E';

const black = "#333333";
const red = "#FF1D00"; 
const green = "#00FF80"; 
const yellow = "#FFA800";
const blue = "#0066FF";
const magenta = "#A900FF";
const cyan = "#0DEAFF";
const white = "#FFFFFF";
const lightBlack = "#555555";
const lightRed = "#FF5640";
const lightGreen = "#4DFFA6";
const lightYellow = "#FFBF40";
const lightBlue = "#408CFF";
const lightMagenta = "#BF40FF";
const lightCyan = "#40EFFF";
const lightWhite = "#E6E8FF";

const colors = {
  black: black,
  red: red,
  green: green,
  yellow: yellow,
  blue: blue,
  magenta: magenta,
  cyan: cyan,
  white: white,
  lightBlack: lightBlack,
  lightRed: lightRed,
  lightGreen: lightGreen,
  lightYellow: lightYellow,
  lightBlue: lightBlue,
  lightMagenta: lightMagenta,
  lightCyan: lightCyan,
  lightWhite: lightWhite,
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
