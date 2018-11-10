import React from 'react';
import Bundle from '../components/Bundle/bundle.js';
// import Load from 'jimu-mobile/dist/components/load';
const Load = ()=>{
  return (
    <div>loading</div>
  )
}
const syncBundle = loadComponent => props => (
  <Bundle load={loadComponent}>
     {Comp => (Comp ? <Comp {...props} /> : <Load />)}
  </Bundle>
);
module.exports = {
  syncBundle,
};
