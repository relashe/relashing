import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

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

var Header = function Header(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "children"]);

  var classes = classnames("header", className);
  return React.createElement("header", _extends({
    className: classes
  }, props), React.createElement("div", {
    className: "header__inner"
  }, React.createElement("a", {
    id: "site-logo",
    href: "/",
    className: "header-logo",
    title: "Mountain Partners Home Link"
  }), React.createElement("div", {
    className: "header__controls"
  }, React.createElement("span", {
    id: "site-nav-button",
    className: "header-nav-button",
    role: "button",
    "aria-pressed": "false",
    tabindex: "0"
  }, React.createElement("span", {
    className: "header-nav-button__title a-hide",
    "data-open": "Close",
    "data-closed": "Menu"
  }, "Menu")))));
};

var PageMain = function PageMain(_ref) {
  var children = _ref.children;
  return React.createElement("main", {
    "class": "page-main",
    id: "main-content"
  }, React.createElement(Header, null), React.createElement("div", {
    "class": "page-content",
    "aria-disabled": "false"
  }, children));
};

PageMain.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
};

var BodyCopy = function BodyCopy(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "children"]);

  var classes = classnames("body-copy", className);
  return React.createElement("div", _extends({
    className: classes
  }, props), children);
};

BodyCopy.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.node), PropTypes.objectOf(PropTypes.node)]).isRequired
};

var HomeBanner = function HomeBanner(_ref) {
  var title = _ref.title,
      intro = _ref.intro,
      className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["title", "intro", "className", "children"]);

  var classes = classnames("grid-container fluid u-spacing-banner", className);
  var descriptionClasses = classnames("l-content-container-small", {
    'u-spacing-heading-top': !!title
  });
  return React.createElement("section", _extends({
    className: classes
  }, props), React.createElement("div", {
    className: "grid-x grid-margin-x"
  }, React.createElement("div", {
    className: "cell screen0-10 screen768-9 screen768-offset-1 screen1000-10 screen1400-7"
  }, React.createElement("div", {
    className: "l-content-container-normal"
  }, title && React.createElement("h1", {
    className: "t-heading-1 t-font-heading"
  }, title), intro && React.createElement("div", {
    className: descriptionClasses
  }, intro && React.createElement("p", {
    className: "t-copy-large"
  }, intro)), children))));
};

HomeBanner.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.node), PropTypes.objectOf(PropTypes.node)]).isRequired
};

var PageBanner = function PageBanner(_ref) {
  var title = _ref.title,
      intro = _ref.intro,
      content = _ref.content,
      className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["title", "intro", "content", "className", "children"]);

  var classes = classnames("grid-container fluid u-header-offset u-spacing-container-margin-bottom", className);
  var descriptionClasses = classnames("l-content-container-small", {
    'u-spacing-heading-top': !!title
  });
  return React.createElement("section", _extends({
    className: classes
  }, props), React.createElement("div", {
    className: "grid-x grid-margin-x u-spacing-container-margin-top"
  }, React.createElement("div", {
    className: "cell screen0-10 screen768-8 screen768-offset-1 screen1000-6 screen1000-offset-2"
  }, React.createElement("div", {
    className: "l-content-container-medium"
  }, title && React.createElement("h1", {
    className: "t-heading-2 t-font-heading"
  }, title), (intro || content) && React.createElement("div", {
    className: descriptionClasses
  }, intro && React.createElement("p", {
    className: "t-title-2"
  }, intro), React.createElement("div", {
    className: "body-copy u-spacing-base-top"
  }, content)), children))));
};

PageBanner.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string,
  content: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.node), PropTypes.objectOf(PropTypes.node)]).isRequired
};

var Teaser = function Teaser(_ref) {
  var content = _ref.content,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["content", "className"]);

  var classes = classnames("teaser grid-container fluid u-spacing-container-margin", className);
  return React.createElement("section", _extends({
    className: classes
  }, props), React.createElement("div", {
    className: "grid-x "
  }, React.createElement("div", {
    className: "cell screen0-10 screen768-10 screen768-offset-1 screen1000-8"
  }, React.createElement("div", {
    className: "l-content-container-normal t-copy-large"
  }, content))));
};

Teaser.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.node), PropTypes.objectOf(PropTypes.node)]).isRequired
};

export { BodyCopy, HomeBanner, PageBanner, PageMain, Teaser };
//# sourceMappingURL=lib.es.js.map
