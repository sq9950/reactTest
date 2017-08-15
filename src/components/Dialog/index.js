import React, {Component} from 'react'
import jimu from 'jimu-mobile'
import 'jimu-mobile/dist/styles/jimu.min.css'
const {
  Dialog
} = jimu
const {
  Toast,
  Alert,
  Confirm
} = Dialog
export class DialogLayout extends Component {
  constructor () {
    super()
    this.state = {
      confirmShow: false,
      confirmType: 'fail',
      confirmBtnType: 'default',
      confirmTitle: 'null',
      cancelBtnText: '取消',
      confirmBtnText: '确定',
      confirmChildren: null,

      toastShow: false,
      toastContent: 'null',
      toastType: 'success',
      toastTime: 3000,
      toastCallBack: null,

      alertShow: false,
      alertType: 'fail',
      alertChildren: null,
      AlertTitleText: 'null',
      alertLabelText: '我知道了'
    }
    const self = this
    function alertDialog (config = {}) {
      const obj = {
        alertShow: true,
        alertType: config.type || 'fail',
        AlertTitleText: config.msg || 'null',
        alertChildren: config.children || null,
        alertLabelText: config.btnText || '我知道了',
        alertCallBack: config.callBack
      }
      self.setState(obj)
    }
    function toastDialog (config = {}) {
      const obj = {
        toastShow: true,
        toastType: config.type || 'success',
        toastContent: config.msg || 'null',
        toastTime: config.time || 3000,
        toastCallBack: config.callBack
      }

      self.setState(obj)
    }
    function confirmDialog (config = {}) {
      const obj = {
        confirmShow: true,
        confirmType: config.type || 'fail',
        confirmChildren: config.children || null,
        confirmBtnType: config.btnType || 'default',
        confirmTitle: config.msg || 'null',
        cancelBtnText: config.cancelText || '取消',
        confirmBtnText: config.btnText || '确定',
        confirmCancelCallBack: config.cancelCallBack,
        confirmCallBack: config.callBack,
        confirmBeforeCallBack: config.beforeCallBack
      }

      self.setState(obj)
    }

    window.confirmDialog = confirmDialog
    window.toastDialog = toastDialog
    window.alertDialog = alertDialog
  }
  alertClick () {
    const {
      alertCallBack
    } = this.state
    alertCallBack && alertCallBack()
    this.setState({
      alertShow: false
    })
  }
  toastHide () {
    const {
      toastCallBack
    } = this.state
    toastCallBack && toastCallBack()

    this.setState({
      toastShow: false
    })
  }
  confirmCancelClick () {
    const {
      confirmCancelCallBack
    } = this.state

    confirmCancelCallBack && confirmCancelCallBack()

    this.setState({
      confirmShow: false
    })
  }
  confirmClick () {
    let confirmShow = false
    const {
      confirmCallBack,
      confirmBeforeCallBack
    } = this.state
    if (confirmBeforeCallBack) {
      const power = confirmBeforeCallBack()
      if (!power) {
        confirmShow = true
      }
    } else {
      confirmCallBack && confirmCallBack()
    }
    this.setState({
      confirmShow: confirmShow
    })
  }
  render () {
    const {
      toastShow,
      toastContent,
      toastType,
      toastTime,

      alertShow,
      alertType,
      alertChildren,
      AlertTitleText,
      alertLabelText,

      confirmShow,
      confirmType,
      confirmChildren,
      confirmBtnType,
      confirmTitle,
      cancelBtnText,
      confirmBtnText
    } = this.state

    return (
      <div className='dialogLayout'>
        <Alert
          show={alertShow}
          type={alertType}
          title={AlertTitleText}
          buttons={[
            {
              label: alertLabelText,
              onClick: this.alertClick.bind(this)
            }
          ]}
        >
          {alertChildren}
        </Alert>
        <Toast
          content={toastContent}
          toastShow={toastShow}
          type={toastType}
          time={toastTime}
          callback={this.toastHide.bind(this)}
        />
        <Confirm
          show={confirmShow}
          type={confirmType}
          title={confirmTitle}
          buttons={[
            {
              label: cancelBtnText,
              onClick: this.confirmCancelClick.bind(this)
            },
            {
              type: confirmBtnType,
              label: confirmBtnText,
              onClick: this.confirmClick.bind(this)
            }
          ]}
        >
          {
            confirmChildren
          }
        </Confirm>
      </div>
    )
  }
}
