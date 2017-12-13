import { observable } from 'mobx';
import { RouterStore } from 'mobx-react-router';

const routingStore = new RouterStore();

const publicStore = observable({
  home: 1,
});

export default {
  routing: routingStore,
  publicStore,
};
