'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp; /**
                    * Created by yanshenshen on 17/04/10.
                    */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _index = require('../button/index');

var _index2 = _interopRequireDefault(_index);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = (_temp = _class = function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search(props) {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

    _this.state = {
      text: "",
      focus: false
    };
    return _this;
  }

  _createClass(Search, [{
    key: 'changeHandle',
    value: function changeHandle(e) {
      var text = e.target.value;
      if (this.props.onChangeHandle) this.props.onChangeHandle(text, e);
      this.setState({ text: text });
    }
  }, {
    key: 'cancelHandle',
    value: function cancelHandle(e) {
      this.setState({
        focus: false,
        text: ''
      });
      if (this.props.onCancelHandle) this.props.onCancelHandle(e);
    }
  }, {
    key: 'clearHandle',
    value: function clearHandle(e) {
      e.preventDefault();
      e.stopPropagation();
      this.setState({ text: '', clearing: true });
      if (this.props.onClearHandle) this.props.onClearHandle(e);
      this.refs.searchInput.focus();
    }
  }, {
    key: 'blurHandle',
    value: function blurHandle(e) {
      if (this.state.text === '') {
        this.setState({ focus: false });
      }

      this.props.onBlurHandle && this.props.onBlurHandle();
    }
  }, {
    key: 'focusHandle',
    value: function focusHandle(e) {
      this.setState({ focus: true });
      this.props.onFocusHandle && this.props.onFocusHandle();
    }
  }, {
    key: 'submitHandle',
    value: function submitHandle(e) {
      if (this.props.onSubmitHandle) {
        e.preventDefault();
        e.stopPropagation();
        this.props.onSubmitHandle(this.state.text, e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          canceltext = _props.canceltext,
          onChangeHandle = _props.onChangeHandle,
          onClearHandle = _props.onClearHandle,
          onCancelHandle = _props.onCancelHandle,
          onSubmitHandle = _props.onSubmitHandle,
          others = _objectWithoutProperties(_props, ['className', 'canceltext', 'onChangeHandle', 'onClearHandle', 'onCancelHandle', 'onSubmitHandle']),
          cls = (0, _classnames2.default)(_defineProperty({
        'jimu-search-bar': true,
        'jimu-focusing': this.state.focus
      }, className, className));

      return _react2.default.createElement(
        'div',
        { className: cls },
        _react2.default.createElement(
          'div',
          { className: 'jimu-search-form' },
          _react2.default.createElement(
            'div',
            { className: 'jimu-search-layout' },
            _react2.default.createElement('span', { className: 'pos-a icon-search', onClick: this.submitHandle.bind(this) }),
            _react2.default.createElement('input', _extends({
              ref: 'searchInput',
              type: 'text',
              className: 'jimu-search-input',
              onFocus: this.focusHandle.bind(this),
              onBlur: this.blurHandle.bind(this),
              onInput: this.changeHandle.bind(this),
              value: this.state.text
            }, others)),
            _react2.default.createElement('span', { className: 'pos-a icon-del', onClick: this.clearHandle.bind(this) })
          )
        ),
        _react2.default.createElement(
          _index2.default,
          { className: 'cancel-btn', disabled: true, size: 'small', onClick: this.cancelHandle.bind(this) },
          canceltext
        )
      );
    }
  }]);

  return Search;
}(_react2.default.Component), _class.propTypes = {
  canceltext: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  name: _propTypes2.default.string,
  onChangeHandle: _propTypes2.default.func,
  onClearHandle: _propTypes2.default.func,
  onSubmitHandle: _propTypes2.default.func,
  onFocusHandle: _propTypes2.default.func,
  onBlurHandle: _propTypes2.default.func,
  onCancelHandle: _propTypes2.default.func
}, _class.defaultProps = {
  canceltext: "取消",
  placeholder: '按姓名或者电话号码搜索',
  name: 'jimu-search',
  onChangeHandle: function onChangeHandle() {},
  onClearHandle: function onClearHandle() {},
  onCancelHandle: function onCancelHandle() {},
  onFocusHandle: function onFocusHandle() {},
  onBlurHandle: function onBlurHandle() {},
  onSubmitHandle: function onSubmitHandle() {}
}, _temp);
exports.default = Search;