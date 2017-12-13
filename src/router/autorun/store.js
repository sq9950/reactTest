import { observable, action, computed } from 'mobx';

console.log('computed', computed);
const homeStore = observable({
  count: 1,
  needCount: 1,
  add: action.bound(function fn() {
    this.count += 1;
  }),
  less: action.bound(function fn() {
    this.count -= 1;
  }),
  // sumCount:computed(function(){
  //   console.log('computed')
  //   return this.count + this.needCount;
  // }),

  needAdd: action.bound(function fn() {
    this.needCount += 1;
  }),
  needLess: action.bound(function fn() {
    this.needCount -= 1;
  }),
});
export default homeStore;

