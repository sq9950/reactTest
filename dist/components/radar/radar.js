'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp; /* yanshenshen 2017、5、9 */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 时间选择组件
var Radar = (_temp = _class = function (_Component) {
  _inherits(Radar, _Component);

  function Radar(props) {
    _classCallCheck(this, Radar);

    return _possibleConstructorReturn(this, (Radar.__proto__ || Object.getPrototypeOf(Radar)).call(this, props));
  }

  _createClass(Radar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          contentText = _props.contentText,
          width = _props.width,
          contentBg = _props.contentBg,
          contentWidth = _props.contentWidth,
          contentFontSize = _props.contentFontSize,
          contentColor = _props.contentColor,
          lineBorderColor = _props.lineBorderColor,
          shadowWidth = _props.shadowWidth,
          shadowBgColor = _props.shadowBgColor,
          ladarStartBgColor = _props.ladarStartBgColor,
          ladarEndBgColor = _props.ladarEndBgColor,
          ladarMidBgColor = _props.ladarMidBgColor;

      return _react2.default.createElement(
        'div',
        { className: 'radar-layout', style: { "width": width + 'px', "height": width + 'px' } },
        _react2.default.createElement('div', { className: 'out-line', style: { width: width * .9 + 'px', height: width * .9 + 'px' } }),
        _react2.default.createElement(
          'div',
          { className: 'radar-bd', style: { width: width * .8 + 'px', height: width * .8 + 'px' } },
          _react2.default.createElement('div', { className: 'radar-line line-01', style: { width: width * .8 + 'px', height: width * .8 + 'px', borderColor: '' + lineBorderColor, opacity: '1' } }),
          _react2.default.createElement('div', { className: 'radar-line line-02', style: { width: width * .6 + 'px', height: width * .6 + 'px', borderColor: '' + lineBorderColor, opacity: '.55' } }),
          _react2.default.createElement('div', { className: 'radar-line line-03', style: { width: width * .4 + 'px', height: width * .4 + 'px', borderColor: '' + lineBorderColor, opacity: '.4' } }),
          _react2.default.createElement(
            'div',
            { className: 'radar-content', style: { width: contentWidth + 'px', height: contentWidth + 'px', background: '' + contentBg, color: '' + contentColor, fontSize: '' + contentFontSize, lineHeight: contentWidth + 'px' } },
            contentText
          ),
          _react2.default.createElement(
            'div',
            { className: 'radar-dian-layout', style: { width: width * .8 + 'px', height: width * .8 + 'px' } },
            _react2.default.createElement('b', { className: 'radar-dian radar-dian-01' }),
            _react2.default.createElement('b', { className: 'radar-dian radar-dian-02' }),
            _react2.default.createElement('b', { className: 'radar-dian radar-dian-03' }),
            _react2.default.createElement('b', { className: 'radar-dian radar-dian-04' }),
            _react2.default.createElement('b', { className: 'radar-dian radar-dian-05' }),
            _react2.default.createElement('b', { className: 'radar-dian radar-dian-06' }),
            _react2.default.createElement('b', { className: 'radar-dian radar-dian-07' }),
            _react2.default.createElement('b', { className: 'radar-dian radar-dian-08' })
          ),
          _react2.default.createElement('div', { className: 'radar-line' }),
          _react2.default.createElement('div', { className: 'radar-shadow', style: { width: shadowWidth + 'px', height: shadowWidth + 'px', background: '' + shadowBgColor, margin: ' -' + shadowWidth / 2 + 'px 0 0 -' + shadowWidth / 2 + 'px' } }),
          _react2.default.createElement(
            'div',
            { className: 'radar-sector radar-sector-1', style: { width: width * .8 + 'px', height: width * .8 + 'px', margin: '-' + width * .4 + 'px 0 0 -' + width * .4 + 'px' } },
            _react2.default.createElement(
              'div',
              { className: 'radar-sector-bg', style: { clip: 'rect(' + width * .4 + 'px,' + width * .4 + 'px,' + width * .8 + 'px,0px)', backgroundImage: 'linear-gradient(to right, ' + ladarStartBgColor + ' 0%, ' + ladarMidBgColor + ' 20%, ' + ladarEndBgColor + ' 100%)' } },
              _react2.default.createElement('b', { className: 'radar-sector-line1', style: { background: '' + contentBg } })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'radar-sector radar-sector-2', style: { width: width * .8 + 'px', height: width * .8 + 'px', margin: '-' + width * .4 + 'px 0 0 -' + width * .4 + 'px' } },
            _react2.default.createElement(
              'div',
              { className: 'radar-sector-bg', style: { clip: 'rect(' + width * .4 + 'px,' + width * .4 + 'px,' + width * .8 + 'px,0px)', backgroundImage: 'linear-gradient(to right, ' + ladarStartBgColor + ' 0%, ' + ladarMidBgColor + ' 20%, ' + ladarEndBgColor + ' 100%)' } },
              _react2.default.createElement('b', { className: 'radar-sector-line2', style: { background: '' + contentBg } })
            )
          ),
          _react2.default.createElement('div', { className: '' })
        )
      );
    }
  }]);

  return Radar;
}(_react.Component), _class.propTypes = {
  width: _propTypes2.default.number,
  contentText: _propTypes2.default.string,
  contentBg: _propTypes2.default.string,
  contentWidth: _propTypes2.default.number,
  shadowWidth: _propTypes2.default.number,
  shadowBgColor: _propTypes2.default.string,
  contentFontSize: _propTypes2.default.string,
  contentColor: _propTypes2.default.string,
  lineBorderColor: _propTypes2.default.string,
  ladarBgColor: _propTypes2.default.string
}, _class.defaultProps = {
  width: 300, // 
  contentText: "呼叫中",
  contentBg: "#1E96FA",
  contentWidth: 60,
  shadowWidth: 100,
  shadowBgColor: "#1E96FA",
  contentFontSize: "1.2rem",
  contentColor: "#fff",
  lineBorderColor: "#cee4f7",
  ladarStartBgColor: "rgba(30, 150, 250, 0.3)",
  ladarMidBgColor: "rgba(30, 150, 250, 0.1)",
  ladarEndBgColor: "rgba(30, 150, 250, 0)"
}, _temp);


module.exports = Radar;