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

var _index = require('../swipe/index');

var _index2 = _interopRequireDefault(_index);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Swipeable = _index2.default.Swipeable;
var InfiniteLoader = (_temp = _class = function (_React$Component) {
  _inherits(InfiniteLoader, _React$Component);

  function InfiniteLoader(props) {
    _classCallCheck(this, InfiniteLoader);

    var _this = _possibleConstructorReturn(this, (InfiniteLoader.__proto__ || Object.getPrototypeOf(InfiniteLoader)).call(this, props));

    _this.state = {
      isSwipeIng: true,
      degree: 120,
      isDegree: false
    };
    return _this;
  }

  _createClass(InfiniteLoader, [{
    key: 'initSetStyle',
    value: function initSetStyle(props) {
      var conMain = this.refs.conMain;
      conMain.style.WebkitTransition = "all 0.2s ease-in";
      conMain.style.WebkitTransform = 'translate(0,0)';
      this.setState({
        // isSwipeIng : true,
        swipeSucc: props.swipeSucc
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.initSetStyle(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextprops) {
      this.initSetStyle(nextprops);
    }

    // 当滑动的时候执行

  }, {
    key: 'SwipingFun',
    value: function SwipingFun(posY) {
      var onSwipingBack = this.props.onSwipingBack,
          _state = this.state,
          isSwipeIng = _state.isSwipeIng,
          degree = _state.degree;


      if (!isSwipeIng) {
        this.setState({
          isSwipeIng: true,
          swipeSucc: false
        });
      }

      if (Math.abs(posY) > degree) {
        this.setState({
          isDegree: true
        });
      }

      if (onSwipingBack) {
        onSwipingBack();
      }
    }
  }, {
    key: 'SwipingUpBack',
    value: function SwipingUpBack(e, posY) {
      var direction = this.props.direction,
          conMain = this.refs.conMain,
          listNode = _reactDom2.default.findDOMNode(conMain),
          swipeScrollTop = _reactDom2.default.findDOMNode(this.refs.SwipeNode).scrollTop,
          documentH = _reactDom2.default.findDOMNode(this.refs.SwipeNode).clientHeight;


      if (direction === "top" || documentH + swipeScrollTop < listNode.clientHeight) {
        return false;
      }

      e.preventDefault && e.preventDefault();

      conMain.style.WebkitTransition = "none";
      conMain.style.WebkitTransform = 'translate(0,-' + posY / 4 + 'px)';

      this.SwipingFun(posY);
    }
  }, {
    key: 'SwipingDownBack',
    value: function SwipingDownBack(e, posY) {
      var _props = this.props,
          onSwipingBack = _props.onSwipingBack,
          direction = _props.direction,
          conMain = this.refs.conMain,
          swipeScrollTop = _reactDom2.default.findDOMNode(this.refs.SwipeNode).scrollTop;

      if (direction !== "top" || swipeScrollTop > 0) {
        return false;
      }

      e.preventDefault && e.preventDefault();

      conMain.style.WebkitTransition = "none";
      conMain.style.WebkitTransform = 'translate(0,' + posY / 4 + 'px)';

      this.SwipingFun(posY);
    }
  }, {
    key: 'SwipedBack',
    value: function SwipedBack(e, posX, posY) {
      var _props2 = this.props,
          onSwipedBack = _props2.onSwipedBack,
          direction = _props2.direction,
          disSwipe = _props2.disSwipe,
          conMain = this.refs.conMain,
          _state2 = this.state,
          isSwipeIng = _state2.isSwipeIng,
          degree = _state2.degree,
          listNode = _reactDom2.default.findDOMNode(conMain),
          swipeScrollTop = _reactDom2.default.findDOMNode(this.refs.SwipeNode).scrollTop,
          documentH = _reactDom2.default.findDOMNode(this.refs.SwipeNode).clientHeight,
          newposY = Math.abs(posY);

      if (disSwipe || newposY < degree || direction === "top" && (swipeScrollTop > 0 || posY > 0)) {
        conMain.style.WebkitTransition = "all 0.2s ease-in";
        conMain.style.WebkitTransform = 'translate(0,0)';
        this.setState({
          isDegree: false
        });

        return false;
      }
      if (disSwipe || newposY < degree || direction === "bottom") {
        if (posY < 0 || documentH + swipeScrollTop < listNode.clientHeight || documentH + swipeScrollTop > listNode.clientHeight && listNode.clientHeight - documentH - swipeScrollTop >= 0) {
          conMain.style.WebkitTransition = "all 0.2s ease-in";
          conMain.style.WebkitTransform = 'translate(0,0)';
          return false;
        }
      }
      conMain.style.WebkitTransition = "all 0.2s ease-in";
      if (direction === "top") {
        conMain.style.WebkitTransform = 'translate(0,35px)';
      } else {
        conMain.style.WebkitTransform = 'translate(0,-35px)';
      }
      this.setState({
        isSwipeIng: false,
        swipeSucc: false,
        isDegree: false
      });

      if (onSwipedBack) {
        onSwipedBack();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          className = _props3.className,
          children = _props3.children,
          onSwipingBack = _props3.onSwipingBack,
          onSwipedBack = _props3.onSwipedBack,
          direction = _props3.direction,
          disSwipe = _props3.disSwipe,
          height = _props3.height,
          _state3 = this.state,
          isSwipeIng = _state3.isSwipeIng,
          swipeSucc = _state3.swipeSucc,
          isDegree = _state3.isDegree,
          cls = (0, _classnames2.default)(_defineProperty({
        'jimu-swipe-items': true
      }, className, className)),
          cls2 = (0, _classnames2.default)(_defineProperty({
        'jimu-pos-layout': true,
        'jimu-pos-top': direction === "top",
        'jimu-pos-bottom': direction === "bottom"
      }, className, className));

      return _react2.default.createElement(
        Swipeable,
        { ref: 'SwipeNode', style: { "height": height }, className: cls, onSwipingUp: this.SwipingUpBack.bind(this), onSwipingDown: this.SwipingDownBack.bind(this), onSwiped: this.SwipedBack.bind(this) },
        _react2.default.createElement(
          'div',
          { className: 'jimu-swipe-por' },
          _react2.default.createElement(
            'div',
            { ref: 'conMain', className: 'jimu-swipe-con' },
            children
          ),
          _react2.default.createElement(
            'div',
            { className: cls2 },
            !disSwipe ? isSwipeIng ? isDegree ? _react2.default.createElement(
              'div',
              { className: 'swipeing' },
              direction === "top" ? "松开刷新" : "加载更多"
            ) : _react2.default.createElement(
              'div',
              { className: 'swipeing' },
              direction === "top" ? "下拉刷新" : "上拉刷新"
            ) : _react2.default.createElement(
              'div',
              { className: 'swiped' },
              swipeSucc ? "加载成功" : "加载中..."
            ) : _react2.default.createElement(
              'div',
              { className: 'swipeing' },
              '\u6570\u636E\u5DF2\u662F\u6700\u65B0'
            )
          )
        )
      );
    }
  }]);

  return InfiniteLoader;
}(_react2.default.Component), _class.propTypes = {
  direction: _propTypes2.default.string,
  onSwipingBack: _propTypes2.default.func,
  onSwipedBack: _propTypes2.default.func,
  disSwipe: _propTypes2.default.bool,
  swipeSucc: _propTypes2.default.bool
}, _class.defaultProps = {
  direction: 'top',
  onSwipingBack: function onSwipingBack() {},
  onSwipedBack: function onSwipedBack() {},
  disSwipe: false,
  swipeSucc: false,
  height: "400px"
}, _temp);
exports.default = InfiniteLoader;