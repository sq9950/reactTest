import { observable, action } from 'mobx';

const homeStore = observable({
  count: 1,
  add: action.bound(function () {
  	const self = this;
  	window.setTimeout(() => {
  		self.count++;
  	}, 1000);
  }),
  less: action.bound(function () {
  	const self = this;
  	window.setTimeout(() => {
  		self.count--;
  	}, 1000);
  }),
});
export default homeStore;

