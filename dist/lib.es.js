export { default as PageMain } from '.components/pages/PageMain/PageMain';
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

var BodyCopy = function BodyCopy(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "children"]);

  var classes = classnames("body-copy", className);
  return React.createElement("p", null, "Test");
};

BodyCopy.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.node), PropTypes.objectOf(PropTypes.node)]).isRequired
};

var PageBanner = function PageBanner(_ref) {
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
    className: "grid-x grid-margin-x u-header-offset"
  }, React.createElement("div", {
    className: "cell screen0-10 screen768-9 screen768-offset-1 screen1000-10 screen1400-7 screen1400-offset-2"
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

PageBanner.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.node), PropTypes.objectOf(PropTypes.node)]).isRequired
};

var PageBanner$1 = function PageBanner(_ref) {
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
  return React.createElement("p", null, "Test 2");
};

PageBanner$1.propTypes = {
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
    className: "cell screen0-10 screen768-10 screen768-offset-1 screen1000-8 screen1000-offset-2"
  }, React.createElement("div", {
    className: "l-content-container-normal t-copy-large"
  }, content))));
};

Teaser.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.node), PropTypes.objectOf(PropTypes.node)]).isRequired
};

export { BodyCopy, PageBanner as HomeBanner, PageBanner$1 as PageBanner, Teaser };
//# sourceMappingURL=lib.es.js.map
