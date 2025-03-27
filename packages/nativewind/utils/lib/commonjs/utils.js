"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractDataClassName = extractDataClassName;
exports.parseDataAttribute = parseDataAttribute;
exports.stringToBoolean = stringToBoolean;
var _cn = require("./cn");
function parseDataAttribute(inputString) {
  const regex = /^data-\[(\w+)=(\w+)\]:(.+)$/;
  const match = inputString.match(regex);
  if (match) {
    return {
      state: match[1],
      value: match[2],
      className: match[3]
    };
  } else {
    return {
      state: null,
      value: null,
      className: null
    };
  }
}
function stringToBoolean(str) {
  if (str === 'true') return true;else return false;
}
const resolveDataAttribute = (className, states) => {
  if (className.includes('data-')) {
    // parse data- attribute
    const {
      state,
      value,
      className: stateClassName
    } = parseDataAttribute(className);

    // check if state is present and value is true
    if (state && value && states[state] === stringToBoolean(value)) {
      // append state class name
      if (stateClassName.includes('data-')) {
        return resolveDataAttribute(stateClassName, states);
      }
      return stateClassName;
    }
  }
};
function extractDataClassName(className, states) {
  const classNamesArray = typeof className === 'string' ? className.split(' ') : className;
  if (classNamesArray === undefined) return;
  let classNamesFinal = '';
  classNamesArray.forEach(classNameItem => {
    // check for data- attribute
    if (classNameItem.includes('data-')) {
      // parse data- attribute
      const resolvedClassName = resolveDataAttribute(classNameItem, states);
      classNamesFinal = (0, _cn.cn)(classNamesFinal, resolvedClassName);
    } else {
      classNamesFinal += ` ${classNameItem}`;
    }
  });
  return classNamesFinal;
}
//# sourceMappingURL=utils.js.map