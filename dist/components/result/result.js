'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp; /**
                    * Created by yanshenshen on 17/10/24.
                    */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Result = (_temp = _class = function (_React$Component) {
  _inherits(Result, _React$Component);

  function Result(props) {
    _classCallCheck(this, Result);

    return _possibleConstructorReturn(this, (Result.__proto__ || Object.getPrototypeOf(Result)).call(this, props));
  }

  _createClass(Result, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          title = _props.title,
          message = _props.message,
          className = _props.className,
          iconHtml = _props.iconHtml,
          size = _props.size;

      var cls = (0, _classnames2.default)((_classNames = {
        "didi-result": true
      }, _defineProperty(_classNames, 'didi-result-size-' + size, true), _defineProperty(_classNames, className, className), _classNames));
      return _react2.default.createElement(
        'div',
        { className: cls },
        _react2.default.createElement(
          'div',
          { className: 'didi-result-aside' },
          _react2.default.createElement(
            'div',
            { className: 'didi-result-icon' },
            iconHtml
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'didi-result-article' },
          title && _react2.default.createElement(
            'div',
            { className: 'didi-result-title' },
            title
          ),
          message && _react2.default.createElement(
            'div',
            { className: 'didi-result-message' },
            message
          )
        )
      );
    }
  }]);

  return Result;
}(_react2.default.Component), _class.propTypes = {
  message: _propTypes2.default.string,
  size: _propTypes2.default.string,
  title: _propTypes2.default.string
}, _class.defaultProps = {
  title: '',
  message: false,
  iconHtml: "",
  size: "big"
}, _temp);
exports.default = Result;