'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _picker = require('../picker/picker.js');

var _picker2 = _interopRequireDefault(_picker);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pickers = (_temp = _class = function (_Component) {
  _inherits(Pickers, _Component);

  function Pickers() {
    _classCallCheck(this, Pickers);

    return _possibleConstructorReturn(this, (Pickers.__proto__ || Object.getPrototypeOf(Pickers)).call(this));
  }

  _createClass(Pickers, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // 设置默认显示参数
      this.state = _extends({
        oldValue: this.props.value
      }, this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextprops) {
      if (nextprops != this.props) {
        this.state = _extends({
          oldValue: nextprops.value
        }, nextprops);
      }
    }
  }, {
    key: 'onClickCancel',
    value: function onClickCancel() {
      this.setState({
        value: this.state.oldValue
      });
    }
  }, {
    key: 'onChange',
    value: function onChange(val, text, idx) {
      var value = this.state.value;

      value[idx] = val;
      this.setState({
        value: value
      });
      this.props.onChange && this.props.onChange(val, text, idx);
    }
  }, {
    key: 'onClickAway',
    value: function onClickAway() {
      this.props.pickerAway && this.props.pickerAway(this.state.value);
    }
  }, {
    key: 'show',
    value: function show() {
      this.refs.pickers.show();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_picker2.default, {
        ref: 'pickers',
        value: this.state.value,
        options: this.state.options,
        onChange: this.onChange.bind(this),
        onClickAway: this.onClickAway.bind(this),
        onClickCancel: this.onClickCancel.bind(this),
        open: this.state.open,
        weekText: ["", "", "", "", "", "", ""]
      });
    }
  }]);

  return Pickers;
}(_react.Component), _class.propTypes = {
  value: _propTypes2.default.array,
  options: _propTypes2.default.array
}, _class.defaultProps = {}, _temp);


module.exports = Pickers;