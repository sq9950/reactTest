'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp; /**
                    * Created by jf on 15/10/27.
                    */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = (_temp = _class = function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    _createClass(Button, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _props = this.props,
                type = _props.type,
                size = _props.size,
                disabled = _props.disabled,
                plain = _props.plain,
                className = _props.className,
                children = _props.children,
                selected = _props.selected,
                float = _props.float,
                others = _objectWithoutProperties(_props, ['type', 'size', 'disabled', 'plain', 'className', 'children', 'selected', 'float']);

            var Component = this.props.href ? 'a' : 'button';
            var cls = (0, _classnames2.default)((_classNames = {
                didi_btn: true
            }, _defineProperty(_classNames, "jimu-button-type-float", float), _defineProperty(_classNames, 'didi_btn_highlight', type === 'highlight' && !plain), _defineProperty(_classNames, 'didi_btn_highlight_disable', type === 'highlight' && disabled), _defineProperty(_classNames, 'didi_btn_border', size === 'small'), _defineProperty(_classNames, 'didi_btn_disable', disabled), _defineProperty(_classNames, 'didi_btn_selected', selected), _defineProperty(_classNames, className, className), _classNames));

            return _react2.default.createElement(
                Component,
                _extends({}, others, { className: cls }),
                children
            );
        }
    }]);

    return Button;
}(_react2.default.Component), _class.propTypes = {
    disabled: _propTypes2.default.bool,
    float: _propTypes2.default.bool,
    type: _propTypes2.default.string,
    size: _propTypes2.default.string
}, _class.defaultProps = {
    disabled: false,
    type: 'primary',
    size: 'normal',
    float: false
}, _temp);
exports.default = Button;