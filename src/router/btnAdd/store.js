import { observable, action } from 'mobx';

const homeStore = observable({
  count: 1,
  syncCount:1,
  add: action.bound(function(){
  	this.count++;
  }),
  less: action.bound(function(){
  	this.count--;
  }),
  syncAdd: action.bound(function(){
  	const self = this;
  	window.setTimeout(()=>{
  		self.syncCount++;
  	},1000)
  }),
  syncLess: action.bound(function(){
  	const self = this;
  	window.setTimeout(()=>{
  		self.syncCount--;
  	},1000)
  }),
});
export default homeStore;

