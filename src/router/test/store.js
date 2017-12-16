import { observable, action } from 'mobx';

const testStore = observable({
  count: 1,
  add: action.bound(function fn() {
    this.count += 1;
  }),
  less: action.bound(function fn() {
    this.count -= 1;
  }),
});
export default testStore;

