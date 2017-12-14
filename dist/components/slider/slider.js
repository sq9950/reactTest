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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slider = (_temp = _class = function (_React$Component) {
  _inherits(Slider, _React$Component);

  function Slider(props) {
    _classCallCheck(this, Slider);

    var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

    _this.state = {
      maxWidth: document.body.offsetWidth,
      everyWidth: 10
    };
    return _this;
  }

  _createClass(Slider, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.initDraw(this.props);
    }
  }, {
    key: 'initDraw',
    value: function initDraw(props) {
      var wrapLay = this.refs.wrapLay,
          max = props.max,
          min = props.min,
          defaultValue = props.defaultValue,
          disabled = props.disabled,
          isShading = props.isShading,
          colorGroup = props.colorGroup,
          totle = max - min,
          everyWidth = Number(wrapLay.clientWidth) / totle,
          sliderBnt = this.refs.sliderBnt,
          lineLight = this.refs.lineLight,
          startBgColor = colorGroup[0],
          endBgColor = colorGroup[colorGroup.length - 1],
          reg = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/;


      if (!reg.test(startBgColor) || !reg.test(endBgColor)) {
        console.error("颜色格式错误");
        return false;
      }

      // 设置 开始和结束的 r g b 颜色的值

      var startR = void 0,
          startG = void 0,
          startB = void 0,
          endR = void 0,
          endG = void 0,
          endB = void 0;

      if (startBgColor.length === 4) {
        startR = parseInt(startBgColor.substring(1, 2) + startBgColor.substring(1, 2), 16);
        startG = parseInt(startBgColor.substring(2, 3) + startBgColor.substring(2, 3), 16);
        startB = parseInt(startBgColor.substring(3, 4) + startBgColor.substring(3, 4), 16);
      } else {
        startR = parseInt(startBgColor.substring(1, 3), 16);
        startG = parseInt(startBgColor.substring(3, 5), 16);
        startB = parseInt(startBgColor.substring(5, 7), 16);
      }

      if (endBgColor.length === 4) {
        endR = parseInt(endBgColor.substring(1, 2) + endBgColor.substring(1, 2), 16);
        endG = parseInt(endBgColor.substring(2, 3) + endBgColor.substring(2, 3), 16);
        endB = parseInt(endBgColor.substring(3, 4) + endBgColor.substring(3, 4), 16);
      } else {
        endR = parseInt(endBgColor.substring(1, 3), 16);
        endG = parseInt(endBgColor.substring(3, 5), 16);
        endB = parseInt(endBgColor.substring(5, 7), 16);
      }

      var stageR = endR - startR,
          stageG = endG - startG,
          stageB = endB - startB;

      this.setState({
        maxWidth: wrapLay.clientWidth,
        everyWidth: everyWidth,
        offsetLeft: wrapLay.offsetLeft,
        startR: startR,
        startG: startG,
        startB: startB,
        endR: endR,
        endG: endG,
        endB: endB,
        stageR: stageR,
        stageG: stageG,
        stageB: stageB
      });

      // 设置初始位置
      sliderBnt.style.left = (defaultValue - min) * everyWidth + 'px';
      lineLight.style.width = (defaultValue - min) * everyWidth + 'px';

      // 设置初始颜色
      if (!disabled && isShading) {
        var nowR = parseInt(startR + stageR * defaultValue / totle),
            nowG = parseInt(startG + stageG * defaultValue / totle),
            nowB = parseInt(startB + stageB * defaultValue / totle);
        lineLight.style.backgroundColor = 'rgb(' + nowR + ', ' + nowG + ', ' + nowB + ')';
      }

      // 设置阶段颜色值
      if (!disabled && !isShading) {
        lineLight.style.backgroundColor = colorGroup[this.stepBgColor(defaultValue)];
      }
    }
  }, {
    key: 'stepBgColor',
    value: function stepBgColor(step) {
      var _props = this.props,
          colorStageGroup = _props.colorStageGroup,
          colorGroup = _props.colorGroup,
          lineLight = this.refs.lineLight,
          len = colorStageGroup.length;


      for (var i = 0; i < len; i++) {

        if (len == 0) {
          if (colorStageGroup[i] >= step) {
            return 0;
          } else {
            return 1;
          }
        }

        if (i == len - 1) {
          if (colorStageGroup[i] >= step) {
            return i;
          } else {
            return i + 1;
          }
        }

        if (colorStageGroup[i] <= step && colorStageGroup[i + 1] > step) {
          return i;
        }
      }
    }
  }, {
    key: 'eventMove',
    value: function eventMove(e) {
      if (this.props.disabled) {
        return false;
      }
      // 阻止window窗体滚动
      e.preventDefault && e.preventDefault();
      e.stopPropagation && e.stopPropagation();
      this.move(e);
    }
  }, {
    key: 'move',
    value: function move(e) {
      var self = this,
          _props2 = this.props,
          isShading = _props2.isShading,
          colorGroup = _props2.colorGroup,
          min = _props2.min,
          onChangeBack = _props2.onChangeBack,
          sliderBnt = this.refs.sliderBnt,
          wrapLay = this.refs.wrapLay,
          lineLight = this.refs.lineLight,
          _state = this.state,
          everyWidth = _state.everyWidth,
          offsetLeft = _state.offsetLeft,
          pageX = e.touches[0].pageX - offsetLeft;


      pageX = pageX < 0 ? 0 : pageX;
      pageX = pageX > this.state.maxWidth ? this.state.maxWidth : pageX;

      var onvalue = pageX < 50 ? Math.floor(pageX / everyWidth) + min : Math.ceil(pageX / everyWidth) + min;
      sliderBnt.style.left = pageX + 'px';
      lineLight.style.width = pageX + 'px';
      if (onChangeBack) {
        onChangeBack({
          value: onvalue
        });
      }
      if (isShading) {
        var newColor = self.setBgColor(pageX / this.state.maxWidth);
        lineLight.style.backgroundColor = 'rgb(' + newColor.r + ', ' + newColor.g + ', ' + newColor.b + ')';
      }
      // 设置阶段颜色值
      if (!isShading) {
        lineLight.style.backgroundColor = colorGroup[this.stepBgColor(onvalue)];
      }
    }
  }, {
    key: 'eventMoveStart',
    value: function eventMoveStart(e) {
      if (this.props.disabled) {
        return false;
      }
      // 阻止window窗体滚动
      e.preventDefault && e.preventDefault();
      e.stopPropagation && e.stopPropagation();
      this.move(e);
    }
  }, {
    key: 'setBgColor',
    value: function setBgColor(stage) {
      var _state2 = this.state,
          startR = _state2.startR,
          startG = _state2.startG,
          startB = _state2.startB,
          endR = _state2.endR,
          endG = _state2.endG,
          endB = _state2.endB,
          stageR = _state2.stageR,
          stageG = _state2.stageG,
          stageB = _state2.stageB,
          nowR = parseInt(startR + stageR * stage),
          nowG = parseInt(startG + stageG * stage),
          nowB = parseInt(startB + stageB * stage);


      return {
        r: nowR,
        g: nowG,
        b: nowB
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          disabled = _props3.disabled,
          title = _props3.title,
          className = _props3.className,
          cls = (0, _classnames2.default)(_defineProperty({
        'jimu-slider': true,
        'jimu-disabled': disabled
      }, className, className));


      return _react2.default.createElement(
        'div',
        { className: cls, ref: 'wrapLay' },
        this.props.children && _react2.default.createElement(
          'div',
          { className: 'brd' },
          this.props.children
        ),
        _react2.default.createElement(
          'div',
          { className: 'line-layout', onTouchMove: this.eventMove.bind(this), onTouchStart: this.eventMoveStart.bind(this) },
          _react2.default.createElement('div', { className: 'line-bg' }),
          _react2.default.createElement('div', { className: 'line-light', ref: 'lineLight' }),
          _react2.default.createElement('div', { className: 'slider-bnt', ref: 'sliderBnt' })
        )
      );
    }
  }]);

  return Slider;
}(_react2.default.Component), _class.propTypes = {
  max: _propTypes2.default.number,
  min: _propTypes2.default.number,
  defaultValue: _propTypes2.default.number,
  onChangeBack: _propTypes2.default.func
}, _class.defaultProps = {
  min: 0, // 最小值
  max: 10, // 最大值
  defaultValue: 0, // 设置初始取值
  disabled: false, // 值为 true 时，滑块为禁用状态
  onChangeBack: function onChangeBack() {}, // 会触发 onChange 事件，并把改变后的值作为参数传入
  colorStageGroup: [4], // 颜色阶级显示分介数值
  isShading: false, // 颜色是否缓动
  colorGroup: ["#108ee9", "#108ee9"] // 颜色阶级显示分介颜色值（数量要比colorStageGroup多一个）
}, _temp);
exports.default = Slider;