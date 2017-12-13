import { observable, action } from 'mobx';

const homeStore = observable({
  count: 1,
  needCount: 1,
  add: action.bound(function fn() {
    this.count += 1;
  }),
  less: action.bound(function fn() {
    this.count -= 1;
  }),
  needAdd: action.bound(function fn() {
    this.needCount += 1;
  }),
  needLess: action.bound(function fn() {
    this.needCount -= 1;
  }),
});
export default homeStore;

