import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Parser from 'html-react-parser';

var PageMain = function PageMain(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("main", {
    className: "page-main",
    id: "main-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-content",
    "aria-disabled": "false"
  }, children));
};

PageMain.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
};

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var BodyCopy = function BodyCopy(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "children"]);

  var classes = classnames("body-copy", className);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, props), children);
};

BodyCopy.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.node), PropTypes.objectOf(PropTypes.node)]).isRequired
};

var HomeBanner = function HomeBanner(_ref) {
  var title = _ref.title,
      titleLines = _ref.titleLines,
      intro = _ref.intro,
      className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["title", "titleLines", "intro", "className", "children"]);

  var classes = classnames("grid-container fluid u-spacing-banner", className);
  var descriptionClasses = classnames("l-content-container-small", {
    "u-spacing-heading-top": !!title
  });

  var _useState = useState(titleLines ? titleLines[0] : ""),
      _useState2 = _slicedToArray(_useState, 2),
      titleLine = _useState2[0],
      setTitleLine = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      lastTitleLine = _useState4[0],
      setLastTitleLine = _useState4[1];

  useEffect(function () {
    if (!titleLines) {
      return;
    }

    var messageInterval = setInterval(function () {
      var lineIndex = Math.floor(Math.random() * (titleLines.length - 0)) + 0; // make sure it is not the same line as before

      if (lineIndex === lastTitleLine) {
        lineIndex = (lastIndex + 1) % titleLines.length;
      }

      setLastTitleLine(lineIndex);
      setTitleLine(titleLines[lineIndex]);
    }, 9000);
    return function () {
      clearInterval(messageInterval);
    };
  }, []);
  return /*#__PURE__*/React.createElement("section", _extends({
    className: classes
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "grid-x grid-margin-x u-header-offset"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cell screen0-10 screen768-9 screen768-offset-1 screen1000-10 screen1400-7 screen1400-offset-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-content-container-normal"
  }, title && /*#__PURE__*/React.createElement("h1", {
    className: "t-heading-1 t-font-heading"
  }, title, " ", /*#__PURE__*/React.createElement("span", {
    className: "home-banner-message"
  }, titleLine)), intro && /*#__PURE__*/React.createElement("div", {
    className: descriptionClasses
  }, intro && /*#__PURE__*/React.createElement("p", {
    className: "t-copy"
  }, intro)), children))));
};

HomeBanner.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.node), PropTypes.objectOf(PropTypes.node)])
};

var PageBanner = function PageBanner(_ref) {
  var title = _ref.title,
      intro = _ref.intro,
      content = _ref.content,
      className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["title", "intro", "content", "className", "children"]);

  var classes = classnames("grid-container fluid u-header-offset u-spacing-container-bottom", className);
  var descriptionClasses = classnames("l-content-container-small", {
    "u-spacing-heading-top": !!title
  });
  return /*#__PURE__*/React.createElement("section", _extends({
    className: classes
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "grid-x grid-margin-x u-spacing-container-margin-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cell screen0-10 screen768-8 screen768-offset-1 screen1000-6 screen1000-offset-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-content-container-medium"
  }, title && /*#__PURE__*/React.createElement("h1", {
    className: "t-heading-2 t-font-heading"
  }, title), (intro || content) && /*#__PURE__*/React.createElement("div", {
    className: descriptionClasses
  }, intro && /*#__PURE__*/React.createElement("p", {
    className: "t-title-2"
  }, intro), /*#__PURE__*/React.createElement("div", {
    className: "body-copy u-spacing-base-top"
  }, content && Parser(content))), children))));
};

PageBanner.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string,
  content: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.node), PropTypes.objectOf(PropTypes.node)])
};

var Teaser = function Teaser(_ref) {
  var content = _ref.content,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["content", "className"]);

  var classes = classnames("teaser grid-container fluid u-spacing-container", className);
  return /*#__PURE__*/React.createElement("section", _extends({
    className: classes
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "grid-x "
  }, /*#__PURE__*/React.createElement("div", {
    className: "cell screen0-10 screen768-10 screen768-offset-1 screen1000-8 screen1000-offset-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l-content-container-normal t-copy-large"
  }, content && Parser(content)))));
};

Teaser.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.node), PropTypes.objectOf(PropTypes.node)])
};

export { BodyCopy, HomeBanner, PageBanner, PageMain, Teaser };
//# sourceMappingURL=lib.es.js.map
