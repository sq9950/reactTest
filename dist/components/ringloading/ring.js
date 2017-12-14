'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp; /**
                    * Created by yanshenshen on 17/04/10.
                    */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ringloading = (_temp = _class = function (_React$Component) {
  _inherits(Ringloading, _React$Component);

  function Ringloading(props) {
    _classCallCheck(this, Ringloading);

    return _possibleConstructorReturn(this, (Ringloading.__proto__ || Object.getPrototypeOf(Ringloading)).call(this, props));
  }

  _createClass(Ringloading, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var ringWrap = this.refs.ringWrap,
          left = this.refs.left,
          leftShadow = this.refs.leftShadow,
          right = this.refs.right,
          rightShadow = this.refs.rightShadow,
          bottomRingBg = this.refs.bottomRingBg,
          progress = this.refs.progress,
          _props = this.props,
          width = _props.width,
          border = _props.border,
          borderColor = _props.borderColor,
          contentColor = _props.contentColor,
          textSize = _props.textSize,
          contentBgColor = _props.contentBgColor,
          ringTimer = _props.ringTimer,
          ballShow = _props.ballShow,
          bottomRingBgColor = _props.bottomRingBgColor,
          ballBgColor = _props.ballBgColor,
          ringWidth = width + border * 2;


      ringWrap.style.cssText = 'width:' + ringWidth + 'px;height:' + ringWidth + 'px';
      left.style.cssText = 'width:' + ringWidth / 2 + 'px;height:' + ringWidth + 'px';
      right.style.cssText = 'width:' + ringWidth / 2 + 'px;height:' + ringWidth + 'px';
      leftShadow.style.cssText = 'width:' + ringWidth / 2 + 'px;height:' + ringWidth + 'px;border-radius:' + ringWidth + 'px 0  0 ' + ringWidth + 'px;background:' + borderColor + ';-webkit-animation-duration:' + ringTimer / 1000 + 's';
      rightShadow.style.cssText = 'width:' + ringWidth / 2 + 'px;height:' + ringWidth + 'px;border-radius:0 ' + ringWidth + 'px ' + ringWidth + 'px 0;background:' + borderColor + ';-webkit-animation-duration:' + ringTimer / 1000 + 's';
      progress.style.cssText = 'width:' + width + 'px;height:' + width + 'px;line-height:' + width + 'px;color:' + contentColor + ';font-size:' + textSize + ';background-color:' + contentBgColor;
      bottomRingBg.style.cssText = 'width:' + ringWidth + 'px;height:' + ringWidth + 'px;background:' + bottomRingBgColor;

      if (ballShow) {
        this.refs.ringBallCircular.style.cssText = '-webkit-animation-duration:' + ringTimer / 1000 / 2 + 's';
        this.refs.ringBall.style.cssText = 'background:' + ballBgColor;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var ballShow = this.props.ballShow;

      return _react2.default.createElement(
        'div',
        { className: 'ring-loading', ref: 'ringWrap' },
        _react2.default.createElement('div', { className: 'bottom-ring-bg', ref: 'bottomRingBg' }),
        _react2.default.createElement(
          'div',
          { className: 'ring-left', ref: 'left' },
          _react2.default.createElement('div', { className: 'left-shadow', ref: 'leftShadow' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'ring-right', ref: 'right' },
          _react2.default.createElement('div', { className: 'right-shadow', ref: 'rightShadow' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'progress', ref: 'progress' },
          this.props.text
        ),
        ballShow && _react2.default.createElement(
          'div',
          { className: 'ring-ball-circular', ref: 'ringBallCircular' },
          _react2.default.createElement('span', { className: 'ring-ball', ref: 'ringBall' })
        )
      );
    }
  }]);

  return Ringloading;
}(_react2.default.Component), _class.propTypes = {
  text: _propTypes2.default.string,
  width: _propTypes2.default.number,
  border: _propTypes2.default.number,
  borderColor: _propTypes2.default.string,
  contentColor: _propTypes2.default.string,
  textSize: _propTypes2.default.string
}, _class.defaultProps = {
  text: "loading...", // 圈内文字展示
  width: 200, // 圆直径
  border: 2, // 边框宽度
  borderColor: "#4a4c5b", // 边框颜色
  ballBgColor: "#ff8741", // 小球颜色
  contentColor: "#4a4c5b", // 内容颜色
  contentBgColor: "#fff", // 内容背景颜色
  textSize: "14px", // 字体大小
  ballShow: false,
  bottomRingBgColor: "",
  ringTimer: 2000
}, _temp);
exports.default = Ringloading;