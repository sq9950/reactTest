import { observable, action } from 'mobx';

const homeStore = observable({
  count: 1,
  needCount:1,
  add: action.bound(function () {
  	this.count++;
  }),
  less: action.bound(function () {
  	this.count--;
  }),


  needAdd: action.bound(function () {
    this.needCount++;
  }),
  needLess: action.bound(function () {
    this.needCount--;
  }),
});
export default homeStore;

