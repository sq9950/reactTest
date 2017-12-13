import { observable, action } from 'mobx';

const homeStore = observable({
  count: 1,
  syncCount: 1,
  add: action.bound(function fn() {
    this.count += 1;
  }),
  less: action.bound(function fn() {
    this.count -= 1;
  }),
  syncAdd: action.bound(function fn() {
    const self = this;
    window.setTimeout(() => {
      self.syncCount += 1;
    }, 1000);
  }),
  syncLess: action.bound(function fn() {
    const self = this;
    window.setTimeout(() => {
      self.syncCount -= 1;
    }, 1000);
  }),
});
export default homeStore;

