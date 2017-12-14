'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp; /**
                    * Created by zhaojie on 16/06/12.
                    */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRouter = require('react-router');

var _index = require('../mask/index');

var _index2 = _interopRequireDefault(_index);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toast = (_temp = _class = function (_React$Component) {
  _inherits(Toast, _React$Component);

  function Toast(props) {
    _classCallCheck(this, Toast);

    var _this = _possibleConstructorReturn(this, (Toast.__proto__ || Object.getPrototypeOf(Toast)).call(this, props));

    _this.state = _this.props;

    _this.changeToast = _this.changeToast.bind(_this);
    return _this;
  }

  _createClass(Toast, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextprops) {
      if (nextprops) {

        if (this.refs.toastContent) {
          this.refs.toastContent.style.width = "auto";
        }

        this.setState({
          toastShow: nextprops.toastShow,
          time: nextprops.time
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.changeToast();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextprops, nextstate) {
      //如果toast已经消失 则不再render
      if (nextstate.toastShow === false && this.state.toastShow === false) return false;else return true;
    }
  }, {
    key: 'setToastHide',
    value: function setToastHide() {
      this.setState({
        toastShow: false
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.timer && clearTimeout(this.timer);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.changeToast();
    }
  }, {
    key: 'changeToast',
    value: function changeToast() {
      var _state = this.state,
          time = _state.time,
          toastShow = _state.toastShow;

      if (toastShow) {
        var that = this,
            toast = that.refs.toast,
            toastHeight = toast.offsetHeight,
            toastContent = that.refs.toastContent,
            toastContentWidth = toastContent.offsetWidth,
            toastContentHeight = toastContent.offsetHeight;

        /* 多行展示判断，用到 -webkit-transform: translate(-50%, -50%)属性，css无法设置max-width控制页面宽度自适应。所以用以下js控制 */
        if (toastContentWidth >= 180 || toastContentHeight > 25) {
          that.refs.toastContent.style.width = "180px";
          that.refs.toastContent.style.whiteSpace = "normal";
        } else {
          that.refs.toastContent.style.width = "auto";
          that.refs.toastContent.style.whiteSpace = "nowrap";
        }

        that.timer = setTimeout(function () {
          that.setToastHide();
          if (that.props.link) {
            // 用户填写的link，则将当前的页面记录到浏览器的历史记录中
            _reactRouter.browserHistory.push(that.props.link);
          }

          if (that.props.virtual) {
            // 如果用户选择的是virtual,则将当前页面地址从浏览器历史记录中替换掉
            _reactRouter.browserHistory.replace(that.props.virtual);
          }

          if (that.props.callback) {
            that.props.callback();
          }
        }, time);
      }
    }
  }, {
    key: '_icon',
    value: function _icon() {
      var type = this.props.type;

      if (type === "fail") {
        return _react2.default.createElement(
          'p',
          { className: 'icon-toast_warning toast_icon' },
          _react2.default.createElement('span', { className: 'path1' }),
          _react2.default.createElement('span', { className: 'path2' })
        );
      } else if (type === "success") {
        return _react2.default.createElement(
          'p',
          { className: 'icon-toast_right toast_icon' },
          _react2.default.createElement('span', { className: 'path1' }),
          _react2.default.createElement('span', { className: 'path2' }),
          _react2.default.createElement('span', { className: 'path3' })
        );
      } else if (type === "loading") {
        return _react2.default.createElement(
          'div',
          { className: 'jimu-load-loading' },
          _react2.default.createElement(
            'div',
            { className: 'load-spinner' },
            _react2.default.createElement('div', null),
            _react2.default.createElement('div', null),
            _react2.default.createElement('div', null),
            _react2.default.createElement('div', null),
            _react2.default.createElement('div', null),
            _react2.default.createElement('div', null),
            _react2.default.createElement('div', null),
            _react2.default.createElement('div', null),
            _react2.default.createElement('div', null),
            _react2.default.createElement('div', null),
            _react2.default.createElement('div', null),
            _react2.default.createElement('div', null)
          )
        );
      } else {
        return _react2.default.createElement(
          'p',
          { className: 'icon-toast_wrong toast_icon' },
          _react2.default.createElement('span', { className: 'path1' }),
          _react2.default.createElement('span', { className: 'path2' }),
          _react2.default.createElement('span', { className: 'path3' })
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          content = _props.content,
          type = _props.type;
      var toastShow = this.state.toastShow;


      return _react2.default.createElement(
        'div',
        { className: 'jimu-dialog jimu-dialog-toast', style: { visibility: toastShow ? 'visible' : 'hidden' } },
        _react2.default.createElement(_index2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'didi_toast', ref: 'toast' },
          this._icon(),
          _react2.default.createElement(
            'div',
            { className: 'didi_toast_content', ref: 'toastContent' },
            content
          )
        )
      );
    }
  }]);

  return Toast;
}(_react2.default.Component), _class.propTypes = {
  buttons: _propTypes2.default.array,
  toastShow: _propTypes2.default.bool,
  title: _propTypes2.default.string,
  callback: _propTypes2.default.func
}, _class.defaultProps = {
  buttons: [],
  show: false,
  title: '',
  time: 3000
}, _temp);
exports.default = Toast;