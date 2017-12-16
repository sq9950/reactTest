import { observable, action } from 'mobx';

const btnaddStore = observable({
  count: 1,
  syncCount: 1,
  data: {},
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
  ajax: action.bound(function fn() {
    const self = this;
    fetch('/v3/eWebApp')
      .then(response => response.json())
      .then((json) => {
        console.log('111', self);
        self.data = json;
      })
      .catch((err) => {
        console.log('err', err);
      });
  }),
});
export default btnaddStore;

