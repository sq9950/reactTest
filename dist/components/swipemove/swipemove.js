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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('../swipe/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Swipeable = _index2.default.Swipeable;
var SwipeMove = (_temp = _class = function (_React$Component) {
  _inherits(SwipeMove, _React$Component);

  function SwipeMove(props) {
    _classCallCheck(this, SwipeMove);

    return _possibleConstructorReturn(this, (SwipeMove.__proto__ || Object.getPrototypeOf(SwipeMove)).call(this, props));
  }

  _createClass(SwipeMove, [{
    key: 'initSetContentStyle',
    value: function initSetContentStyle(propsData) {
      var touchContent = this.refs.touchContent,
          height = propsData.height,
          width = propsData.width,
          direction = propsData.direction,
          align = propsData.align,
          contentH = 0,
          conentW = 0,
          windowW = document.documentElement ? document.documentElement.clientWidth : document.body.clientWidth,
          windowH = document.documentElement ? document.documentElement.clientHeight : document.body.clientHeight,
          mydistance = direction === "bottom" || direction === "top" ? windowH : windowW;

      // 设置容器高度
      if (height.indexOf("px") !== -1) {
        contentH = Number(height.split("px")[0]);
      } else {
        contentH = windowH;
      }

      // 设置容器宽度
      if (width.indexOf("px") !== -1) {
        conentW = Number(width.split("px")[0]);
      } else {
        conentW = windowW;
      }

      this.setState({
        distance: mydistance, //模块高度
        postion: direction === "bottom" || direction === "top" ? windowH - contentH : windowW - conentW, // 距离顶点位置
        open: false, //是否弹层已展开
        contentHeight: contentH,
        contentWidth: conentW,
        oldPosY: 0,
        oldPosX: 0
      });

      var alignCssText = "";

      if (direction === "bottom" || direction === "top") {
        switch (align) {
          case 0:
            alignCssText = "transform:translate(-50%,0);-webkit-transform:translate(-50%,0);left:50%;";
            break;
          case 1:
            alignCssText = "left:0;";
            break;
          case 2:
            alignCssText = "right:0;";
            break;
          default:
            alignCssText = "";
            break;
        }
      }

      if (direction === "left" || direction === "right") {
        switch (align) {
          case 0:
            alignCssText = "transform:translate(0,-50%);-webkit-transform:translate(0,-50%);top:50%;";
            break;
          case 1:
            alignCssText = "top:0;";
            break;
          case 2:
            alignCssText = "bottom:0;";
            break;
          default:
            alignCssText = "";
            break;
        }
      }

      touchContent.style.cssText = "width:" + conentW + "px;height:" + contentH + "px;" + alignCssText;
      // 设置内容容器样式
      if (direction === "bottom") {
        touchContent.style.top = mydistance + "px";
      }

      if (direction === "top") {
        touchContent.style.bottom = mydistance + "px";
      }

      if (direction === "left") {
        touchContent.style.right = mydistance + "px";
      }

      if (direction === "right") {
        touchContent.style.left = mydistance + "px";
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.initSetContentStyle(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextprops) {
      if (nextprops.direction != this.props.direction || nextprops.height != this.props.height || nextprops.width != this.props.width || nextprops.align != this.props.align) {
        this.initSetContentStyle(nextprops);
      }
    }
  }, {
    key: 'swipingUp',
    value: function swipingUp(e, posY) {
      var self = this,
          touchContent = this.refs.touchContent,
          touchScrollTop = _reactDom2.default.findDOMNode(this.refs.touchScroll).scrollTop,
          touchScrollHeight = _reactDom2.default.findDOMNode(this.refs.touchScroll).clientHeight,
          touchMainHeight = _reactDom2.default.findDOMNode(this.refs.touchMain).clientHeight,
          _state = this.state,
          distance = _state.distance,
          postion = _state.postion,
          open = _state.open,
          oldPosY = _state.oldPosY,
          contentHeight = _state.contentHeight,
          _props = this.props,
          degree = _props.degree,
          direction = _props.direction;


      if (touchScrollTop + touchScrollHeight < touchMainHeight && direction !== "bottom") {
        return;
      }

      if (direction === "bottom" && open || direction === "top" && !open || direction === "left" || direction === "right") {
        return;
      }

      // 阻止window窗体滚动
      e.preventDefault && e.preventDefault();

      touchContent.style.WebkitTransition = "none";
      // this.refs.touchScroll.style.overflow = "hidden"
      if (direction === "bottom") {
        var ContposY = posY > contentHeight ? contentHeight : posY;
        touchContent.style.top = distance - ContposY + "px";
      }

      if (direction === "top") {
        touchContent.style.bottom = postion + posY + "px";
      }

      setTimeout(function () {
        self.setState({
          oldPosY: posY
        });
      }, 30);
    }
  }, {
    key: 'swipingDown',
    value: function swipingDown(e, posY) {
      var self = this,
          touchContent = this.refs.touchContent,
          touchScrollTop = _reactDom2.default.findDOMNode(this.refs.touchScroll).scrollTop,
          touchScrollHeight = _reactDom2.default.findDOMNode(this.refs.touchScroll).clientHeight,
          touchMainHeight = _reactDom2.default.findDOMNode(this.refs.touchMain).clientHeight,
          _state2 = this.state,
          distance = _state2.distance,
          postion = _state2.postion,
          open = _state2.open,
          oldPosY = _state2.oldPosY,
          contentHeight = _state2.contentHeight,
          _props2 = this.props,
          degree = _props2.degree,
          direction = _props2.direction;


      if (touchScrollTop + touchScrollHeight < touchMainHeight + 5 && direction !== "bottom" && open || direction === "left" || direction === "right") {
        return;
      }

      if (touchScrollTop > 0 && direction === "bottom" && open) {
        return;
      }

      // 阻止window窗体滚动
      e.preventDefault && e.preventDefault();

      if (direction === "bottom" && !open || direction === "top" && open || direction === "left" || direction === "right") {
        return false;
      }
      touchContent.style.WebkitTransition = "none";
      // this.refs.touchScroll.style.overflow = "hidden"
      // 弹层跟随坐标
      if (direction === "bottom") {
        touchContent.style.top = postion + posY + "px";
      }

      if (direction === "top") {
        var ContposY = posY > contentHeight ? contentHeight : posY;
        touchContent.style.bottom = distance - ContposY + "px";
      }

      setTimeout(function () {
        self.setState({
          oldPosY: posY
        });
      }, 30);
    }
  }, {
    key: 'swipingLeft',
    value: function swipingLeft(e, posX) {
      var self = this,
          touchContent = this.refs.touchContent,
          _state3 = this.state,
          distance = _state3.distance,
          postion = _state3.postion,
          open = _state3.open,
          oldPosY = _state3.oldPosY,
          contentWidth = _state3.contentWidth,
          _props3 = this.props,
          degree = _props3.degree,
          direction = _props3.direction;


      if (direction === "left" && !open || direction === "right" && open || direction === "bottom" || direction === "up") {
        return false;
      }
      touchContent.style.WebkitTransition = "none";
      // 弹层跟随坐标
      if (direction === "left") {
        touchContent.style.right = postion + posX + "px";
      }

      if (direction === "right") {
        var ContposX = posX > contentWidth ? contentWidth : posX;
        touchContent.style.left = distance - ContposX + "px";
      }

      setTimeout(function () {
        self.setState({
          oldPosX: posX
        });
      }, 30);
    }
  }, {
    key: 'swipingRight',
    value: function swipingRight(e, posX) {
      var self = this,
          touchContent = this.refs.touchContent,
          _state4 = this.state,
          distance = _state4.distance,
          postion = _state4.postion,
          open = _state4.open,
          oldPosY = _state4.oldPosY,
          contentWidth = _state4.contentWidth,
          _props4 = this.props,
          degree = _props4.degree,
          direction = _props4.direction;


      if (direction === "right" && !open || direction === "left" && open || direction === "bottom" || direction === "up") {
        return false;
      }

      touchContent.style.WebkitTransition = "none";

      // 弹层跟随坐标
      if (direction === "left") {
        var ContposX = posX > contentWidth ? contentWidth : posX;
        touchContent.style.right = distance - ContposX + "px";
      }

      if (direction === "right") {
        touchContent.style.left = postion + posX + "px";
      }

      setTimeout(function () {
        self.setState({
          oldPosX: posX
        });
      }, 30);
    }

    // 设置 内容位置以及展开状态

  }, {
    key: 'setContState',
    value: function setContState(pos, open) {
      var touchContent = this.refs.touchContent,
          _props5 = this.props,
          direction = _props5.direction,
          back = _props5.back,
          _state5 = this.state,
          oldPosY = _state5.oldPosY,
          oldPosX = _state5.oldPosX,
          self = this;

      touchContent.style.WebkitTransition = "all 0.1s ease-in";

      if (direction === "bottom") {
        touchContent.style.top = pos + "px";
      } else if (direction === "top") {
        touchContent.style.bottom = pos + "px";
      } else if (direction === "left") {
        touchContent.style.right = pos + "px";
      } else {
        touchContent.style.left = pos + "px";
      }

      setTimeout(function () {
        if (direction === "bottom" || direction === "top") {
          self.setState({
            open: open,
            oldPosY: pos
          });
        } else {
          self.setState({
            open: open,
            oldPosX: pos
          });
        }
        // self.refs.touchScroll.style.overflow = "auto"
      }, 30);

      back && back({
        open: open
      });
    }
  }, {
    key: 'swiped',
    value: function swiped(e, posX, posY) {
      var touchContent = this.refs.touchContent,
          touchScrollTop = _reactDom2.default.findDOMNode(this.refs.touchScroll).scrollTop,
          touchScrollHeight = _reactDom2.default.findDOMNode(this.refs.touchScroll).clientHeight,
          touchMainHeight = _reactDom2.default.findDOMNode(this.refs.touchMain).clientHeight,
          _state6 = this.state,
          open = _state6.open,
          postion = _state6.postion,
          distance = _state6.distance,
          oldPosY = _state6.oldPosY,
          oldPosX = _state6.oldPosX,
          _props6 = this.props,
          direction = _props6.direction,
          degree = _props6.degree,
          posYabs = posY,
          posXabs = Math.abs(posX);


      if (direction === "bottom") {
        if (open) {
          // 关闭状态
          if (posYabs < oldPosY && touchScrollTop <= 0) {
            this.setContState(distance, false);
          } else {
            this.setContState(postion, true);
          }

          // if(posYabs > oldPosY){
          //   this.setContState(postion,true)
          // }
        } else {
          // 展开状态
          if (posYabs > oldPosY) {
            this.setContState(postion, true);
          } else {
            this.setContState(distance, false);
          }
        }
      }

      if (direction === "top") {
        if (open) {
          // 关闭状态
          if (posYabs > oldPosY && touchScrollTop + touchScrollHeight >= touchMainHeight) {
            this.setContState(distance, false);
          } else {
            this.setContState(postion, true);
          }
          // if(posYabs < oldPosY){
          //   this.setContState(postion,true)
          // }
        } else {
          // 展开状态
          if (posYabs < oldPosY) {
            this.setContState(postion, true);
          } else {
            this.setContState(distance, false);
          }
        }
      }

      if (direction === "left" || direction === "right") {
        if (open) {
          // 关闭状态
          if (posXabs >= oldPosX && posXabs >= degree) {
            this.setContState(distance, false);
          } else {
            this.setContState(postion, true);
          }
        } else {
          // 展开状态
          if (posXabs >= oldPosX && posXabs >= degree) {
            this.setContState(postion, true);
          } else {
            this.setContState(distance, false);
          }
        }
      }
    }
  }, {
    key: 'showEven',
    value: function showEven() {
      this._show();
    }
  }, {
    key: '_show',
    value: function _show() {
      var postion = this.state.postion;

      this.setContState(postion, true);
    }
  }, {
    key: 'hideEven',
    value: function hideEven() {
      this._hide();
    }
  }, {
    key: '_hide',
    value: function _hide() {
      var distance = this.state.distance;

      this.setContState(distance, false);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props7 = this.props,
          className = _props7.className,
          children = _props7.children,
          direction = _props7.direction,
          cls = (0, _classnames2.default)(_defineProperty({
        'jimu-swipemove': true,
        'jimu-bottom': direction === "bottom",
        'jimu-top': direction === "top",
        'jimu-left': direction === "left",
        'jimu-right': direction === "right"
      }, className, className));

      return _react2.default.createElement(
        Swipeable,
        { className: cls, onSwipingUp: this.swipingUp.bind(this), onSwipingDown: this.swipingDown.bind(this), onSwipingLeft: this.swipingLeft.bind(this), onSwipingRight: this.swipingRight.bind(this), onSwiped: this.swiped.bind(this) },
        _react2.default.createElement(
          'div',
          { className: 'touch-content', ref: 'touchContent' },
          _react2.default.createElement(
            'div',
            { className: 'touch-layout' },
            _react2.default.createElement('span', { className: 'touch-icon' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'touch-scroll', ref: 'touchScroll' },
            _react2.default.createElement(
              'div',
              { className: 'touch-main', ref: 'touchMain' },
              children
            )
          )
        )
      );
    }
  }]);

  return SwipeMove;
}(_react2.default.Component), _class.propTypes = {
  direction: _propTypes2.default.string,
  height: _propTypes2.default.string,
  width: _propTypes2.default.string,
  align: _propTypes2.default.number,
  degree: _propTypes2.default.number

}, _class.defaultProps = {
  direction: "bottom", // 滑动方向 bottom , top , left ,right
  height: "100%", // 高度  "100%" 、"300px"
  width: "100%", // 宽度  "100%" 、"300px"
  degree: 80, // 滑动展示最小值
  align: 0, // 对齐方式 0: center、middle ，1:left 、top  2: right   bottom
  back: null // 滑动后的回调函数
}, _temp);
exports.default = SwipeMove;