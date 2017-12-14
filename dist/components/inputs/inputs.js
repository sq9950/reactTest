'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Inputs = (_temp = _class = function (_React$Component) {
  _inherits(Inputs, _React$Component);

  function Inputs(props) {
    _classCallCheck(this, Inputs);

    return _possibleConstructorReturn(this, (Inputs.__proto__ || Object.getPrototypeOf(Inputs)).call(this, props));
  }

  _createClass(Inputs, [{
    key: 'render',
    value: function render() {
      var _classNames, _classNames2;

      var _props = this.props,
          className = _props.className,
          inputsAlign = _props.inputsAlign,
          asideType = _props.asideType,
          asideVal = _props.asideVal,
          asideName = _props.asideName,
          asideId = _props.asideId,
          mainValue = _props.mainValue,
          mainClassName = _props.mainClassName,
          mainFocusClass = _props.mainFocusClass,
          mainBlurClass = _props.mainBlurClass,
          mainMaxlength = _props.mainMaxlength,
          mainName = _props.mainName,
          mainId = _props.mainId,
          props = _objectWithoutProperties(_props, ['className', 'inputsAlign', 'asideType', 'asideVal', 'asideName', 'asideId', 'mainValue', 'mainClassName', 'mainFocusClass', 'mainBlurClass', 'mainMaxlength', 'mainName', 'mainId']);

      var aligncls = inputsAlign === "left" ? "align-lf" : "align-rt";
      var cls = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, "name-all", true), _defineProperty(_classNames, aligncls, aligncls), _defineProperty(_classNames, className, className), _classNames));

      var clsinput = (0, _classnames2.default)((_classNames2 = {}, _defineProperty(_classNames2, "main-input", asideType != ""), _defineProperty(_classNames2, "main-input-base", asideType == ""), _classNames2));

      return _react2.default.createElement(
        'div',
        { className: cls },
        inputsAlign == "left" && _react2.default.createElement(
          'span',
          { className: 'aside-input' },
          _react2.default.createElement(_input2.default, { id: asideId, type: asideType, value: asideVal, name: asideName })
        ),
        _react2.default.createElement(
          'div',
          { className: clsinput },
          _react2.default.createElement(_input2.default, _extends({ id: mainId, name: mainName, defaultValue: mainValue, className: mainClassName, maxLength: mainMaxlength, focusClass: mainFocusClass, blurClass: mainBlurClass }, props))
        ),
        inputsAlign == "right" && _react2.default.createElement(
          'span',
          { className: 'aside-input' },
          _react2.default.createElement(_input2.default, { id: asideId, type: asideType, value: asideVal, name: asideName })
        )
      );
    }
  }]);

  return Inputs;
}(_react2.default.Component), _class.propTypes = {
  inputsAlign: _propTypes2.default.string,
  asideType: _propTypes2.default.string,
  asideVal: _propTypes2.default.string,
  asideName: _propTypes2.default.string,
  asideId: _propTypes2.default.string,
  mainValue: _propTypes2.default.string,
  mainClassName: _propTypes2.default.string,
  mainFocusClass: _propTypes2.default.string,
  mainBlurClass: _propTypes2.default.string,
  mainMaxlength: _propTypes2.default.number
}, _class.defaultProps = {
  inputsAlign: "", // 设置侧边单选框、复选框位置 （left、right）
  asideType: "", // 设置侧边input类型 （checkbox、radio）
  asideVal: "", // 侧边input value值
  asideName: "", // 侧边input name值
  asideId: "", // 侧边input id 名称
  mainValue: "", // input输入框 默认值
  mainClassName: "", // input输入框  class名称
  mainFocusClass: "focus", // input输入框 focus class名称
  mainBlurClass: "blur", // input输入框 blur class名称
  mainMaxlength: 99999 // input输入框 最大输入字符
}, _temp);
exports.default = Inputs;