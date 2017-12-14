'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * zhangjingwei 03/20/2017
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


// city_id:"1"
// company_id:"7818735858256994946"
// create_time:"2017-03-22 10:29:06"
// departure_begintime:"2017-03-21 21:00:00"
// departure_endtime:"2017-03-21 21:15:00"
// driver_price:"0.00"
// end_address:"当代城市家园"
// end_lat:"40.945070000000"
// end_lng:"116.921470000000"
// end_time:"1970-01-01 00:00:00"
// id:"8937568324404404255"
// isMaster:false
// isNeed:false
// isPhone:false
// master_id:"8928308773675098325"
// order_id:"1234567890"
// order_status:"9"
// out_order_id:"2"
// passenger_num:"1"
// passenger_price:"0.00"
// price:"0.00"
// ride_type:"4"
// start_address:"数字山谷B区"
// start_lat:"40.043620000000"
// start_lng:"116.289740000000"
// status:"2"
// status_map:"已成单"
// update_time:"2017-03-22 14:56:42"
// use_car_srv:"206"
// user_id:"7818735858861236869"
// user_name:"13552090147"
// user_phone:"13552090147"
// user_type:"2"
// "company_pay": "120.00",
// "total_fee": "60.00",


var Passenger = function (_React$Component) {
  _inherits(Passenger, _React$Component);

  function Passenger(props) {
    _classCallCheck(this, Passenger);

    return _possibleConstructorReturn(this, (Passenger.__proto__ || Object.getPrototypeOf(Passenger)).call(this, props));
  }

  _createClass(Passenger, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          start_address = _props.start_address,
          end_address = _props.end_address,
          user_name = _props.user_name,
          departure_endtime = _props.departure_endtime,
          avatarUrl = _props.avatarUrl,
          isMaster = _props.isMaster,
          isPhone = _props.isPhone,
          isNeed = _props.isNeed,
          user_phone = _props.user_phone,
          company_pay = _props.company_pay,
          total_fee = _props.total_fee,
          order_info = _props.order_info,
          ride_type = _props.ride_type;

      return _react2.default.createElement(
        'div',
        { className: 'jimu_passenger' },
        _react2.default.createElement(
          'div',
          { className: 'jimu_passenger_avatar' },
          _react2.default.createElement('img', { src: require('../../styles/image/default-avatar.png'), width: '50', height: '50' }),
          isNeed && (isMaster ? _react2.default.createElement(
            'p',
            null,
            '\u4E0B\u5355\u4EBA'
          ) : _react2.default.createElement(
            'p',
            null,
            '\u540C\u884C\u4EBA'
          ))
        ),
        _react2.default.createElement(
          'div',
          { className: 'jimu_passenger_userinfo' },
          _react2.default.createElement(
            'p',
            null,
            user_name
          ),
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              { className: 'fz12 green' },
              _react2.default.createElement(
                'span',
                null,
                start_address.length > 12 ? start_address.substr(0, 12) + '...' : start_address
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'fz12 red' },
              _react2.default.createElement(
                'span',
                null,
                end_address.length > 12 ? end_address.substr(0, 12) + '...' : end_address
              )
            )
          ),
          _react2.default.createElement(
            'p',
            { className: 'fz12' },
            departure_endtime
          ),
          ride_type == 4 && order_info && (order_info.status == 0 || order_info.status == 1 || order_info.status == 2 || order_info.status == 4) ? order_info.total_fee != 0 ? _react2.default.createElement(
            'div',
            { className: 'price-layout green' },
            _react2.default.createElement(
              'span',
              null,
              '\u9884\u4F30\u8D39\u7528 [\u603B\u989D: ',
              _react2.default.createElement(
                'b',
                null,
                parseFloat(order_info.total_fee).toFixed(2)
              ),
              ','
            ),
            _react2.default.createElement(
              'span',
              null,
              '\u81EA\u8D39: ',
              _react2.default.createElement(
                'b',
                null,
                parseFloat(order_info.total_fee - order_info.company_pay).toFixed(2)
              ),
              ']'
            )
          ) : "" : null
        ),
        isPhone && _react2.default.createElement(
          'div',
          { className: 'jimu_passenger_telphone' },
          _react2.default.createElement(
            'a',
            { href: 'tel:' + user_phone },
            _react2.default.createElement('span', { className: 'icon-car-icons-phone' })
          )
        ),
        this.props.children && _react2.default.createElement(
          'div',
          { className: 'brd' },
          this.props.children
        )
      );
    }
  }]);

  return Passenger;
}(_react2.default.Component);

Passenger.defaultProps = {
  isMaster: false,
  isNeed: true,
  isPhone: true
};

exports.default = Passenger;