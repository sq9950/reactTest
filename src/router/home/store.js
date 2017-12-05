import { observable, action } from 'mobx';

const homeStore = observable({
  count: 1,
  add: action.bound(function(){
  	this.count++;
  }),
  less: action.bound(function(){
  	this.count--;
  }),
});
export default homeStore;

