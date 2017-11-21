import React from 'react';
import Bundle from '../components/Bundle/bundle.js';

function syncBundle(component) {
  return () => {
    return (
      <Bundle load={component}>
        {
          List => <List />
        }
      </Bundle>);
  };
}
module.exports = {
  syncBundle,
};
