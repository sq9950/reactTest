import { observable, action, computed } from 'mobx';
console.log('computed',computed)
const homeStore = observable({
  count: 1,
  needCount:1,
  add: action.bound(function () {
  	this.count++;
  }),
  less: action.bound(function () {
  	this.count--;
  }),
  // sumCount:computed(function(){
  //   console.log('computed')
  //   return this.count + this.needCount;
  // }),

  needAdd: action.bound(function () {
    this.needCount++;
  }),
  needLess: action.bound(function () {
    this.needCount--;
  }),
});
export default homeStore;

